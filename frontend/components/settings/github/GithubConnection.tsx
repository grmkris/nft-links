import 'react-loading-skeleton/dist/skeleton.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const GithubConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const [githubInfo, setGithubInfo] = useState<{ token: string }>();

  const getToken = useCallback(
    async (code) => {
      try {
        const result = await fetch('api/webhooks/github/token?code=' + code);
        const data = await result.json();
        console.log(data);
        await router.replace('/settings', undefined, { shallow: true });
        setGithubInfo(data);
      } catch (e) {
        console.log('Error retrieving token');
      }
    },
    [code]
  );

  useEffect(() => {
    if (code && !githubInfo) {
      getToken(code);
    }
  }, [code, githubInfo, getToken, router.query.code]);

  const connectGithub = async () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=' +
      clientId +
      '&redirect_uri=http://localhost:3001/settings';
  };
  return (
    <div className='card m-4 max-w-prose rounded-xl bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-primary'>Github</h2>
        <button className={'btn'} onClick={() => connectGithub()}>
          Connect
        </button>
        Token: {githubInfo?.token}
      </div>
    </div>
  );
};
