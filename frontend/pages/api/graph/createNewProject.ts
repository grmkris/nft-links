import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { name } = request.query;
  const jwt = request.headers.authorization.slice(7);
  const user = await supabaseServerClient.auth.api.getUser(jwt);
  try {
    if (!name) {
      response.status(400).send('Missing project name');
    }
    if (!user) {
      response.status(401).send('Not authorized');
    }
  } catch (e) {
    console.log(e);
    response.json('fail');
  }
}
