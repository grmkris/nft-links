import { useQuery } from 'react-query';
import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';
import { useGithubUserToken } from 'hooks/useGithubUserToken';
import { useGithubUserData } from 'hooks/useGithubUserData';
type ListUserReposResponse =
  Endpoints['GET /user/installations/{installation_id}/repositories']['response']['data']['repositories'];
export const useGithubRepos = () => {
  const { data: token } = useGithubUserToken();
  const { data: userData } = useGithubUserData();
  return useQuery<ListUserReposResponse>(
    'githubRepos',
    async () => await getAvailableRepos(token, userData.login),
    {
      enabled: !!token && !!userData,
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
