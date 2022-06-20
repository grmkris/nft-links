import { NextApiRequest, NextApiResponse } from 'next';
import { definitions } from 'types/database';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (!request.query.repository) {
      response.status(400).send('Missing repository');
    }

    const repository = request.query.repository as string;
    console.log('repository', repository);
    const repo = await supabaseServerClient
      .from<definitions['integration_github']>('integration_github')
      .select('*')
      .match({
        repository: repository,
      });

    if (repo.data.length === 0) {
      response.status(400).send('Repository not found');
    } else {
      console.log('repo', repo);
      if (repo.data[0].type === 'nft_bot') {
        response.status(200).send('Github');
      }
    }
  } catch (e) {
    console.log(e);
    response.json('fail');
  }
}
