import { useQuery } from 'react-query';
import { Octokit } from '@octokit/core';
import { useGithubUserToken } from 'hooks/useGithubUserToken';

export const useGithubUserData = () => {
  const { data: token } = useGithubUserToken();
  return useQuery('githubUserData', async () => await getGithubUserInfo(token), {
    enabled: token !== undefined,
  });
};

const getGithubUserInfo = async (token) => {
  console.log('getGithubUserInfo', token);
  try {
    // get the user info from github
    const github = new Octokit({
      auth: token,
    });
    const userInfo = await github.request('GET /user');
    console.log('userInfo', userInfo);
    return userInfo.data;
  } catch (e) {
    console.log('Error retrieving user data');
  }
};
