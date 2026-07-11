import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
    // Fetch live programs from the database
    const { data: programs, error } = await supabase
        .from('programs')
        .select('*')
        .eq('is_published', true);

    if (error) {
        console.error('Error fetching programs from Supabase:', error);
        return { programs: [] };
    }

    // Performance Optimization: Cache this page at Vercel's Edge network for 1 hour
    // Since public program content changes rarely, this keeps the site lightning fast
    setHeaders({
        'cache-control': 'public, max-age=3600, s-maxage=3600'
    });

    return {
        programs
    };
};
