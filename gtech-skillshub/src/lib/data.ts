import { 
    BookOpen, Code, Lightbulb, Rocket, 
    Users, Heart, Hand, MessageCircle, Globe,
    Mail, Phone, MapPin, Laptop,
    GraduationCap, Award
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
    aboutPage: {
        hero: {
            title: "Driven By Purpose And Impact",
            subtitle: "A purpose driven non-profit organization working to create lasting change in communities.",
            image: "/about-hero.jpg",
            stats: [
                { value: "11,000+", label: "People Impacted" },
                { value: "240+", label: "Active Volunteers" },
                { value: "1,200+", label: "Missions Completed" },
                { value: "62+", label: "Global Partners" }
            ]
        },
        mission: {
            title: "Together for Lasting Hope and Humanity",
            description: "We are united by a single goal: to bridge the digital divide. Through technology, education, and mentorship, we are building a future where every young person has the opportunity to thrive.",
            image: "/mission-image.jpg"
        },
        vision: {
            title: "Opportunity and Equality for All",
            description: "We envision a world where location does not dictate potential. By providing access to world-class digital skills, we are leveling the playing field for refugees and underserved communities.",
            image: "/vision-image.jpg"
        },
        team: [
             // Founders (Optional - kept from before just in case, remove if unwanted)
            { name: 'Gervais Mboninkunda', role: 'Co-Founder & Program Lead', image: '/team-gervais.jpg' },
            { name: 'Ishiwe Alistide', role: 'Co-Founder & Operations Lead', image: '/team-ishiwe.jpg' },
            // Your New List
            { name: 'Monia Nijimbere', role: 'Technical Learning Support', image: '/team-monia.jpg' },
            { name: 'Latia Iradukunda', role: 'Admission & Learner Support', image: '/team-latia.jpg' },
            { name: 'Theonest Bizuru', role: 'Career Growth Support', image: '/team-theonest.jpg' },
            { name: 'Don Divin Niyukuri', role: 'Program & Activity Coordination', image: '/team-don.jpg' },
            { name: 'Joseph Nduwamahoro', role: 'Media & Storytelling Support', image: '/team-joseph.jpg' },
            { name: 'Eleciella Habanayo', role: 'Fundraising & Partnerships', image: '/team-eleciella.jpg' },
            { name: 'Dominique Kwizera', role: 'Community Outreach', image: '/team-dominique.jpg' },
            { name: 'Frank Murwaneza', role: 'Digital Systems & Website', image: '/team-frank.jpg' },
            { name: 'Vestine Uwineza', role: 'Mentorship & Guidance', image: '/team-vestine.jpg' }
        ]
    },
    programsPage: {
        hero: {
            tag: "Our Programs",
            title: "Programs That Make A Difference",
            subtitle: "Curriculum designed to uplift communities through education, healthcare, and live support.",
            image: "/programs-hero.jpg"
        }
    },
    contactPage: {
        hero: {
            tag: "Contact",
            title: "Reach Out. We're Here Always",
            subtitle: "Have questions, ideas, or need support? Connect with us we're ready to listen & help."
        },
        infoCards: [
            { 
                icon: Mail, 
                title: "Our Mail", 
                value: "gtechskillhub@gmail.com",
                link: "mailto:gtechskillhub@gmail.com"
            },
            { 
                icon: Phone, 
                title: "Our Contact", 
                value: "+250 788 000 000",
                link: "tel:+250788000000"
            },
            { 
                icon: MapPin, 
                title: "Our Address", 
                value: "Mahama Refugee Camp, Kirehe, Rwanda",
                link: "#"
            }
        ]
    },
    opportunitiesPage: {
        hero: {
            tag: "Opportunities Hub",
            title: "Unlock Your Potential",
            subtitle: "Curated scholarships, fellowships, and grants to accelerate your career and education.",
            image: "/opportunities-hero.jpg"
        },
        howItWorks: [
            { step: "01", title: "Browse", desc: "Explore our curated list of verified global opportunities." },
            { step: "02", title: "Prepare", desc: "Use our guides to polish your CV and essays." },
            { step: "03", title: "Apply", desc: "Submit your application directly to the provider." }
        ]
    },
    opportunities: [
        {
            id: 'mastercard-scholarship',
            category: 'Scholarship',
            title: 'Mastercard Foundation Scholars Program',
            provider: 'Mastercard Foundation',
            deadline: 'Sep 15, 2025',
            image: '/opp-scholarship.jpg',
            description: 'Full-ride scholarships for young African leaders to study at top universities worldwide.',
            // Detail Page Content
            fullDescription: "The Mastercard Foundation Scholars Program is a global initiative designed to develop the next generation of transformative leaders. It provides financial, social, and academic support to scholars.",
            eligibility: ["Citizen of an African country", "Strong academic record", "Commitment to giving back"],
            value: "Full Tuition + Stipend",
            applyLink: "https://mastercardfdn.org"
        },
        {
            id: 'mwf-fellowship',
            category: 'Fellowship',
            title: 'Mandela Washington Fellowship',
            provider: 'US State Dept',
            deadline: 'Oct 10, 2025',
            image: '/opp-fellowship.jpg',
            description: 'A flagship program for young African leaders to gain experience in the United States.',
            fullDescription: "The Mandela Washington Fellowship brings young leaders to the United States for academic coursework and leadership training.",
            eligibility: ["Ages 25-35", "Proven track record of leadership", "Proficient in English"],
            value: "Fully Funded Trip to USA",
            applyLink: "#"
        },
        {
            id: 'google-grant',
            category: 'Grant',
            title: 'Google for Startups Fund',
            provider: 'Google',
            deadline: 'Rolling Basis',
            image: '/opp-grant.jpg',
            description: 'Equity-free funding for tech startups solving major challenges in Africa.',
            fullDescription: "Get access to funding, mentoring, and Google products to help grow your startup.",
            eligibility: ["Tech-enabled startup", "Based in Africa", "Scalable business model"],
            value: "$100,000 Equity Free",
            applyLink: "#"
        },
        {
            id: 'alx-leadership',
            category: 'Leadership',
            title: 'ALX Leadership Xcelerator',
            provider: 'ALX Africa',
            deadline: 'Aug 01, 2025',
            image: '/opp-leadership.jpg',
            description: 'A intensive 6-week program designed to fast-track your career management skills.',
            fullDescription: "Develop the soft skills that employers crave: critical thinking, communication, and project management.",
            eligibility: ["Ages 18-30", "Access to a laptop", "Commitment to 20hrs/week"],
            value: "Free (Sponsored)",
            applyLink: "#"
        },
        {
            id: 'coursera-google',
            category: 'Online Course',
            title: 'Google Data Analytics Cert',
            provider: 'Coursera',
            deadline: 'Open Now',
            image: '/opp-course.jpg',
            description: 'Professional certificate to get you job-ready for a career in data analytics.',
            fullDescription: "Gain in-demand skills in less than 6 months. No degree or experience required.",
            eligibility: ["Open to everyone", "No prior experience needed"],
            value: "Financial Aid Available",
            applyLink: "#"
        }
    ],
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
            icon: Laptop,
            subtitle: "Master the basics of the digital world.",
            description: 'Foundational digital skills training for youth with little or no prior computer experience.',
            duration: '6 months',
            audience: 'High-school graduates (16-28)',
            outcomes: ['Computer Basics', 'Google Workspace', 'Safe Tech Use'],
            image: '/program-digital.jpg',
            fullDescription: "Access to digital literacy is essential for thriving in the modern economy. Our Digital Skills program provides vital computer education to underserved regions, ensuring no one is left behind due to the digital divide.",
            curriculum: [
                "Introduction to Hardware & Software",
                "Typing & Mouse Proficiency",
                "Google Workspace (Docs, Sheets, Slides)",
                "Internet Safety & Email Etiquette",
                "Basic Maintenance & Troubleshooting"
            ],
            gallery: ["/digital-1.jpg", "/digital-2.jpg", "/digital-3.jpg", "/digital-4.jpg"],
            testimonials: [
                { name: "Grace K.", role: "Graduate", text: "I had never touched a computer before. Now I am typing my own CV." },
                { name: "John B.", role: "Parent", text: "This program gave my daughter confidence she never had." }
            ]
        },
        {
            id: 'coding-beginners',
            title: 'Coding for Beginners',
            icon: Code,
            subtitle: "Build your first website and software.",
            description: 'Focuses on programming and applied technology, helping participants advance from basic literacy to practical code.',
            duration: '3 months',
            audience: 'Youth with basic computer literacy',
            outcomes: ['Python Programming', 'AI Fundamentals', 'Emerging Tech'],
            image: '/program-coding.jpg',
            fullDescription: "We are committed to demystifying technology. This course takes students from consumers of technology to creators, teaching the logic and languages that power the web.",
            curriculum: [
                "HTML5 & CSS3 Fundamentals",
                "Introduction to JavaScript Logic",
                "Building Responsive Websites",
                "Version Control with Git",
                "Final Project: Portfolio Site"
            ],
            gallery: ["/coding-1.jpg", "/coding-2.jpg", "/coding-3.jpg", "/coding-4.jpg"],
            testimonials: [
                { name: "Eric M.", role: "Student", text: "Seeing my code turn into a real website was magic." }
            ]
            
        },
        {
            id: 'career-dev',
            title: 'Career Development',
            icon: Rocket,
            subtitle: "Launch your professional journey.",
            description: 'Mentorship and training on professional skills to strengthen career readiness.',
            duration: 'Integrated',
            audience: 'All participants',
            outcomes: ['Strong CV', 'LinkedIn Profile', 'Job Readiness'],
            image: '/program-career.jpg',
            fullDescription: "Technical skills get you the interview; soft skills get you the job. We focus on the holistic professional development of our students.",
            curriculum: [
                "CV & Resume Building",
                "LinkedIn Profile Optimization",
                "Mock Interviews & Body Language",
                "Workplace Communication",
                "Freelancing Basics"
            ],
            gallery: ["/career-1.jpg", "/career-2.jpg", "/career-3.jpg", "/career-4.jpg"],
            testimonials: [
                { name: "Sarah L.", role: "Alumni", text: "The mock interviews prepared me for my real job interview perfectly." }
            ]
        },
        {
            id: 'emerging-tech',
            title: 'Emerging Technologies',
            icon: Lightbulb,
            subtitle: "Step into the future of AI and Data.",
            description: 'Introduces participants to basic programming, data literacy, and artificial intelligence trends.',
            duration: '3 months',
            audience: 'Youth with strong interest in AI',
            outcomes: ['Data Literacy', 'AI Awareness', 'Global Opportunities'],
            image: '/program-emerging.jpg',
            fullDescription: "Preparing youth for the jobs of tomorrow. This advanced track explores how AI and Data are reshaping our world.",
            curriculum: [
                "Data Literacy Basics",
                "Introduction to Python for Data",
                "Understanding AI & Machine Learning",
                "Ethical Use of AI Tools",
                "Global Remote Work Opportunities"
            ],
            gallery: ["/ai-1.jpg", "/ai-2.jpg", "/ai-3.jpg", "/ai-4.jpg"],
            testimonials: [
                { name: "David R.", role: "Student", text: "I learned how AI can help solve problems in my community." }
            ]
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