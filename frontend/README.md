This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It is using postgres (supabase) for persistence.
## Getting Started

### Supabase
1. Install `supabasec-cli`: https://github.com/supabase/cli
2. At the root of the repository run:
`supbase start`
3. `supabase status` should show the information about supabase running locally.

If you are doing changes to the local database and would like to see them persisted to remote run:
1. `supabase db commit "message"`
2. `supabase db push`

We should move supabase db push to the github action at some point in future. 

### Nextjs Application
1. `yarn install`
2. update `.env` with your database credentials
3. `yarn start`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### API
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.