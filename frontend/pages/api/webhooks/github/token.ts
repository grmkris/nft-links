import { NextApiRequest, NextApiResponse } from 'next';
import { OAuthApp } from '@octokit/oauth-app';

const app = new OAuthApp({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientType: 'github-app',
  clientSecret: process.env.CLIENT_SECRET,
});

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { authentication } = await app.createToken({
    code: request.query.code as string,
  });

  console.log(authentication.token);
  response.json(authentication);
}
