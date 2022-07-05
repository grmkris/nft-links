import { useSubgraphStatus } from 'hooks/useSubgraphStatus';
import React from 'react';

export default function SubgraphStatus(props: { graphQLUrl: string }) {
  const { data, isLoading, isError } = useSubgraphStatus(props.graphQLUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (data) {
    return <div>{data}</div>;
  }
}
