import { useQuery } from 'react-query';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

export const useGraphProjects = () => {
  return useQuery(
    'graph_projects',
    async () =>
      // get groups with their members from the supabase database
      await supabaseClient.from('graph_projects').select('*')
  );
};
