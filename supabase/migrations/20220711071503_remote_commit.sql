-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

REVOKE ALL ON TABLE public.user_nft FROM anon;
REVOKE ALL ON TABLE public.user_nft FROM authenticated;
REVOKE ALL ON TABLE public.user_nft FROM service_role;
REVOKE ALL ON TABLE public.user_nft FROM supabase_admin;
GRANT ALL ON TABLE public.user_nft TO anon;

GRANT ALL ON TABLE public.user_nft TO supabase_admin;

GRANT ALL ON TABLE public.user_nft TO authenticated;

GRANT ALL ON TABLE public.user_nft TO service_role;

REVOKE ALL ON TABLE public.files FROM anon;
REVOKE ALL ON TABLE public.files FROM authenticated;
REVOKE ALL ON TABLE public.files FROM service_role;
REVOKE ALL ON TABLE public.files FROM supabase_admin;
GRANT ALL ON TABLE public.files TO anon;

GRANT ALL ON TABLE public.files TO supabase_admin;

GRANT ALL ON TABLE public.files TO authenticated;

GRANT ALL ON TABLE public.files TO service_role;

REVOKE ALL ON TABLE public.integration_github FROM authenticated;
REVOKE ALL ON TABLE public.integration_github FROM postgres;
REVOKE ALL ON TABLE public.integration_github FROM service_role;
GRANT ALL ON TABLE public.integration_github TO authenticated;

GRANT ALL ON TABLE public.integration_github TO postgres;

GRANT ALL ON TABLE public.integration_github TO service_role;

REVOKE ALL ON TABLE public.user_wallet FROM anon;
REVOKE ALL ON TABLE public.user_wallet FROM authenticated;
REVOKE ALL ON TABLE public.user_wallet FROM service_role;
REVOKE ALL ON TABLE public.user_wallet FROM supabase_admin;
GRANT ALL ON TABLE public.user_wallet TO anon;

GRANT ALL ON TABLE public.user_wallet TO supabase_admin;

GRANT ALL ON TABLE public.user_wallet TO authenticated;

GRANT ALL ON TABLE public.user_wallet TO service_role;

REVOKE ALL ON TABLE public.nfts FROM anon;
REVOKE ALL ON TABLE public.nfts FROM authenticated;
REVOKE ALL ON TABLE public.nfts FROM service_role;
REVOKE ALL ON TABLE public.nfts FROM supabase_admin;
GRANT ALL ON TABLE public.nfts TO anon;

GRANT ALL ON TABLE public.nfts TO supabase_admin;

GRANT ALL ON TABLE public.nfts TO authenticated;

GRANT ALL ON TABLE public.nfts TO service_role;

REVOKE ALL ON TABLE public.groups FROM anon;
REVOKE ALL ON TABLE public.groups FROM authenticated;
REVOKE ALL ON TABLE public.groups FROM service_role;
REVOKE ALL ON TABLE public.groups FROM supabase_admin;
GRANT ALL ON TABLE public.groups TO anon;

GRANT ALL ON TABLE public.groups TO supabase_admin;

GRANT ALL ON TABLE public.groups TO authenticated;

GRANT ALL ON TABLE public.groups TO service_role;

REVOKE ALL ON TABLE public.reward_program FROM anon;
REVOKE ALL ON TABLE public.reward_program FROM authenticated;
REVOKE ALL ON TABLE public.reward_program FROM service_role;
REVOKE ALL ON TABLE public.reward_program FROM supabase_admin;
GRANT ALL ON TABLE public.reward_program TO anon;

GRANT ALL ON TABLE public.reward_program TO supabase_admin;

GRANT ALL ON TABLE public.reward_program TO authenticated;

GRANT ALL ON TABLE public.reward_program TO service_role;

REVOKE ALL ON TABLE public.graph_projects FROM authenticated;
REVOKE ALL ON TABLE public.graph_projects FROM postgres;
REVOKE ALL ON TABLE public.graph_projects FROM service_role;
GRANT ALL ON TABLE public.graph_projects TO authenticated;

GRANT ALL ON TABLE public.graph_projects TO postgres;

GRANT ALL ON TABLE public.graph_projects TO service_role;
