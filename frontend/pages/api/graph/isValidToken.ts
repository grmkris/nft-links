import { NextApiRequest, NextApiResponse } from 'next';
import { definitions } from 'types/database';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    // take bearer token from authorization header
    let token;
    if (request.headers?.authorization) {
      token = request.headers?.authorization.split(' ')[1];
    }
    if (!request.query.token && !token) {
      response.status(401).send('Missing token');
    }
    if (!token) {
      token = request.query.token as string;
    }
    console.log('token', token);
    const tokenDb = await supabaseServerClient
      .from<definitions['graph_auth_tokens']>('graph_auth_tokens')
      .select('*')
      .match({
        id: token,
      });

    console.log('tokenDb', tokenDb);
    console.log('token', token);

    if (tokenDb.data.length === 0) {
      response.status(401).send('Token not found');
    } else {
      console.log('tokenDb', tokenDb);
      response.status(200).send(tokenDb.data[0]);
    }
  } catch (e) {
    console.log(e);
    response.status(401).send('Token not valid');
  }
}
