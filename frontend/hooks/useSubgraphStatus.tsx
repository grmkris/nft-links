import { createClient } from 'urql';
import { useQuery } from 'react-query';

export const useSubgraphStatus = (subgraphGraphQLUrl: string) => {
  return useQuery('subgraph_status' + subgraphGraphQLUrl, async () => {
    // query the subgraph graphql endpoint to retrieve data
    return await getSubgraphStatus(subgraphGraphQLUrl);
  });
};

const getSubgraphStatus = async (graphQLUrl: string): Promise<string> => {
  console.log('inside');
  try {
    const client = createClient({
      url: graphQLUrl,
    });

    const result = await client
      .query(
        `{
      _meta {block{
        hash
        number
      },
      deployment
      hasIndexingErrors}
      }`
      )
      .toPromise();
    console.log(result);
    return result.data._meta.block.hash;
  } catch (e) {
    console.log(e);
    return 'error';
  }
};
