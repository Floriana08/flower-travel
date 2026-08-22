-- Altrove membership schema (Supabase / PostgreSQL)
-- Apply in Supabase SQL editor. Enable RLS policies below.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique,
  first_name text,
  last_name text,
  membership_status text not null default 'none',
  membership_tier text default 'founding',
  stripe_customer_id text,
  membership_started_at timestamptz,
  membership_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text not null,
  slug text not null unique,
  image text,
  summary text,
  published boolean not null default false
);

create table if not exists public.places (
  id uuid primary key default gen_random_uuid(),
  destination_id uuid references public.destinations (id) on delete cascade,
  name text not null,
  slug text not null,
  category text not null,
  neighbourhood text,
  description text,
  altrove_note text,
  address text,
  latitude double precision,
  longitude double precision,
  google_maps_url text,
  booking_url text,
  image text,
  member_only boolean not null default true,
  published boolean not null default false
);

create table if not exists public.guides (
  id uuid primary key default gen_random_uuid(),
  destination_id uuid references public.destinations (id) on delete set null,
  title text not null,
  slug text not null unique,
  summary text,
  content text,
  cover_image text,
  member_only boolean not null default true,
  published boolean not null default false
);

create table if not exists public.saved_places (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  place_id uuid not null references public.places (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, place_id)
);

create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  destination text,
  start_date date,
  end_date date,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists public.trip_items (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips (id) on delete cascade,
  type text not null,
  title text not null,
  description text,
  date date,
  time text,
  address text,
  maps_url text,
  booking_url text,
  altrove_note text,
  sort_order integer not null default 0
);

create table if not exists public.travel_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  destination text not null,
  start_date text,
  end_date text,
  travellers text,
  interests text,
  accommodation text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.saved_places enable row level security;
alter table public.trips enable row level security;
alter table public.trip_items enable row level security;
alter table public.travel_requests enable row level security;
alter table public.places enable row level security;
alter table public.guides enable row level security;
alter table public.destinations enable row level security;

create policy "Profiles are self-readable"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Profiles are self-updatable"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Saved places are private"
  on public.saved_places for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Trips are private"
  on public.trips for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Trip items follow trip ownership"
  on public.trip_items for all
  using (
    exists (
      select 1 from public.trips t
      where t.id = trip_id and t.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.trips t
      where t.id = trip_id and t.user_id = auth.uid()
    )
  );

create policy "Travel requests are private"
  on public.travel_requests for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Published destinations are readable"
  on public.destinations for select
  using (published = true);

create policy "Active members read published member places"
  on public.places for select
  using (
    published = true
    and (
      member_only = false
      or exists (
        select 1 from public.profiles p
        where p.id = auth.uid() and p.membership_status = 'active'
      )
    )
  );

create policy "Active members read published member guides"
  on public.guides for select
  using (
    published = true
    and (
      member_only = false
      or exists (
        select 1 from public.profiles p
        where p.id = auth.uid() and p.membership_status = 'active'
      )
    )
  );
