import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

export const GithubConnection = () => {
  const connectGithub = async () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=' +
      clientId +
      '&redirect_uri=http://localhost:3001/api/webhooks/github/token';
  };
  return (
    <div className='card m-4 max-w-prose rounded-xl bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-primary'>Github</h2>
        <button className={'btn'} onClick={() => connectGithub()}>
          Connect
        </button>
      </div>
    </div>
  );
};
