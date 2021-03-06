-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.graph_auth_tokens
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_at timestamp with time zone DEFAULT now(),
    user_id uuid,
    CONSTRAINT graph_auth_tokens_pkey PRIMARY KEY (id),
    CONSTRAINT graph_auth_tokens_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.graph_auth_tokens
    OWNER to postgres;

ALTER TABLE IF EXISTS public.graph_auth_tokens
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.graph_auth_tokens TO anon;

GRANT ALL ON TABLE public.graph_auth_tokens TO authenticated;

GRANT ALL ON TABLE public.graph_auth_tokens TO postgres;

GRANT ALL ON TABLE public.graph_auth_tokens TO service_role;

COMMENT ON TABLE public.graph_auth_tokens
    IS 'Authentication tokens used for interacting with hosted graph';
CREATE POLICY "Enable delete for users based on user_id"
    ON public.graph_auth_tokens
    AS PERMISSIVE
    FOR DELETE
    TO public
    USING ((auth.uid() = user_id));
CREATE POLICY "Enable insert for users based on user_id"
    ON public.graph_auth_tokens
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK ((auth.uid() = user_id));
CREATE POLICY "Enable select for users based on user_id"
    ON public.graph_auth_tokens
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((auth.uid() = user_id));
CREATE POLICY "Enable update for users based on user_id"
    ON public.graph_auth_tokens
    AS PERMISSIVE
    FOR UPDATE
    TO public
    USING ((auth.uid() = user_id));