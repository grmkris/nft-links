import 'react-loading-skeleton/dist/skeleton.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIntegrationsGithub } from 'hooks/useIntegrationsGithub';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { definitions } from 'types/database';
import { toast } from 'react-toastify';
import { useQueryClient } from 'react-query';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { useGithubUserToken } from 'hooks/useGithubUserToken';
import { useGithubUserData } from 'hooks/useGithubUserData';
import { useGithubRepos } from 'hooks/useGithubRepos';
import { popupWindow } from '../../../utils/utils';

export const GithubConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const {
    data: githubToken,
    error: errorGithubToken,
    isLoading: isLoadingGithubToken,
  } = useGithubUserToken(code as string);
  const {
    data: githubUserData,
    error: errorGithubUserData,
    isLoading: isLoadingGithubUserData,
  } = useGithubUserData(githubToken as string);
  const {
    data: githubRepos,
    error: errorGithubRepos,
    isLoading: isLoadingGithubRepos,
  } = useGithubRepos(githubToken as string, githubUserData?.login as string);
  const { data: githubIntegrations } = useIntegrationsGithub();
  const queryClient = useQueryClient();
  const { user } = useUser();

  useEffect(() => {
    if (code) {
      router.replace('/settings', undefined, { shallow: true });
    }
  }, [code, router]);

  const connectGithub = async () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=' +
      clientId +
      '&redirect_uri=http://localhost:3000/settings';
  };

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
        <button
          className={'btn'}
          onClick={() => connectGithub()}
          disabled={!!githubUserData || isLoadingGithubUserData || isLoadingGithubToken}
        >
          {isLoadingGithubUserData || (isLoadingGithubToken && 'Loading...')}
          {githubUserData ? 'Hello ' + githubUserData.name : 'Connect'}
        </button>
        {githubUserData?.login !== '' && (
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
