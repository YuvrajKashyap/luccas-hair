# Supabase Migration Drafts

These SQL files are planning drafts for the future Supabase project. They have not been applied to a live database.

The Supabase CLI is not installed in this local environment, so these are not timestamped CLI-generated migration files yet. Before applying them, install the Supabase CLI, create an official migration with `supabase migration new`, copy the reviewed SQL into that generated file, and run the Supabase advisors.

Lucca's Hair uses the custom `luccas_hair` schema in the shared Supabase project. Do not create app tables in `public`.
