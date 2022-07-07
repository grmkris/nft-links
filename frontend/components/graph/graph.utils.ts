export type CHAIN = 'polygon' | 'polygon-mumbai' | 'optimism' | 'optimism-kovan';
export const AVAILABLE_CHAINS: CHAIN[] = [
  'polygon',
  'polygon-mumbai',
  'optimism',
  'optimism-kovan',
];

const BASE_URL = `htg.smuu.dev`;

export const getNodeUrl = (chain: string) => {
  return `https://${chain}.graph.${BASE_URL}`;
};

export const getIpfsUrl = () => {
  return `https://ipfs.${BASE_URL}`;
};

export const graphCliCommand = (options: {
  type: 'auth' | 'init' | 'create' | 'deploy';
  chain: CHAIN;
  tokenId?: string;
}) => {
  const nodeParam = `--node ${getNodeUrl(options.chain)}`;
  const ipfsParam = `--ipfs ${getIpfsUrl()}`;
  const command: string[] = ['graph', options.type];

  switch (options.type) {
    case 'auth':
      command.push(getNodeUrl(options.chain));
      command.push(options.tokenId);
      break;
    default:
      command.push(nodeParam);
      command.push(ipfsParam);
  }

  return command.join(' ');
};

export const getSubgraphFullname = (workspace: string, name: string) => {
  return `${workspace}/${name}`;
};

export const getGraphQLUrl = (workspace: string, name: string, chain: CHAIN) => {
  return `${getNodeUrl(chain)}/subgraphs/name/${getSubgraphFullname(workspace, name)}`;
};
