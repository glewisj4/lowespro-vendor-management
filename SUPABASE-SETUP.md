# Supabase Integration Setup Guide

## ✅ Completed Steps:
1. Installed @supabase/supabase-js library
2. Created `src/supabaseClient.js` configuration file
3. Created `.env` file with Supabase credentials (for local development)
4. Created `supabase-schema.sql` with complete database schema

## 📝 Next Steps to Complete Integration:

### 1. Run SQL Schema in Supabase
1. Go to https://bekadienxdiapvfagpxi.supabase.co
2. Navigate to **SQL Editor** in the left sidebar
3. Copy the contents of `supabase-schema.sql`
4. Paste into the SQL Editor and click **RUN**
5. This will create 6 tables with sample data:
   - vendors (3 sample records)
   - sales_reps (3 sample records)
   - pro_customers (3 sample records)
   - brands (3 sample records)
   - categories (3 sample records)
   - services (3 sample records)

### 2. Set up Vercel Environment Variables
1. Go to https://vercel.com/greg-lewis-projects-08b5aac8/lowespro-vendor-management/settings/environment-variables
2. Add these environment variables:
   - `VITE_SUPABASE_URL` = `https://bekadienxdiapvfagpxi.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = (your anon key from Supabase)

### 3. Database Tables Created:
- **vendors**: Store vendor information
- **sales_reps**: Sales representative data
- **pro_customers**: Pro customer accounts
- **brands**: Product brands
- **categories**: Product categories
- **services**: Available services

### 4. Testing the Connection
Once deployed, the dashboard will automatically fetch data from Supabase tables.

## 🔒 Security Notes:
- `.env` file is gitignored and won't be committed
- Environment variables are securely stored in Vercel
- Anon key is safe to use in frontend (RLS policies control access)
