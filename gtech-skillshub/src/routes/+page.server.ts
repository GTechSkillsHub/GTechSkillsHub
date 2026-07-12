import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
    // 1. Fetch the first 4 active programs to highlight on the homepage
    const { data: programs, error: progErr } = await supabase
        .from('programs')
        .select('*')
        .eq('is_published', true)
        .limit(4);

    // 2. Fetch the 3 most recent blog posts
    const { data: blogs, error: blogErr } = await supabase
        .from('blog_posts')
        .select('*')
        .limit(3);

    if (progErr || blogErr) {
        console.error('Error fetching home data:', progErr || blogErr);
    }

    setHeaders({
        'cache-control': 'public, max-age=3600, s-maxage=3600'
    });

    return {
        programs: programs || [],
        blogs: blogs || []
    };
};
