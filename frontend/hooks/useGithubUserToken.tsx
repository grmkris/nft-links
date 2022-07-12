import { useQuery } from 'react-query';

export const useGithubUserToken = (code?: string) => {
  return useQuery('githubUserToken', async () => await getToken(code), {
    enabled: code !== undefined,
  });
};

const getToken = async (code) => {
  try {
    const result = await fetch('api/webhooks/github/token?code=' + code);
    const data = await result.json();
    console.log(data);
    return data.token;
  } catch (e) {
    console.log('Error retrieving token');
  }
};
