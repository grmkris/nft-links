import React from 'react';

import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/solid';
import LabLayout from '@/layout/LabLayout';
import { RewardProgramTable } from '@/reward-program/RewardProgramTable';
import { useRewardProgram } from 'hooks/useRewardProgram';

function Rewards() {
  const { data, isLoading, isError } = useRewardProgram();

  return (
    <LabLayout>
      <div className='card card-side m-4 rounded-xl bg-base-300 shadow-xl'>
        <figure className={'p-5'}>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error...</p>}
          {!isLoading && data.data && (
            <div className='stats justify-end shadow'>
              <div className='stat'>
                <div className='stat-title'>Rewards given</div>
                <div className='stat-value'>
                  <span className='font-semibold text-black dark:text-gray-200'>
                    {data.data.length}
                  </span>
                </div>
                <div className='stat-desc'>21% more than last month</div>
              </div>
            </div>
          )}
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Your{' '}
            <span className='text-primary-focus underline underline-offset-2'>Reward programs</span>{' '}
          </h2>
          <div className='card-actions'>
            <Link href={'/rewards/create'}>
              <a className='btn btn-primary m-auto w-2/3 md:m-0 md:w-1/3'>
                <PlusIcon className={'h-5 w-5'} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <RewardProgramTable />
    </LabLayout>
  );
}

export default Rewards;
