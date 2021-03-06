-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

ALTER TABLE IF EXISTS public.integration_github DROP COLUMN IF EXISTS "user ";

ALTER TABLE IF EXISTS public.integration_github
    ADD COLUMN user_id uuid;
ALTER TABLE IF EXISTS public.integration_github DROP CONSTRAINT IF EXISTS "integration_github_user _fkey";

ALTER TABLE IF EXISTS public.integration_github
    ADD CONSTRAINT integration_github_user_id_fkey FOREIGN KEY (user_id)
    REFERENCES auth.users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

CREATE POLICY "Enable delete for users based on user_id"
    ON public.integration_github
    AS PERMISSIVE
    FOR DELETE
    TO public
    USING ((auth.uid() = user_id));

CREATE POLICY "Enable insert for users based on user_id"
    ON public.integration_github
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK ((auth.uid() = user_id));


CREATE POLICY "Enable read for users based on user_id"
    ON public.integration_github
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((auth.uid() = user_id));

CREATE POLICY "Enable update for users based on user_id"
    ON public.integration_github
    AS PERMISSIVE
    FOR UPDATE
    TO public
    USING ((auth.uid() = user_id));
