import { createClient } from "@supabase/supabase-js";

export function createLeadsClient() {
  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !secret) return null;

  return createClient(url, secret, { auth: { persistSession: false, autoRefreshToken: false } });
}
