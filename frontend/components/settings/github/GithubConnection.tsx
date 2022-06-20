import 'react-loading-skeleton/dist/skeleton.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from 'use-local-storage';
import { Octokit } from '@octokit/core';
import { useIntegrationsGithub } from 'hooks/useIntegrationsGithub';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { definitions } from 'types/database';
import { Endpoints } from '@octokit/types';
import { toast } from 'react-toastify';
import { useQueryClient } from 'react-query';
import { useUser } from '@supabase/supabase-auth-helpers/react';

type ListUserReposResponse =
  Endpoints['GET /user/installations/{installation_id}/repositories']['response']['data']['repositories'];

export const GithubConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const [githubInfo, setGithubInfo] = useLocalStorage<{ token: string }>('githubInfo', undefined);
  const [githubRepos, setGithubRepos] = useState<ListUserReposResponse>();
  const [githubUserInfo, setGithubUserInfo] = useLocalStorage<string>('githubUserInfo', '');
  const { data: githubIntegrations, isLoading, error } = useIntegrationsGithub();
  const queryClient = useQueryClient();
  const { user } = useUser();

  const getToken = useCallback(
    async (code) => {
      try {
        const result = await fetch('api/webhooks/github/token?code=' + code);
        const data = await result.json();
        console.log(data);
        await router.replace('/settings', undefined, { shallow: true });
        setGithubInfo(data);

        // get the user info from github
        const github = new Octokit({
          auth: data.token,
        });
        const userInfo = await github.request('GET /user');
        setGithubUserInfo(userInfo.data.login);
      } catch (e) {
        console.log('Error retrieving token');
      }
    },
    [code]
  );

  const getAvailableRepos = async (owner: string) => {
    console.log(githubInfo.token);
    const octokit = new Octokit({ auth: githubInfo.token });
    const result = await fetch('api/github/github?owner=' + owner, {
      headers: {
        Authorization: `Bearer ${githubInfo.token}`,
      },
    });
    const installationId = await result.json();
    const availableRepos = await octokit.request(
      `GET /user/installations/${installationId.installationId}/repositories`,
      {
        headers: {
          authorization: 'token ' + githubInfo.token,
        },
      }
    );
    setGithubRepos(availableRepos.data.repositories);
  };

  useEffect(() => {
    if (code) {
      getToken(code);
    }
    if (!githubRepos && githubUserInfo != '' && githubUserInfo != undefined) {
      getAvailableRepos(githubUserInfo);
    }
  }, [code, githubRepos, getToken, router.query.code]);

  const connectGithub = async () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=' +
      clientId +
      '&redirect_uri=http://localhost:3001/settings';
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
            Manage App on Github
          </button>
        )}
        {githubRepos && (
          <>
            <h2 className='card-title text-primary'>Connected repos</h2>
            <ul>
              {githubRepos.map((data) => {
                return (
                  <li key={data.id} className={'m-2'}>
                    <button
                      className={'btn btn-accent btn-sm'}
                      onClick={async () => {
                        const result = await supabaseClient
                          .from<definitions['integration_github']>('integration_github')
                          .insert({
                            repository: data.id,
                            type: 'nft_bot',
                            user_id: user.id,
                          });
                        if (result.error) {
                          toast.error(result.error);
                        }
                        if (result.data) {
                          await queryClient.invalidateQueries('integrations_github');
                          toast.success('Successfully added');
                        }
                      }}
                    >
                      {
                        // if repo is linked then show a checkmark otherwise not
                        githubIntegrations.data.find(
                          (integration) => integration.repository === data.id.toString()
                        )
                          ? '✅'
                          : '🔘'
                      }
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
