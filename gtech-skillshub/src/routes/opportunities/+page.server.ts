import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
    const { data: opportunities, error } = await supabase
        .from('opportunities')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching opportunities:', error);
        return { opportunities: [] };
    }

    // Cache the page to keep it fast and reduce database reads
    setHeaders({
        'cache-control': 'public, max-age=3600, s-maxage=3600'
    });

    return {
        opportunities
    };
};
