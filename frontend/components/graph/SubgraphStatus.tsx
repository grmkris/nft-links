import { useSubgraphStatus } from 'hooks/useSubgraphStatus';
import React from 'react';

export default function SubgraphStatus(props: { graphQLUrl: string }) {
  const { data, isLoading, isError } = useSubgraphStatus(props.graphQLUrl);

  if (isLoading) {
    return <div className={'badge badge-error'}>Loading...</div>;
  }
  if (isError) {
    return <div className={'badge badge-error'}>Error</div>;
  }
  if (data) {
    return <div className={'badge badge-success'}>Syncing - {data}</div>;
  }
}
