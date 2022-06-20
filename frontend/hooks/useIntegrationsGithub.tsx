import { useQuery } from 'react-query';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

export const useIntegrationsGithub = () => {
  return useQuery(
    'integrations_github',
    async () =>
      // get integrations_github from the database
      await supabaseClient.from('integration_github').select('*')
  );
};
