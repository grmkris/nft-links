import { useQuery } from 'react-query';
import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';
type ListUserReposResponse =
  Endpoints['GET /user/installations/{installation_id}/repositories']['response']['data']['repositories'];
export const useGithubRepos = (token: string, owner = 'grmkris') => {
  return useQuery<ListUserReposResponse>(
    'githubRepos',
    async () => await getAvailableRepos(token, owner),
    {
      enabled: !!token && !!owner,
    }
  );
};

const getAvailableRepos = async (token: string, owner: string) => {
  console.log('getAvailableRepos', token, owner);
  const octokit = new Octokit({ auth: token });
  const result = await fetch('api/github/github?owner=' + owner, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const installationId = await result.json();
  const availableRepos = await octokit.request(
    `GET /user/installations/${installationId.installationId}/repositories`,
    {
      headers: {
        authorization: 'token ' + token,
      },
    }
  );
  console.log('availableRepos', availableRepos);
  return availableRepos.data.repositories;
};
