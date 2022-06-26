import { NextApiRequest, NextApiResponse } from 'next';
import { definitions } from 'types/database';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (!request.query.token) {
      response.status(400).send('Missing token');
    }

    const token = request.query.token as string;
    console.log('token', token);
    const tokenDb = await supabaseServerClient
      .from<definitions['graph_auth_tokens']>('graph_auth_tokens')
      .select('*')
      .match({
        id: token,
      });

    if (tokenDb.data.length === 0) {
      response.status(400).send('token not found');
    } else {
      console.log('tokenDb', tokenDb);
      response.status(200).send(tokenDb.data[0]);
    }
  } catch (e) {
    console.log(e);
    response.json('fail');
  }
}
