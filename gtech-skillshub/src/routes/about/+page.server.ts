import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
    const { data: team, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching team members:', error);
        return { team: [] };
    }

    setHeaders({
        'cache-control': 'public, max-age=3600, s-maxage=3600'
    });

    return {
        team
    };
};
