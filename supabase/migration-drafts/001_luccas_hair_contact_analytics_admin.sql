-- Draft migration for Lucca's Hair.
-- Review before applying to a live Supabase project.
-- App-owned tables belong under luccas_hair.* only.

create schema if not exists luccas_hair;

create extension if not exists pgcrypto;

create table if not exists luccas_hair.allowed_emails (
  email text primary key,
  role text not null default 'owner' check (role in ('owner', 'admin')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table luccas_hair.allowed_emails enable row level security;

create table if not exists luccas_hair.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  display_name text,
  role text not null default 'admin' check (role in ('owner', 'admin')),
  access_status text not null default 'active' check (access_status in ('active', 'disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table luccas_hair.users enable row level security;

create table if not exists luccas_hair.user_state (
  user_id uuid primary key references luccas_hair.users(id) on delete cascade,
  last_seen_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table luccas_hair.user_state enable row level security;

create table if not exists luccas_hair.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text not null,
  source_page text not null default '/contact',
  status text not null default 'new' check (status in ('new', 'reviewed', 'archived')),
  user_agent text,
  ip_hash text,
  created_at timestamptz not null default now()
);

alter table luccas_hair.contact_submissions enable row level security;

create table if not exists luccas_hair.analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null check (
    event_type in (
      'booking_click',
      'text_click',
      'call_click',
      'email_click',
      'directions_click',
      'instagram_click',
      'product_interest_click',
      'contact_submit'
    )
  ),
  page_path text,
  metadata jsonb not null default '{}'::jsonb,
  session_id text,
  user_agent text,
  ip_hash text,
  created_at timestamptz not null default now()
);

alter table luccas_hair.analytics_events enable row level security;

-- No broad anon or authenticated policies are created in this draft.
-- Contact submissions and analytics events are written through server actions
-- and route handlers with the server-only Supabase service role key.
-- Admin reads should be implemented server-side after validating Supabase Auth
-- and the app-specific admin allowlist.
