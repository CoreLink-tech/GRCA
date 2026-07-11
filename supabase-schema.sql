-- Run this in the Supabase SQL editor for project lkjhapxxkwswnsklnmdl.
-- This creates the tables used by the site and the Storage bucket used for leadership images.
-- It keeps anonymous read/write access because the current admin dashboard is a static client app.
-- Important: this is convenient for setup, but it is not a secure long-term admin model.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.updates (
  id text primary key,
  title text not null default '',
  description text not null default '',
  date text not null default '',
  time text not null default '',
  location text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id text primary key,
  title text not null default '',
  description text not null default '',
  date_label text not null default '',
  time_range text not null default '',
  location text not null default '',
  theme text not null default 'gold',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.previous_services (
  id text primary key,
  title text not null default '',
  service_date date,
  url text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.live_links (
  id text primary key,
  label text not null default '',
  url text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leadership_profiles (
  id text primary key,
  kind text not null default 'static',
  role text not null default '',
  name text not null default '',
  bio text not null default '',
  verse text not null default '',
  image_data_url text not null default '',
  image_alt text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id text primary key,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_updates_updated_at on public.updates;
create trigger set_updates_updated_at
before update on public.updates
for each row
execute function public.set_updated_at();

drop trigger if exists set_events_updated_at on public.events;
create trigger set_events_updated_at
before update on public.events
for each row
execute function public.set_updated_at();

drop trigger if exists set_previous_services_updated_at on public.previous_services;
create trigger set_previous_services_updated_at
before update on public.previous_services
for each row
execute function public.set_updated_at();

drop trigger if exists set_live_links_updated_at on public.live_links;
create trigger set_live_links_updated_at
before update on public.live_links
for each row
execute function public.set_updated_at();

drop trigger if exists set_leadership_profiles_updated_at on public.leadership_profiles;
create trigger set_leadership_profiles_updated_at
before update on public.leadership_profiles
for each row
execute function public.set_updated_at();

drop trigger if exists set_site_content_updated_at on public.site_content;
create trigger set_site_content_updated_at
before update on public.site_content
for each row
execute function public.set_updated_at();

alter table public.updates enable row level security;
alter table public.events enable row level security;
alter table public.previous_services enable row level security;
alter table public.live_links enable row level security;
alter table public.leadership_profiles enable row level security;
alter table public.site_content enable row level security;

drop policy if exists "anon full updates" on public.updates;
create policy "anon full updates"
on public.updates
for all
to anon
using (true)
with check (true);

drop policy if exists "anon full events" on public.events;
create policy "anon full events"
on public.events
for all
to anon
using (true)
with check (true);

drop policy if exists "anon full previous_services" on public.previous_services;
create policy "anon full previous_services"
on public.previous_services
for all
to anon
using (true)
with check (true);

drop policy if exists "anon full live_links" on public.live_links;
create policy "anon full live_links"
on public.live_links
for all
to anon
using (true)
with check (true);

drop policy if exists "anon full leadership_profiles" on public.leadership_profiles;
create policy "anon full leadership_profiles"
on public.leadership_profiles
for all
to anon
using (true)
with check (true);

drop policy if exists "anon full site_content" on public.site_content;
create policy "anon full site_content"
on public.site_content
for all
to anon
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('leadership-images', 'leadership-images', true)
on conflict (id) do update
set public = excluded.public;

drop policy if exists "anon read leadership images" on storage.objects;
create policy "anon read leadership images"
on storage.objects
for select
to anon
using (bucket_id = 'leadership-images');

drop policy if exists "anon upload leadership images" on storage.objects;
create policy "anon upload leadership images"
on storage.objects
for insert
to anon
with check (bucket_id = 'leadership-images');

drop policy if exists "anon update leadership images" on storage.objects;
create policy "anon update leadership images"
on storage.objects
for update
to anon
using (bucket_id = 'leadership-images')
with check (bucket_id = 'leadership-images');

drop policy if exists "anon delete leadership images" on storage.objects;
create policy "anon delete leadership images"
on storage.objects
for delete
to anon
using (bucket_id = 'leadership-images');

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'updates'
  ) then
    alter publication supabase_realtime add table public.updates;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'events'
  ) then
    alter publication supabase_realtime add table public.events;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'previous_services'
  ) then
    alter publication supabase_realtime add table public.previous_services;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'live_links'
  ) then
    alter publication supabase_realtime add table public.live_links;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'leadership_profiles'
  ) then
    alter publication supabase_realtime add table public.leadership_profiles;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'site_content'
  ) then
    alter publication supabase_realtime add table public.site_content;
  end if;
end
$$;
