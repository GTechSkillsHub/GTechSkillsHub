import { 
    BookOpen, Code, Lightbulb, Rocket, 
    Users, Heart, Hand, MessageCircle, Globe 
} from 'lucide-svelte';

export const siteData = {
    general: {
        name: 'GTech SkillsHub',
        tagline: 'Bridging the digital gap for refugee and underserved youth through learning and opportunity.',
        email: 'gtechskillhub@gmail.com',
        whatsapp: 'https://chat.whatsapp.com/IdNGD9CgqCWKNa1ODqqPC7',
        socials: {
            instagram: 'https://www.instagram.com/gtechskillhub/',
            linkedin: 'https://www.linkedin.com/company/gtech-skills-hub',
            facebook: '#'
        },
        location: 'Based near Mahama Refugee Camp, Rwanda'
    },
    home: {
        hero: {
            title: 'Unite. Act. Transform.',
            subtitle: 'Your support powers life-changing missions, feeding families & rebuilding hope.',
            buttons: { primary: "Donate Now", secondary: "Learn About Us" },
            bgImage: '/hero-placeholder.jpg',
        },
        about: {
            tag: "About Us",
            title: "United Together to Create Enduring Hope",
            description: "We are a purpose-driven organization empowering health & education. Our mission is to bridge the gap for underserved youth through technology.",
            image: "/about-placeholder.jpg"
        },
        supporters: {
            title: "Our Trusted Supporters",
            logos: ['Ashesi University', 'Mastercard Foundation Fellowship (Jim Leech)', 'UN MGCY'],
        }, 
        impact: {
            title: "Our Impact",
            subtitle: "Together for change. See what our impact shows.",
            stats: [
                { value: "1,200+", label: "Meals Distributed", sub: "For families in need" },
                { value: "15k+", label: "Youth Educated", sub: "Digital skills training" },
                { value: "100%", label: "Impact Rate", sub: "Direct to community" }
            ]
        },
        help: {
            title: "How you can help",
            subtitle: "United, We Transform. Feeding families, educating children, impacting lives.",
            cards: [
                { title: "Act During Crisis", desc: "Join urgent missions with rapid aid, relief, and community recovery.", icon: Users },
                { title: "Strengthen Social Good", desc: "Sponsorships grow awareness and strengthen your brand's purpose.", icon: Heart },
                { title: "Power Meaningful Change", desc: "Financial gifts help drive lasting progress in key cause areas.", icon: Globe },
                { title: "Fuel Greater Impact", desc: "Your donation scales our work and reaches more communities in need.", icon: Rocket }
            ]
        },
        testimonials: {
            title: "Stories Bringing Hope",
            subtitle: "Real stories from those we've helped and those who help sharing the hope & heart.",
            items: [
                { quote: "Innovating Youth Engagement...", author: "Liam Carter", role: "Program Director", image: "/avatar-1.jpg" },
                { quote: "The skills I learned here changed my life...", author: "Sarah M.", role: "Student Alumni", image: "/avatar-2.jpg" }
            ]
        },
        faq: [
            { question: "Who can apply?", answer: "Refugee youth in Mahama Camp or underserved youth in nearby communities (16–28)." },
            { question: 'Is the program free?', answer: 'Yes, GTech SkillsHub provides free digital and career-readiness training.' },
            { question: 'Do I need a laptop?', answer: 'Yes. (Contact us if this is a barrier).' },
            { question: 'Where are classes held?', answer: 'In-person training sessions in selected refugee camps (Mahama) and nearby schools.' }
        ],
        cta: {
            title: "Be the Reason Someone Smiles.",
            subtitle: "Join us in the journey to empower communities and change lives.",
            stat: "500+ Peoples joined already"
        }
    },
    
    programs: [
        {
            id: 'digital-skills',
            title: 'Digital Skills Training',
            icon: Lightbulb,
            description: 'Foundational digital skills training for youth with little or no prior computer experience.',
            duration: '6 months',
            audience: 'High-school graduates (16-28)',
            outcomes: ['Computer Basics', 'Google Workspace', 'Safe Tech Use']
        },
        {
            id: 'coding-beginners',
            title: 'Coding for Beginners',
            icon: Code,
            description: 'Focuses on programming and applied technology, helping participants advance from basic literacy to practical code.',
            duration: '3 months',
            audience: 'Youth with basic computer literacy',
            outcomes: ['Python Programming', 'AI Fundamentals', 'Emerging Tech']
        },
        {
            id: 'career-dev',
            title: 'Career Development',
            icon: Rocket,
            description: 'Mentorship and training on professional skills to strengthen career readiness.',
            duration: 'Integrated',
            audience: 'All participants',
            outcomes: ['Strong CV', 'LinkedIn Profile', 'Job Readiness']
        },
        {
            id: 'emerging-tech',
            title: 'Emerging Technologies',
            icon: Users,
            description: 'Introduces participants to basic programming, data literacy, and artificial intelligence trends.',
            duration: '3 months',
            audience: 'Youth with strong interest in AI',
            outcomes: ['Data Literacy', 'AI Awareness', 'Global Opportunities']
        }
    ],
    team: {
        founders: [
            { name: 'Gervais Mboninkunda', title: 'Co-Founder & Program Lead', bio: 'Computer Engineering student...' },
            { name: 'Ishiwe Alistide', title: 'Co-Founder & Operations Lead', bio: 'Business Administration student...' }
        ]
    },
    blogs: [
        { title: "Bringing hope through food, shelter, and support", date: "Apr 9, 2025", image: "/blog-1.jpg" },
        { title: "Building Food Security Through Community Farming", date: "Sep 19, 2025", image: "/blog-2.jpg" },
        { title: "Restoring Hope in Times of Urgency", date: "Apr 7, 2025", image: "/blog-3.jpg" }
    ]
};