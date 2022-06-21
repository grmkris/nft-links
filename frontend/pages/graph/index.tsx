import React from 'react';
import Layout from '@/layout/Layout';

function Dashboard() {
  return (
    <Layout>
      <div className='card card-side m-4 rounded-xl bg-base-300 shadow-xl'>
        <figure className={'p-5'}>
          <div className='stats justify-end shadow'>
            <div className='stat'>
              <div className='stat-title'>Query count</div>
              <div className='stat-value'>
                <span className='font-semibold text-black dark:text-gray-200'>{1232323}</span>
              </div>
              <div className='stat-desc'>21% more than last month</div>
            </div>
          </div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Your<span className='text-primary-focus underline underline-offset-2'>The Graph</span>{' '}
            subgraphs
          </h2>
          <p>
            The Graph is an indexing protocol for organizing blockchain data and making it easily
            accessible with GraphQL.
          </p>
          <p>Supported chains:</p>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
