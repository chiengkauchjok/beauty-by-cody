create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null
    check (char_length(btrim(customer_name)) between 1 and 200),
  phone text not null
    check (char_length(btrim(phone)) between 7 and 32),
  email text
    check (email is null or char_length(email) <= 320),
  service text not null
    check (service in ('full-glam', 'soft-glam', 'bridal', 'home-service')),
  appointment_date date not null,
  preferred_time time without time zone not null,
  location text,
  notes text,
  deposit_amount numeric(10, 2) generated always as (
    case service
      when 'full-glam' then 125000
      when 'soft-glam' then 100000
      when 'bridal' then 50
      when 'home-service' then 150000
    end
  ) stored,
  currency text generated always as (
    case service
      when 'bridal' then 'USD'
      else 'SSP'
    end
  ) stored,
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz not null default now(),
  constraint bookings_home_service_location_required
    check (service <> 'home-service' or nullif(btrim(location), '') is not null)
);

alter table public.bookings enable row level security;

revoke all on table public.bookings from public, anon, authenticated;
grant usage on schema public to anon, authenticated;
grant insert (
  customer_name,
  phone,
  email,
  service,
  appointment_date,
  preferred_time,
  location,
  notes
) on table public.bookings to anon, authenticated;

drop policy if exists "Customers can submit pending bookings" on public.bookings;

create policy "Customers can submit pending bookings"
  on public.bookings
  for insert
  to anon, authenticated
  with check (status = 'pending' and appointment_date >= current_date);
