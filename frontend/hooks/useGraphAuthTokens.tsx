import { useQuery } from 'react-query';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

export const useGraphAuthTokens = () => {
  return useQuery(
    'graph_auth_tokens',
    async () =>
      // get groups with their members from the supabase database
      await supabaseClient.from('graph_auth_tokens').select('*')
  );
};
