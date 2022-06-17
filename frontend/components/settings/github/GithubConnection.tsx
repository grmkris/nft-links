import 'react-loading-skeleton/dist/skeleton.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Octokit } from 'octokit';

export const GithubConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const [githubInfo, setGithubInfo] = useState<{ token: string }>();
  const [githubRepos, setGithubRepos] = useState<never[]>();
  const [githubUserInfo, setGithubUserInfo] = useState<string>('');

  const getToken = useCallback(
    async (code) => {
      try {
        const result = await fetch('api/webhooks/github/token?code=' + code);
        const data = await result.json();
        console.log(data);
        await router.replace('/settings', undefined, { shallow: true });
        setGithubInfo(data);
        const octokit = new Octokit({ auth: data.token });
        const {
          data: { login },
        } = await octokit.request('GET /user');
        setGithubUserInfo(login);
        console.log(login);
        const { data: repos } = await octokit.request('GET /user/repos');

        const { data: installations } = await octokit.request('GET /user/installations');
        console.log(installations.installations);
        console.log(repos);
        setGithubRepos(repos);
      } catch (e) {
        console.log('Error retrieving token');
      }
    },
    [code]
  );

  const getInstallation = async (repo: string, owner: string) => {
    console.log(githubInfo.token);
    const octokit = new Octokit({ auth: githubInfo.token });
    const result = await fetch('api/github/github?repo=' + repo + '&' + 'owner=' + owner);
    octokit.rest;
    console.log(result);
  };

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
      '&redirect_uri=http://localhost:3000/settings';
  };

  function popupWindow(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
    const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
    return win.open(
      url,
      windowName,
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
    );
  }

  const installGithubApp = async () => {
    popupWindow(
      'https://github.com/apps/niftios/installations/new',
      'NiftiosXGithub',
      window,
      900,
      500
    );
    // open in new window https://github.com/apps/niftios/installations/new
  };
  return (
    <div className='card m-4 max-w-prose rounded-xl bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-primary'>Github</h2>
        <button className={'btn'} onClick={() => connectGithub()} disabled={githubUserInfo !== ''}>
          {githubUserInfo !== '' ? 'Hello ' + githubUserInfo : 'Connect'}
        </button>
        {githubUserInfo !== '' && (
          <button className={'btn'} onClick={() => installGithubApp()}>
            Install app
          </button>
        )}
        {githubRepos && (
          <>
            <h2 className='card-title text-primary'>Your repos</h2>
            <ul>
              {githubRepos.map((data: { name: string }) => {
                return (
                  <li key={data.name} className={'m-2'}>
                    <button
                      className={'btn btn-accent btn-sm'}
                      onClick={async () => {
                        await getInstallation(data.name, githubUserInfo);
                      }}
                    >
                      Link
                    </button>{' '}
                    {data.name}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
