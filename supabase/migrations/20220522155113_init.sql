-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.profiles
(
    id uuid NOT NULL,
    updated_at timestamp with time zone,
    username text COLLATE pg_catalog."default",
    avatar_url text COLLATE pg_catalog."default",
    website text COLLATE pg_catalog."default",
    "pinataString" character varying COLLATE pg_catalog."default",
    CONSTRAINT profiles_pkey PRIMARY KEY (id),
    CONSTRAINT profiles_username_key UNIQUE (username),
    CONSTRAINT profiles_id_fkey FOREIGN KEY (id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT username_length CHECK (char_length(username) >= 3)
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.groups
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone DEFAULT now(),
    creator uuid,
    name character varying COLLATE pg_catalog."default",
    image character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    CONSTRAINT groups_pkey PRIMARY KEY (id),
    CONSTRAINT groups_creator_fkey FOREIGN KEY (creator)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.reward_program
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone DEFAULT now(),
    description text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    owner uuid NOT NULL,
    CONSTRAINT reward_program_pkey PRIMARY KEY (id),
    CONSTRAINT reward_program_owner_fkey FOREIGN KEY (owner)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.profiles
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.profiles
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.profiles TO supabase_admin;

GRANT ALL ON TABLE public.profiles TO authenticated;

GRANT ALL ON TABLE public.profiles TO anon;

GRANT ALL ON TABLE public.profiles TO postgres;

GRANT ALL ON TABLE public.profiles TO service_role;
CREATE POLICY "Public profiles are viewable by everyone."
    ON public.profiles
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);
CREATE POLICY "Users can insert their own profile."
    ON public.profiles
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK ((auth.uid() = id));
CREATE POLICY "Users can update own profile."
    ON public.profiles
    AS PERMISSIVE
    FOR UPDATE
    TO public
    USING ((auth.uid() = id));

CREATE TABLE IF NOT EXISTS public.user_groups
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    group_id bigint NOT NULL,
    user_id uuid,
    name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    CONSTRAINT user_groups_pkey PRIMARY KEY (id),
    CONSTRAINT user_groups_group_id_fkey FOREIGN KEY (group_id)
        REFERENCES public.groups (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_groups_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_groups
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.user_groups
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_groups TO supabase_admin;

GRANT ALL ON TABLE public.user_groups TO authenticated;

GRANT ALL ON TABLE public.user_groups TO anon;

GRANT ALL ON TABLE public.user_groups TO postgres;

GRANT ALL ON TABLE public.user_groups TO service_role;

COMMENT ON TABLE public.user_groups
    IS 'Mapping table for storing information about users in a group';

COMMENT ON COLUMN public.user_groups.name
    IS 'optional name of the user';

COMMENT ON COLUMN public.user_groups.email
    IS 'optional email of the member';
CREATE POLICY "Allow deleting members by their admins"
    ON public.user_groups
    AS PERMISSIVE
    FOR DELETE
    TO public
    USING ((EXISTS ( SELECT 1
   FROM groups g
  WHERE ((g.id = user_groups.group_id) AND (g.creator = auth.uid())))));
CREATE POLICY "Allow reading members of groups to admins"
    ON public.user_groups
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((EXISTS ( SELECT 1
   FROM groups g
  WHERE ((g.id = user_groups.group_id) AND (g.creator = auth.uid())))));
CREATE POLICY "Allow updating users in groups from their admins"
    ON public.user_groups
    AS PERMISSIVE
    FOR UPDATE
    TO public
    USING ((EXISTS ( SELECT 1
   FROM groups g
  WHERE ((g.id = user_groups.group_id) AND (g.creator = auth.uid())))));
CREATE POLICY "Enable insert for authenticated users only"
    ON public.user_groups
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK ((EXISTS ( SELECT 1
   FROM groups g
  WHERE ((g.id = user_groups.group_id) AND (g.creator = auth.uid())))));

CREATE TABLE IF NOT EXISTS public.files
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    "user" uuid NOT NULL,
    size bigint NOT NULL,
    type character varying COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default",
    CONSTRAINT media_pkey PRIMARY KEY (id),
    CONSTRAINT media_user_fkey FOREIGN KEY ("user")
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.files
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.files
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.files TO anon;

GRANT ALL ON TABLE public.files TO authenticated;

GRANT ALL ON TABLE public.files TO postgres;

GRANT ALL ON TABLE public.files TO service_role;

GRANT ALL ON TABLE public.files TO supabase_admin;

COMMENT ON TABLE public.files
    IS 'Media uploaded to the ipfs by the users';

COMMENT ON COLUMN public.files.type
    IS 'filetype';

COMMENT ON COLUMN public.files.name
    IS 'filename';
CREATE POLICY "Enable delete for users based on user_id"
    ON public.files
    AS PERMISSIVE
    FOR DELETE
    TO public
    USING ((auth.uid() = "user"));
CREATE POLICY "Enable select for users based on user_id"
    ON public.files
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((auth.uid() = "user"));

CREATE TABLE IF NOT EXISTS public.reward_groups
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone DEFAULT now(),
    reward_program bigint NOT NULL,
    "group" bigint NOT NULL,
    CONSTRAINT reward_groups_pkey PRIMARY KEY (id),
    CONSTRAINT reward_groups_group_fkey FOREIGN KEY ("group")
        REFERENCES public.groups (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT reward_groups_reward_program_fkey FOREIGN KEY (reward_program)
        REFERENCES public.reward_program (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.reward_groups
    OWNER to supabase_admin;

GRANT ALL ON TABLE public.reward_groups TO supabase_admin;

GRANT ALL ON TABLE public.reward_groups TO authenticated;

GRANT ALL ON TABLE public.reward_groups TO anon;

GRANT ALL ON TABLE public.reward_groups TO postgres;

GRANT ALL ON TABLE public.reward_groups TO service_role;

COMMENT ON TABLE public.reward_groups
    IS 'Groups of people asigned to the reward_program';

CREATE TABLE IF NOT EXISTS public.user_wallet
(
    user_id uuid NOT NULL,
    wallet character varying COLLATE pg_catalog."default" NOT NULL,
    nonce character varying COLLATE pg_catalog."default",
    signed_nonce character varying COLLATE pg_catalog."default",
    CONSTRAINT user_wallet_pkey PRIMARY KEY (user_id, wallet),
    CONSTRAINT user_wallet_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_wallet
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.user_wallet
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_wallet TO anon;

GRANT ALL ON TABLE public.user_wallet TO authenticated;

GRANT ALL ON TABLE public.user_wallet TO postgres;

GRANT ALL ON TABLE public.user_wallet TO service_role;

GRANT ALL ON TABLE public.user_wallet TO supabase_admin;

COMMENT ON TABLE public.user_wallet
    IS 'Table for storing wallet information about users';
CREATE POLICY "Users can see only their linked wallets"
    ON public.user_wallet
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((auth.uid() = user_id));


ALTER TABLE IF EXISTS public.groups
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.groups
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.groups TO anon;

GRANT ALL ON TABLE public.groups TO authenticated;

GRANT ALL ON TABLE public.groups TO postgres;

GRANT ALL ON TABLE public.groups TO service_role;

GRANT ALL ON TABLE public.groups TO supabase_admin;

COMMENT ON TABLE public.groups
    IS 'User groups used for various purposes';
CREATE POLICY "Enable delete for users based on user_id"
    ON public.groups
    AS PERMISSIVE
    FOR DELETE
    TO public
    USING ((auth.uid() = creator));
CREATE POLICY "Enable insert for authenticated users only"
    ON public.groups
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK ((auth.role() = 'authenticated'::text));
CREATE POLICY "Enable update for users based on email"
    ON public.groups
    AS PERMISSIVE
    FOR UPDATE
    TO public
    USING ((auth.uid() = creator))
    WITH CHECK ((auth.uid() = creator));
CREATE POLICY "Lets users see only their own groups"
    ON public.groups
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((auth.uid() = creator));

CREATE TABLE IF NOT EXISTS public.user_nft
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    "user" uuid,
    wallet character varying COLLATE pg_catalog."default",
    "txHash" character varying COLLATE pg_catalog."default",
    contract character varying COLLATE pg_catalog."default",
    nft uuid,
    CONSTRAINT user_nft_pkey PRIMARY KEY (id),
    CONSTRAINT user_nft_user_fkey FOREIGN KEY ("user")
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_nft
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.user_nft
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_nft TO anon;

GRANT ALL ON TABLE public.user_nft TO authenticated;

GRANT ALL ON TABLE public.user_nft TO postgres;

GRANT ALL ON TABLE public.user_nft TO service_role;

GRANT ALL ON TABLE public.user_nft TO supabase_admin;

COMMENT ON TABLE public.user_nft
    IS 'Nfts claimed by the user';

CREATE TABLE IF NOT EXISTS public.nfts
(
    created_at timestamp with time zone DEFAULT now(),
    metadata character varying COLLATE pg_catalog."default" NOT NULL,
    chain character varying COLLATE pg_catalog."default",
    "user" uuid,
    "limit" bigint NOT NULL,
    active boolean,
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying COLLATE pg_catalog."default",
    CONSTRAINT nfts_pkey PRIMARY KEY (id),
    CONSTRAINT nfts_user_fkey FOREIGN KEY ("user")
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.nfts
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.nfts
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.nfts TO anon;

GRANT ALL ON TABLE public.nfts TO authenticated;

GRANT ALL ON TABLE public.nfts TO postgres;

GRANT ALL ON TABLE public.nfts TO service_role;

GRANT ALL ON TABLE public.nfts TO supabase_admin;

COMMENT ON TABLE public.nfts
    IS 'Hosted nfts created by the users';

COMMENT ON COLUMN public.nfts.name
    IS 'name of the nft';
CREATE POLICY "Enable insert for users based on user_id"
    ON public.nfts
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK ((auth.uid() = "user"));
CREATE POLICY "Enable select for users based on user_id"
    ON public.nfts
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((auth.uid() = "user"));

CREATE TABLE IF NOT EXISTS public.reward_nft
(
    created_at timestamp with time zone DEFAULT now(),
    nft uuid NOT NULL,
    reward_program bigint NOT NULL,
    condition character varying COLLATE pg_catalog."default",
    CONSTRAINT reward_nft_pkey PRIMARY KEY (nft, reward_program),
    CONSTRAINT reward_nft_reward_program_key UNIQUE (reward_program),
    CONSTRAINT reward_nft_nft_fkey FOREIGN KEY (nft)
        REFERENCES public.nfts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT reward_nft_reward_program_fkey FOREIGN KEY (reward_program)
        REFERENCES public.reward_program (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.reward_nft
    OWNER to supabase_admin;

GRANT ALL ON TABLE public.reward_nft TO supabase_admin;

GRANT ALL ON TABLE public.reward_nft TO authenticated;

GRANT ALL ON TABLE public.reward_nft TO anon;

GRANT ALL ON TABLE public.reward_nft TO postgres;

GRANT ALL ON TABLE public.reward_nft TO service_role;

ALTER TABLE IF EXISTS public.reward_program
    OWNER to supabase_admin;

GRANT ALL ON TABLE public.reward_program TO anon;

GRANT ALL ON TABLE public.reward_program TO authenticated;

GRANT ALL ON TABLE public.reward_program TO postgres;

GRANT ALL ON TABLE public.reward_program TO service_role;

GRANT ALL ON TABLE public.reward_program TO supabase_admin;

COMMENT ON TABLE public.reward_program
    IS 'Reward systems';
