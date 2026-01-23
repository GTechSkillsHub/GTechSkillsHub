// src/lib/data.ts
import { Terminal, Rocket, Users, Cpu } from 'lucide-svelte';

export const siteData = {
    general: {
        name: "GTech SkillsHub",
        tagline: "Bridging the digital gap for refugee and underserved youth through learning and opportunity.",
        email: "contact@gtechskillshub.org",
        whatsapp: "https://chat.whatsapp.com/IdNGD9CgqCWKNa1ODqqPC7",
        socials: {
            instagram: "https://www.instagram.com/gtechskillhub/",
            linkedin: "https://www.linkedin.com/company/gtech-skills-hub",
            facebook: "#"
        },
        location: "Based near Mahama Refugee Camp, Rwanda"
    },
    hero: {
        headline: "Empowering Refugee and Underserved Youth Through Digital Skills and Opportunity",
        subheadline: "We equip young people in Rwanda with practical digital skills, mentorship, and access to global opportunities.",
        badge: "Serving Rwanda Since 2024"
    },
    impact: {
        youthTrained: "100-300",
        youthTrainedLabel: "Youth Trained (Goal Y1-2)",
        programs: "04",
        communities: "Mahama + Host",
        mentors: "15+"
    },

    programs: [
        {
            id: "digital-skills",
            title: "Digital Skills Training",
            icon: Terminal,
            description: "Foundational digital skills training for youth with little or no prior computer experience, covering basics like Google Workspace.",
            duration: "6 months",
            audience: "High-school graduates (16-28)",
            outcomes: ["Computer Basics", "Google Workspace", "Safe Tech Use"]
        },
        {
            id: "coding-beginners",
            title: "Coding for Beginners",
            icon: Cpu,
            description: "Focuses on programming and applied technology, helping participants advance from basic literacy to practical code.",
            duration: "3 months",
            audience: "Youth with basic computer literacy",
            outcomes: ["Python Programming", "AI Fundamentals", "Emerging Tech"]
        },
        {
            id: "career-dev",
            title: "Career Development",
            icon: Rocket,
            description: "Mentorship and training on professional skills to strengthen career readiness and open doors to employment.",
            duration: "Integrated",
            audience: "All participants",
            outcomes: ["Strong CV", "LinkedIn Profile", "Job Readiness"]
        },
        {
            id: "emerging-tech",
            title: "Emerging Technologies",
            icon: Users,
            description: "Introduces participants to basic programming, data literacy, and artificial intelligence trends.",
            duration: "3 months",
            audience: "Youth with strong interest in AI",
            outcomes: ["Data Literacy", "AI Awareness", "Global Opportunities"]
        }
    ],
    team: {
        founders: [
            {
                name: "Gervais Mboninkunda",
                title: "Co-Founder & Program Lead",
                bio: "Computer Engineering student (Ashesi University). Leads program design, digital training, and mentorship coordination."
            },
            {
                name: "Ishiwe Alistide",
                title: "Co-Founder & Operations Lead",
                bio: "Business Administration student (Ashesi University). Focuses on business management and impact-focused entrepreneurship."
            }
        ]
    },
    partners: [
        "Ashesi University",
        "Mastercard Foundation Fellowship (Jim Leech)",
        "UN MGCY"
    ],
    faq: [
        {
            question: "Who can apply?",
            answer: "Refugee youth in Mahama Camp or underserved youth in nearby communities who have completed S6 (High School) and are aged 16–28."
        },
        {
            question: "Is the program free?",
            answer: "Yes, GTech SkillsHub provides free digital and career-readiness training."
        },
        {
            question: "Do I need a laptop?",
            answer: "Yes. (Note: Please contact us if this is a barrier, as we strive to support access)."

        },
        {
            question: "Where are classes held?",
            answer: "In-person training sessions in selected refugee camps (Mahama) and nearby schools."
        }
    ]
};