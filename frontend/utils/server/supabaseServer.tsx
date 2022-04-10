import { createClient } from "@supabase/supabase-js";

export const supabaseServerClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
