import { NextApiRequest, NextApiResponse } from 'next';
import { createAppAuth } from '@octokit/auth-app';
import { Octokit } from '@octokit/core';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const authCreator = createAppAuth({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientType: 'github-app',
    clientSecret: process.env.CLIENT_SECRET,
  });
  const auth = await authCreator({ type: 'app' });
  console.log('qqq', auth);
  const octokit = new Octokit(auth);
  const owner = request.query.owner as string;
  if (!owner) {
    response.status(400).send('Missing owner');
  }
  const userToken = request.headers.authorization.slice(7);
  try {
    const installations = await octokit.request('GET /app/installations', {
      headers: {
        authorization: 'Bearer ' + auth.token,
      },
    });
    const installationId = installations.data.find((data) => data.account.login === owner).id;
    const installationRepos = await octokit.request(
      `GET /user/installations/${installationId}/repositories`,
      {
        headers: {
          authorization: 'token ' + userToken,
        },
      }
    );
    console.log('installationRepos', installationRepos.data);
    response.json({
      installationId: installationId,
    });
  } catch (e) {
    console.log(e);
    response.json('fail');
  }
}
