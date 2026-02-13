import {
    BookOpen, Code, Lightbulb, Rocket,
    Users, Heart, Hand, MessageCircle, Globe,
    Mail, Phone, MapPin, Laptop,
    GraduationCap, Award,
    CreditCard, CheckCircle, MousePointer2, UserCheck
} from 'lucide-svelte';
import { teamImages } from './teamImages';

export const siteData = {
    general: {
        name: 'GTech SkillsHub',
        tagline: 'Empowering refugee and Underserved Rwandan youth with digital skills, mentorship, and global opportunities.',
        email: 'gtechskillhub@gmail.com',
        whatsapp: 'https://chat.whatsapp.com/IdNGD9CgqCWKNa1ODqqPC7',
        socials: {
            instagram: 'https://www.instagram.com/gtechskillhub/',
            linkedin: 'https://www.linkedin.com/company/gtech-skills-hub',
            facebook: 'https://www.facebook.com/gtechskillshub'
        },
        location: 'In and around Mahama Refugee Camp, Rwanda'
    },

    aboutPage: {
        hero: {
            title: 'Bridging the Digital Divide',
            subtitle: 'GTech SkillsHub equips refugee and underserved youth with digital literacy, programming, ethical AI, and professional skills — transforming isolation into opportunity.',
            buttons: { primary: "Apply Now", secondary: "Learn More" },
            bgImage: '/hero-placeholder.jpg',
        },

        mission: {
            title: "Inclusivity • Sustainability • Empowerment",
            description: "We are united by a single goal: to bridge the digital divide. Through technology, education, and mentorship, we are building a future where every young person has the opportunity to thrive.",
            image: "/mission-image.jpg"
        },
        vision: {
            title: "Opportunity and Equality for All",
            description: "We envision a world where location does not dictate potential. By providing access to world-class digital skills, we are leveling the playing field for refugees and underserved communities.",
            image: "/vision-image.jpg"
        },
        team: [
            // Founders
            { name: 'Gervais Mboninkunda', role: 'Co-Founder & Program Lead', image: teamImages.gervais, bio: 'Computer Engineering student at Ashesi University, passionate about bridging the digital divide through civic engagement and technology education.' },
            { name: 'Ishimwe Alistide', role: 'Co-Founder & Professional Skills Program Lead', image: teamImages.ishimwe, bio: 'Business Administration student, focused on empowering refugee youth through professional development and mentorship.' },

            // Team Members
            { name: 'Monia Nijimbere', role: 'Technical Learning Support', image: teamImages.monia, bio: 'Guides students in Python, AI, and computer basics.' },
            { name: 'Latia Iradukunda', role: 'Admission & Learner Support', image: teamImages.latia, bio: 'Supports learner selection and admissions, ensuring fair access for refugee and underserved youth.' },
            { name: 'Theonest Bizuru', role: 'Career Development Support', image: teamImages.theonest, bio: 'Helps students with CVs, LinkedIn, and public speaking.' },
            { name: 'Don Divin Niyukuri', role: 'Program Coordination', image: teamImages.divin, bio: 'Coordinates activities and ensures smooth operations.' },
            { name: 'Joseph Nduwamahoro', role: 'Media & Storytelling', image: teamImages.joseph, bio: 'Captures and shares inspiring stories of refugee students, highlighting their journey from digital isolation to empowerment.' },
            { name: 'Vestine Uwineza', role: 'Mentorship & Guidance', image: teamImages.vestine, bio: 'Provides mentorship and academic guidance.' },
            { name: 'Eleciella Habanayo', role: 'Fundraising & Partnerships', image: teamImages.ele, bio: 'Builds partnerships and mobilizes resources.' },
            { name: 'Dominique Kwizera', role: 'Community Outreach', image: teamImages.dominique, bio: 'Leads outreach sessions and connects with schools.' },
            { name: 'Kwizera Mugwaneza Frank', role: 'Digital Developer', image: teamImages.frank, bio: 'Supports digital systems and website development.' }
        ]
    },

    programsPage: {
        hero: {
            tag: "Our Programs",
            title: "Programs That Make A Difference",
            subtitle: "Curriculum designed to empower refugee and underserved Rwandan youth with digital and professional skills.",
            image: "/programs-hero.jpg"
        }
    },

    contactPage: {
        hero: {
            tag: "Contact",
            title: "Reach Out. We're Here Always",
            subtitle: "Have questions, ideas, or need support? Connect with us — we're ready to listen and help."
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
                value: "+250 788 123 456",
                link: "tel:+250788123456"
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
            description: 'An intensive 6-week program designed to fast-track your career management skills.',
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
    applyPage: {
        hero: {
            tag: "Join the Hub",
            title: "Start Your Digital Journey",
            subtitle: "Apply now for our free training programs. Spaces are limited, so we encourage early applications."
        },
        requirements: [
            "Must be between 16–28 years old",
            "Resident of Mahama Camp or Kirehe District",
            "Commitment to attend 80% of classes",
            "Basic English literacy is a plus",
            "Passion for technology and learning"
        ],
        steps: [
            { num: "01", text: "Fill out the form below" },
            { num: "02", text: "Attend a short interview" },
            { num: "03", text: "Get selected & start learning" }
        ]
    },
    home: {
        hero: {
            title: 'Bridging the Digital Divide',
            subtitle: 'Empowering refugee and underserved youth with digital literacy, programming, ethical AI, and professional skills.',
            buttons: { primary: "Apply Now", secondary: "Learn More" },
            bgImage: '/hero-placeholder.jpg',
        },
        about: {
            tag: "About Us",
            title: "Empowering Youth Through Technology",
            description: "Founded in 2025, GTech SkillsHub is a student-led initiative providing digital literacy, coding, ethical AI, and professional readiness for refugee and underserved youth in Mahama Camp.",
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
                { value: "200+", label: "Students Reached", sub: "Through outreach & training" },
                { value: "4", label: "Core Programs", sub: "Digital, Python, Career, AI" },
                { value: "2", label: "Communities Engaged", sub: "GS Paysannat L.D & L.C" }
            ]
        },
        help: {
            title: "How you can help",
            subtitle: "United, We Transform. Empowering youth, bridging gaps, and building futures through technology.",
            cards: [
                { title: "Mentorship & Outreach", desc: "Motivating students through school outreach and guidance.", icon: Users },
                { title: "Digital Skills Training", desc: "Providing access to computer literacy and safe internet use.", icon: Laptop },
                { title: "Career Development", desc: "Helping youth prepare CVs, LinkedIn, and job readiness.", icon: Rocket },
                { title: "Emerging Tech", desc: "Introducing ethical AI and data literacy for future opportunities.", icon: Lightbulb }
            ]
        },
        testimonials: {
            title: "Student Voices",
            subtitle: "Real stories from those we've helped and those who help sharing the hope & heart.",
            items: [
                { quote: "The training motivated me to study harder and believe in my future.", author: "Senior Six Student", role: "GS Paysannat L.D", image: "/avatar-1.jpg" },
                { quote: "I had never touched a laptop before. Now I can type my own CV.", author: "Graduate", role: "Digital Skills Program", image: "/avatar-2.jpg" }
            ]
        },
        faq: [
            { question: "Who can apply?", answer: "Refugee youth in Mahama Camp or underserved youth in nearby communities (16–28)." },
            { question: 'Is the program free?', answer: 'Yes, GTech SkillsHub provides free digital and career-readiness training.' },
            { question: 'Do I need a laptop?', answer: 'Yes. (Contact us if this is a barrier).' },
            { question: 'Where are classes held?', answer: 'In-person training sessions in selected refugee camps (Mahama) and nearby schools.' }
        ],
        cta: {
            title: "Empowering Refugee Youth Through Technology",
            subtitle: "Join us in bridging the digital divide with digital literacy, Python programming, ethical AI, and career development.",
            stat: "200+ Students Empowered"
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
            title: 'Python Programming',
            icon: Code,
            subtitle: "Learn Python fundamentals, problem-solving, and real-world applications.",
            description: 'Focuses on programming and applied technology, helping participants advance from basic literacy to practical code.',
            duration: '3 months',
            audience: 'Youth with basic computer literacy',
            outcomes: ["Python Basics", "Problem-Solving", "Simple Projects"],
            image: '/program-coding.jpg',
            fullDescription: "This hands-on web development course teaches HTML, CSS, and JavaScript so students can build responsive websites and a portfolio project.",
            curriculum: [
                "Introduction to Python",
                "Variables, Data Types, and Logic",
                "Loops and Functions",
                "Building Simple Applications",
                "Final Project: Python Portfolio"
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
            title: 'Ethical AI & Emerging Technologies',
            icon: Lightbulb,
            subtitle: "Introducing youth to Python, data literacy, and responsible use of AI in education and the workplace.",
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
            { name: 'Gervais Mboninkunda', title: 'Co-Founder & Program Lead', bio: 'Computer Engineering student at Ashesi University, passionate about bridging the digital divide through civic engagement and technology education.' },
            { name: 'Ishimwe Alistide', title: 'Co-Founder & Operations Lead', bio: 'Business Administration student, focused on empowering refugee youth through professional development and mentorship.' }
        ]
    },
    blogs: [
        { title: "School Outreach at GS Paysannat L.C", date: "Feb 2026", image: "/blog-1.jpg", description: "We introduced students to digital literacy and inspired them to pursue technology careers." },
        { title: "Mentorship and Career Development for Refugee Youth", date: "Jan 2026", image: "/blog-2.jpg", description: "Our mentors guided students in CV writing, LinkedIn, and interview preparation." },
        { title: "Launching ElevateGTech Platform", date: "Dec 2025", image: "/blog-3.jpg", description: "A new digital platform connecting students with learning resources and global opportunities." }
    ],
    donatePage: {
        hero: {
            tag: "Donate",
            title: "Donate. Impact. Transform Lives.",
            subtitle: "Your donation directly funds laptops, internet access, and mentorship for refugee youth."
        },
        steps: [
            { 
                num: "1", 
                title: "Enter Details", 
                desc: "Please complete your basic essential information.",
                icon: UserCheck 
            },
            { 
                num: "2", 
                title: "Select The Cause", 
                desc: "Choose cause or program you want to support.",
                icon: MousePointer2
            },
            { 
                num: "3", 
                title: "Enter Donation Amount", 
                desc: "Enter how much you wish to contribute & submit.",
                icon: CreditCard 
            },
            { 
                num: "4", 
                title: "Receive Confirmation", 
                desc: "Get instant receipts and updates on donation.",
                icon: CheckCircle 
            }
        ],
        faq: [
            { question: "What is your NGO's mission?", answer: "Our mission is to bridge the digital divide for refugee and underserved youth through technology and education." },
            { question: "How are donations used?", answer: "100% of public donations go directly to funding student laptops, internet access, and instructor stipends." },
            { question: "Can I volunteer?", answer: "Yes! We offer remote mentorship opportunities for tech professionals." },
            { question: "Besides donating, how else can I help?", answer: "You can partner with us to offer internships, sponsor a specific student, or donate equipment." },
            { question: "Can I sponsor a student?", answer: "Yes, our 'Sponsor a Future' program allows you to directly support a refugee youth through their 6-month digital training journey." }
        ]
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            subtitle: "We respect your privacy and are committed to protecting your personal data.",
            lastUpdated: "Last Updated: February 2026",
            content: [
                {
                    heading: "1. Introduction",
                    text: "GTech SkillsHub ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our programs."
                },
                {
                    heading: "2. Information We Collect",
                    text: "We collect information only for program applications, mentorship, and outreach."
                },
                {
                    heading: "3. How We Use Your Information",
                    text: "We do not sell or share student data; it is used only to connect youth with opportunities."
                },
                {
                    heading: "4. Data Security",
                    text: "We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet is 100% secure."
                },
                {
                    heading: "5. Contact Us",
                    text: "If you have any questions about this Privacy Policy, please contact us at gtechskillhub@gmail.com."
                }
            ]
        },
        terms: {
            title: "Terms & Conditions",
            subtitle: "Please read these terms carefully before using our services.",
            lastUpdated: "Last Updated: February 2026",
            content: [
                {
                    heading: "1. Acceptance of Terms",
                    text: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
                },
                {
                    heading: "2. Educational Content",
                    text: "All content provided on this platform is for educational purposes related to digital literacy, programming, and career development. While we strive for accuracy, GTech SkillsHub makes no warranties regarding completeness or accuracy of external opportunities listed."
                },
                {
                    heading: "3. Student Code of Conduct",
                    text: "Students enrolled in our programs are expected to maintain professional behavior. Harassment, discrimination, or misuse of provided technology will result in immediate termination from the program."
                },
                {
                    heading: "4. Intellectual Property",
                    text: "The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws."
                },
                {
                    heading: "5. Limitation of Liability",
                    text: "GTech SkillsHub shall not be liable for any damages that result from the use of, or inability to use, the materials on this site."
                }
            ]
        }
    }
}



