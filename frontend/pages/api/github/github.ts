import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';
import { createAppAuth } from '@octokit/auth-app';

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
  const repo = request.query.repo as string;
  try {
    const installation = await octokit.rest.apps.getAuthenticated({
      username: owner,
      headers: {
        authorization: 'Bearer ' + auth.token,
      },
    });
    console.log('installation', installation);
    const apps = await octokit.rest.apps.getRepoInstallation({
      repo,
      owner: owner,
      headers: {
        authorization: 'Bearer ' + auth.token,
      },
    });
    console.log('apps', apps);
    const installations = await octokit.request('GET /app/installations', {
      headers: {
        authorization: 'Bearer ' + auth.token,
      },
    });

    console.log('installations', installations);
    const installationAccessToken = await octokit.request(
      'POST /app/installations/' + installations.data[0].id + '/access_tokens',
      {
        headers: {
          authorization: 'Bearer ' + auth.token,
        },
      }
    );

    console.log('installationAccessToken', installationAccessToken.data.token);

    const installationRepos = await octokit.request('GET /installation/repositories', {
      headers: {
        authorization: 'token ' + installationAccessToken.data.token,
      },
    });

    console.log('installationRepos', installationRepos.data);
    response.json(installation);
  } catch (e) {
    console.log(e);
    response.json('fail');
  }
}
