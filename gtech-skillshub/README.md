# 🌟 GTech SkillsHub Website

> A modern, responsive website for GTech SkillsHub - a non-profit organization bridging the digital divide for refugee and underserved youth through technology education and mentorship.

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 📖 Table of Contents

- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [What Has Been Done](#-what-has-been-done)
- [Content Management Guide](#-content-management-guide)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Support](#-support)

---

## 🚀 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **[SvelteKit](https://kit.svelte.dev/)** | Web Framework | 2.49.1 |
| **[Tailwind CSS](https://tailwindcss.com/)** | Styling | 4.1.17 |
| **[Svelte Motion](https://svelte-motion.gradientdescent.de/)** | Animations | 0.12.2 |
| **[Lucide Svelte](https://lucide.dev/)** | Icons | 0.563.0 |
| **[TypeScript](https://www.typescriptlang.org/)** | Type Safety | 5.9.3 |

### Why These Technologies?

- **SvelteKit**: Lightning-fast performance with minimal JavaScript
- **Tailwind CSS**: Rapid UI development with utility-first approach
- **Svelte Motion**: Smooth, declarative animations
- **TypeScript**: Catch errors early with type checking
- **Lucide Icons**: 1000+ beautiful, consistent icons

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ **npm** (comes with Node.js) or **pnpm** / **yarn**
- ✅ **Code Editor** - [VS Code](https://code.visualstudio.com/) recommended
- ✅ **Git** (optional) - For version control

### Recommended VS Code Extensions

- Svelte for VS Code
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

---

## ⚡ Quick Start

### Option 1: Using the Terminal

```bash
# 1. Navigate to the project folder
cd gtech-skillshub

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:5173
```

### Option 2: Step-by-Step Guide

**Step 1: Open Terminal/Command Prompt**
- Windows: Press `Win + R`, type `cmd`, press Enter
- Mac: Press `Cmd + Space`, type `terminal`, press Enter
- Linux: Press `Ctrl + Alt + T`

**Step 2: Navigate to Project**
```bash
cd path/to/gtech-skillshub
```

**Step 3: Install Dependencies**
```bash
npm install
```
⏱️ This takes 2-5 minutes depending on your internet speed.

**Step 4: Start Development Server**
```bash
npm run dev
```
✅ You should see: `Local: http://localhost:5173/`

**Step 5: Open in Browser**
- Open your browser and go to `http://localhost:5173`
- You should see the GTech SkillsHub homepage!

### 🎯 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev -- --open    # Start dev server and open browser
npm run dev -- --port 3000  # Use different port

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run check            # Type-check TypeScript
npm run lint             # Check code formatting
npm run format           # Auto-format code with Prettier

# Troubleshooting
rm -rf node_modules package-lock.json  # Clear dependencies
npm install              # Reinstall dependencies
```

---

## 📁 Project Structure

```
gtech-skillshub/
├── 📂 src/                          # Source code
│   ├── 📂 lib/                      # Shared libraries
│   │   ├── 📂 components/           # Reusable UI components
│   │   │   ├── Navbar.svelte        # Navigation bar
│   │   │   ├── Footer.svelte        # Site footer
│   │   │   ├── Card.svelte          # Card component
│   │   │   ├── Button.svelte        # Button variants
│   │   │   ├── Reveal.svelte        # Scroll animations
│   │   │   └── AccordionItem.svelte # FAQ accordion
│   │   ├── 📂 assets/               # Images and static assets
│   │   ├── 📄 data.ts               # ⭐ MAIN CONTENT FILE
│   │   └── 📄 index.ts              # Library exports
│   │
│   ├── 📂 routes/                   # Pages (file-based routing)
│   │   ├── 📄 +page.svelte          # 🏠 Home page (/)
│   │   ├── 📄 +layout.svelte        # Global layout wrapper
│   │   ├── 📄 layout.css            # Global styles
│   │   │
│   │   ├── 📂 about/                # About page (/about)
│   │   │   └── +page.svelte
│   │   │
│   │   ├── 📂 programs/             # Programs (/programs)
│   │   │   ├── +page.svelte         # Programs list
│   │   │   └── [slug]/              # Dynamic program pages
│   │   │       └── +page.svelte     # /programs/digital-skills
│   │   │
│   │   ├── 📂 opportunities/        # Opportunities (/opportunities)
│   │   │   ├── +page.svelte         # Opportunities list
│   │   │   └── [slug]/              # Dynamic opportunity pages
│   │   │       └── +page.svelte     # /opportunities/mastercard-scholarship
│   │   │
│   │   ├── 📂 contact/              # Contact page (/contact)
│   │   │   └── +page.svelte
│   │   │
│   │   ├── 📂 donate/               # Donate page (/donate)
│   │   │   └── +page.svelte
│   │   │
│   │   ├── 📂 apply/                # Apply page (/apply)
│   │   │   └── +page.svelte
│   │   │
│   │   └── 📂 team/                 # Team page (/team)
│   │       └── +page.svelte
│   │
│   └── 📄 app.html                  # HTML template
│
├── 📂 static/                       # Public files (served as-is)
│   ├── favicon.ico                  # Site favicon
│   ├── logo.png                     # Logo image
│   └── robots.txt                   # SEO robots file
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 svelte.config.js              # SvelteKit configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 vite.config.ts                # Vite build configuration
└── 📄 README.md                     # This file!
```

### 🔑 Key Files Explained

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/lib/data.ts` | **All website content** | Update text, images, programs, team |
| `src/routes/+page.svelte` | Home page layout | Change home page structure |
| `src/routes/+layout.svelte` | Global layout (Navbar/Footer) | Modify site-wide layout |
| `src/lib/components/` | Reusable components | Create/edit UI components |
| `static/` | Images, favicon, etc. | Add new images/files |
| `tailwind.config.js` | Design system (colors, fonts) | Customize theme |
| `package.json` | Dependencies | Add/remove packages |

---

## ✅ What Has Been Done

### 📄 Pages Implemented (8 Pages)

| Page | Route | Features | Status |
|------|-------|----------|--------|
| **Home** | `/` | Hero, programs overview, impact stats, testimonials, FAQ | ✅ Complete |
| **About** | `/about` | Mission, vision, team members, impact statistics | ✅ Complete |
| **Programs** | `/programs` | All training programs with detailed views | ✅ Complete |
| **Program Details** | `/programs/[slug]` | Individual program pages (dynamic routing) | ✅ Complete |
| **Opportunities** | `/opportunities` | Scholarships, fellowships, grants listing | ✅ Complete |
| **Opportunity Details** | `/opportunities/[slug]` | Individual opportunity pages (dynamic routing) | ✅ Complete |
| **Contact** | `/contact` | Contact form and information | ✅ Complete |
| **Donate** | `/donate` | Donation process and FAQ | ✅ Complete |
| **Apply** | `/apply` | Application form for programs | ✅ Complete |
| **Team** | `/team` | Team member profiles | ✅ Complete |

### 🎨 Features Implemented

#### Design & UX
- ✅ **Fully Responsive** - Works on mobile, tablet, and desktop
- ✅ **Modern UI** - Clean, professional design with Tailwind CSS
- ✅ **Smooth Animations** - Scroll-triggered animations with Svelte Motion
- ✅ **Accessible** - Keyboard navigation and screen reader friendly
- ✅ **Fast Loading** - Optimized images and code splitting

#### Functionality
- ✅ **Dynamic Routing** - SEO-friendly URLs for programs and opportunities
- ✅ **Centralized Content** - All content managed in `data.ts`
- ✅ **Interactive Components** - FAQ accordions, hover effects, animations
- ✅ **Contact Forms** - Application and contact forms
- ✅ **Social Integration** - WhatsApp, Instagram, LinkedIn links

#### Developer Experience
- ✅ **TypeScript** - Type-safe development
- ✅ **Component Library** - Reusable UI components
- ✅ **Code Formatting** - Prettier for consistent code style
- ✅ **Hot Module Replacement** - Instant updates during development

### 🧩 Components Created

| Component | Purpose | Used In |
|-----------|---------|---------|
| `Navbar.svelte` | Responsive navigation with mobile menu | All pages |
| `Footer.svelte` | Site footer with links and social media | All pages |
| `Card.svelte` | Reusable card component | Programs, Opportunities |
| `Button.svelte` | Styled button variants | Multiple pages |
| `Reveal.svelte` | Scroll-triggered animations | Home, About |
| `AccordionItem.svelte` | Expandable FAQ items | Home, Donate |

### 📊 Content Sections

- ✅ **4 Training Programs** - Digital Skills, Coding, Career Dev, Emerging Tech
- ✅ **5 Opportunities** - Scholarships, fellowships, grants, courses
- ✅ **9 Team Members** - Complete team profiles with roles
- ✅ **Impact Statistics** - Youth trained, programs, communities served
- ✅ **Testimonials** - Student success stories
- ✅ **FAQ Sections** - Common questions answered

---

## 📝 Content Management Guide

> **🎯 All website content is in ONE file: `src/lib/data.ts`**
>
> You don't need to know coding to update content! Just edit the text, numbers, and links in this file.

### 🚀 Getting Started

1. **Open the file**: `src/lib/data.ts` in your code editor
2. **Find the section** you want to update (use Ctrl+F to search)
3. **Edit the text** between the quotes `"like this"`
4. **Save the file** (Ctrl+S or Cmd+S)
5. **Check your browser** - changes appear automatically!

### 📋 Content Sections Overview

| Section | What It Controls | Line Numbers (approx) |
|---------|------------------|----------------------|
| `general` | Site name, email, social links | 10-21 |
| `hero` | Home page headline | 196-200 |
| `impact` | Statistics (500+ Youth Trained) | 212-219 |
| `programs` | Training programs (4 programs) | 252-347 |
| `opportunities` | Scholarships & fellowships (5 items) | 108-175 |
| `aboutPage.team` | Team members (9 people) | 44-58 |
| `faq` | Frequently asked questions | 239-244 |
| `testimonials` | Student success stories | 231-238 |

---

### 🎯 Common Updates (Copy & Paste Examples)

#### 1️⃣ Update Contact Information

**Location in file**: Lines 10-21

```typescript
general: {
    name: 'GTech SkillsHub',                    // ← Organization name
    email: 'gtechskillhub@gmail.com',           // ← Change email here
    whatsapp: 'https://chat.whatsapp.com/...',  // ← Update WhatsApp group link
    socials: {
        instagram: 'https://www.instagram.com/gtechskillhub/',  // ← Instagram URL
        linkedin: 'https://www.linkedin.com/company/gtech-skills-hub',  // ← LinkedIn URL
        facebook: '#'                            // ← Facebook URL (# means no link)
    },
    location: 'Based near Mahama Refugee Camp, Rwanda'  // ← Physical location
}
```

**What to change:**
- Replace email address
- Update social media URLs
- Change location text

#### 2️⃣ Update Home Page Hero Section

**Location in file**: Lines 196-200

```typescript
hero: {
    badge: 'EMPOWERING YOUTH',                   // ← Small badge text at top
    headline: 'Unite. Act. Transform.',          // ← Big headline text
    subheadline: 'Your support powers life-changing missions, feeding families & rebuilding hope.'  // ← Subtitle
}
```

**What to change:**
- Badge text (appears in small pill at top)
- Main headline (big bold text)
- Subheadline (description below headline)

#### 3️⃣ Update Impact Statistics

**Location in file**: Lines 212-219

```typescript
impact: {
    youthTrained: '500+',              // ← Number of youth trained
    youthTrainedLabel: 'Youth Trained', // ← Label for the stat
    programs: '4',                      // ← Number of programs
    communities: '3'                    // ← Communities served
}
```

**What to change:**
- Update numbers as your impact grows
- Change labels if needed

**Example:**
```typescript
impact: {
    youthTrained: '1,200+',            // Changed from 500+ to 1,200+
    youthTrainedLabel: 'Students Empowered',
    programs: '6',                      // Added 2 new programs
    communities: '5'                    // Expanded to 5 communities
}
```

#### 4️⃣ Add or Edit Programs

**Location in file**: Lines 252-347

**To edit an existing program**, find it and change the values:

```typescript
{
    id: 'digital-skills',                        // ← URL slug (don't change unless needed)
    title: 'Digital Skills Training',            // ← Program name (shows on cards)
    icon: Laptop,                                // ← Icon (see icon guide below)
    subtitle: "Master the basics of the digital world.",  // ← Short tagline
    description: 'Foundational digital skills training...',  // ← Card description
    duration: '6 months',                        // ← How long the program runs
    audience: 'High-school graduates (16-28)',   // ← Who can join
    outcomes: ['Computer Basics', 'Google Workspace', 'Safe Tech Use'],  // ← What students learn
    image: '/program-digital.jpg',               // ← Main image (add to /static folder)
    fullDescription: "Access to digital literacy is essential...",  // ← Full page description
    curriculum: [                                // ← Course topics (bullet points)
        "Introduction to Hardware & Software",
        "Typing & Mouse Proficiency",
        "Google Workspace (Docs, Sheets, Slides)",
        "Internet Safety & Email Etiquette"
    ],
    gallery: ["/digital-1.jpg", "/digital-2.jpg"],  // ← Photo gallery
    testimonials: [                              // ← Student quotes
        {
            name: "Grace K.",
            role: "Graduate",
            text: "I had never touched a computer before. Now I am typing my own CV."
        }
    ]
}
```

**To add a NEW program**, copy an existing program block and paste it after the last one:

```typescript
programs: [
    { /* existing program 1 */ },
    { /* existing program 2 */ },
    { /* existing program 3 */ },
    { /* existing program 4 */ },
    // Add your new program here:
    {
        id: 'web-development',                   // ← New unique ID
        title: 'Web Development Bootcamp',       // ← New program name
        icon: Code,                              // ← Choose an icon
        subtitle: "Build modern websites from scratch.",
        description: 'Learn HTML, CSS, JavaScript and build real projects.',
        duration: '4 months',
        audience: 'Youth with basic computer skills',
        outcomes: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
        image: '/program-web.jpg',               // ← Add this image to /static
        fullDescription: "Become a web developer...",
        curriculum: [
            "HTML5 Fundamentals",
            "CSS3 & Flexbox",
            "JavaScript Basics",
            "Building Your Portfolio"
        ],
        gallery: ["/web-1.jpg", "/web-2.jpg"],
        testimonials: [
            { name: "John D.", role: "Student", text: "Amazing program!" }
        ]
    }
]
```

#### 5️⃣ Add or Edit Opportunities (Scholarships/Fellowships)

**Location in file**: Lines 108-175

**To edit an existing opportunity:**

```typescript
{
    id: 'mastercard-scholarship',                // ← URL slug
    category: 'Scholarship',                     // ← Type: Scholarship, Fellowship, Grant, Leadership, Online Course
    title: 'Mastercard Foundation Scholars Program',  // ← Opportunity name
    provider: 'Mastercard Foundation',           // ← Organization offering it
    deadline: 'Sep 15, 2025',                    // ← Application deadline
    image: '/opp-scholarship.jpg',               // ← Card image
    description: 'Full-ride scholarships for young African leaders...',  // ← Short description
    fullDescription: "The Mastercard Foundation Scholars Program is a global initiative...",  // ← Full details
    eligibility: [                               // ← Who can apply
        "Citizen of an African country",
        "Strong academic record",
        "Commitment to giving back"
    ],
    value: "Full Tuition + Stipend",             // ← What you get
    applyLink: "https://mastercardfdn.org"       // ← Where to apply
}
```

**To add a NEW opportunity:**

```typescript
opportunities: [
    { /* existing opportunities */ },
    // Add new opportunity here:
    {
        id: 'new-fellowship-2025',
        category: 'Fellowship',
        title: 'African Youth Leadership Fellowship',
        provider: 'African Union',
        deadline: 'Dec 31, 2025',
        image: '/opp-fellowship-new.jpg',
        description: 'A 6-month leadership program for emerging African leaders.',
        fullDescription: "This fellowship provides training, mentorship, and networking opportunities...",
        eligibility: [
            "Ages 18-35",
            "African citizen or resident",
            "Demonstrated leadership experience"
        ],
        value: "Fully Funded + Travel",
        applyLink: "https://example.com/apply"
    }
]
```

#### 6️⃣ Update Team Members

**Location in file**: Lines 44-58

```typescript
aboutPage: {
    team: [
        {
            name: 'Gervais Mboninkunda',         // ← Full name
            role: 'Co-Founder & Program Lead',   // ← Job title/position
            image: '/team-gervais.jpg'           // ← Photo (add to /static folder)
        },
        {
            name: 'Monia Nijimbere',
            role: 'Technical Learning Support',
            image: '/team-monia.jpg'
        },
        // Add more team members by copying the pattern above
    ]
}
```

**To add a new team member:**

```typescript
{
    name: 'New Team Member Name',
    role: 'Their Position',
    image: '/team-newperson.jpg'  // ← Don't forget to add the photo to /static folder!
},
```

#### 7️⃣ Update FAQ (Frequently Asked Questions)

**Location in file**: Lines 239-244

```typescript
faq: [
    {
        question: "Who can apply?",              // ← The question
        answer: "Refugee youth in Mahama Camp or underserved youth in nearby communities (16–28)."  // ← The answer
    },
    {
        question: 'Is the program free?',
        answer: 'Yes, GTech SkillsHub provides free digital and career-readiness training.'
    },
    // Add more FAQs by copying the pattern above
]
```

**To add a new FAQ:**

```typescript
{
    question: "What is your new question?",
    answer: "This is the answer to the new question."
},
```

#### 8️⃣ Update Testimonials (Student Success Stories)

**Location in file**: Lines 231-238

```typescript
testimonials: {
    title: "Stories Bringing Hope",              // ← Section title
    subtitle: "Real stories from those we've helped sharing the hope & heart.",  // ← Section subtitle
    items: [
        {
            quote: "The skills I learned here changed my life...",  // ← What they said
            author: "Sarah M.",                  // ← Student name
            role: "Student Alumni",              // ← Their status
            image: "/avatar-2.jpg"               // ← Their photo
        },
        {
            quote: "Innovating Youth Engagement...",
            author: "Liam Carter",
            role: "Program Director",
            image: "/avatar-1.jpg"
        }
    ]
}
```

---

### 🖼️ How to Add Images

**Step 1: Prepare Your Image**
- Recommended size: 1200x800px for hero images, 600x400px for cards
- Formats: `.jpg`, `.png`, `.svg`, `.webp`
- Optimize images (use [TinyPNG](https://tinypng.com/) to compress)

**Step 2: Add to Static Folder**
1. Open the `static/` folder in your project
2. Copy your image file into this folder
3. Rename it to something descriptive (e.g., `program-web-dev.jpg`)

**Step 3: Reference in data.ts**
```typescript
image: '/program-web-dev.jpg'  // ← Note the forward slash at the start!
```

**File location example:**
```
Your file:     static/program-web-dev.jpg
Reference as:  '/program-web-dev.jpg'
```

**Common image fields:**
- `image` - Main image for cards/pages
- `gallery` - Array of images: `["/img1.jpg", "/img2.jpg"]`
- `bgImage` - Background images

---

### 🎨 How to Change Icons

Icons come from **[Lucide Icons](https://lucide.dev/icons)** - a library of 1000+ beautiful icons.

**Step 1: Find Your Icon**
1. Visit [https://lucide.dev/icons](https://lucide.dev/icons)
2. Search for an icon (e.g., "rocket", "book", "heart")
3. Copy the icon name (e.g., `Rocket`, `BookOpen`, `Heart`)

**Step 2: Import the Icon**
At the **top** of `data.ts` (around line 1-7), add your icon to the import:

```typescript
import {
    BookOpen, Code, Lightbulb, Rocket,    // ← Existing icons
    Users, Heart, Hand, MessageCircle,
    YourNewIcon  // ← Add your new icon here (use exact name from Lucide)
} from 'lucide-svelte';
```

**Step 3: Use the Icon**
```typescript
icon: YourNewIcon  // ← No quotes! It's a variable, not a string
```

**Example - Adding a "Star" icon:**

```typescript
// 1. Import at top of file
import { BookOpen, Code, Star } from 'lucide-svelte';

// 2. Use in your data
{
    title: 'Featured Program',
    icon: Star,  // ← Now you can use Star icon
    // ... rest of your data
}
```

**Available icon categories:**
- General: `Home`, `Settings`, `Search`, `Menu`
- Education: `BookOpen`, `GraduationCap`, `Award`, `Pencil`
- Tech: `Code`, `Laptop`, `Smartphone`, `Wifi`
- People: `Users`, `User`, `UserCheck`, `Heart`
- Business: `Briefcase`, `TrendingUp`, `DollarSign`
- Communication: `Mail`, `Phone`, `MessageCircle`, `Send`

---

### 📋 Complete Data Structure Reference

The `siteData` object in `data.ts` contains these sections:

| Section | What It Controls | Example Fields |
|---------|------------------|----------------|
| `general` | Site-wide info | `name`, `email`, `whatsapp`, `socials`, `location` |
| `hero` | Home page hero | `badge`, `headline`, `subheadline` |
| `impact` | Statistics | `youthTrained`, `programs`, `communities` |
| `programs` | Training programs (array) | `title`, `description`, `duration`, `curriculum` |
| `opportunities` | Scholarships/fellowships (array) | `title`, `provider`, `deadline`, `eligibility` |
| `aboutPage` | About page | `hero`, `mission`, `vision`, `team` |
| `programsPage` | Programs page | `hero` section |
| `contactPage` | Contact page | `hero`, `infoCards` |
| `donatePage` | Donation page | `hero`, `steps`, `faq` |
| `applyPage` | Application page | `hero`, `requirements`, `steps` |
| `opportunitiesPage` | Opportunities page | `hero`, `howItWorks` |
| `team` | Team members | `founders` array |
| `blogs` | Blog posts (array) | `title`, `date`, `image` |
| `testimonials` | Success stories | `title`, `subtitle`, `items` |
| `faq` | FAQ (array) | `question`, `answer` |

### 🔍 Quick Search Tips

Use **Ctrl+F** (or **Cmd+F** on Mac) in `data.ts` to quickly find:
- `"email"` - Find contact email
- `"whatsapp"` - Find WhatsApp link
- `"500+"` - Find impact statistics
- `"Digital Skills"` - Find specific program
- `"team:"` - Find team section
- `"faq:"` - Find FAQ section

---

## 🎨 Customization

### 🎨 Changing Colors

**File**: `tailwind.config.js`

Currently using:
- **Primary**: Blue (`blue-600`, `blue-700`)
- **Text**: Slate (`slate-900`, `slate-600`)
- **Background**: White

To change the primary color, find and replace in your code:
- `blue-600` → `purple-600` (or any Tailwind color)
- `blue-700` → `purple-700`
- `blue-50` → `purple-50`

**Tailwind color options**: `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`

### ✏️ Changing Fonts

**File**: `tailwind.config.js`

Add custom fonts:
```javascript
export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Your Font', 'sans-serif'],
            }
        }
    }
}
```

### 🎭 Global Styles

**File**: `src/routes/layout.css`

Add custom CSS that applies to all pages:
```css
/* Example: Change link colors globally */
a {
    color: #2563eb;
}

a:hover {
    color: #1d4ed8;
}
```

---

## 🚀 Deployment

### 🌐 Deploy to Vercel (Recommended - FREE)

**Why Vercel?**
- ✅ Free hosting for personal/non-profit projects
- ✅ Automatic deployments when you push to GitHub
- ✅ Fast global CDN
- ✅ Easy setup (5 minutes)

**Steps:**

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/gtech-skillshub.git
   git push -u origin main
   ```

2. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and use your GitHub account

3. **Import your project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

4. **Configure (usually auto-detected)**
   - Framework Preset: **SvelteKit**
   - Build Command: `npm run build`
   - Output Directory: `.svelte-kit`
   - Install Command: `npm install`

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

**Your site URL**: `https://your-project-name.vercel.app`

**Future updates**: Just push to GitHub, Vercel auto-deploys!

---

### 🌐 Deploy to Netlify (Alternative - FREE)

**Steps:**

1. **Push code to GitHub** (same as above)

2. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **Import project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

4. **Configure**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Click "Deploy site"

5. **Done!**
   - Your site is live at `https://your-site-name.netlify.app`

---

### 🌐 Other Deployment Options

| Platform | Free Tier | Best For |
|----------|-----------|----------|
| **Vercel** | ✅ Yes | SvelteKit (recommended) |
| **Netlify** | ✅ Yes | Static sites |
| **Cloudflare Pages** | ✅ Yes | Global performance |
| **GitHub Pages** | ✅ Yes | Simple static sites |
| **Railway** | ⚠️ Limited | Full-stack apps |

**Note**: For platforms other than Vercel/Netlify, you may need to install a [SvelteKit adapter](https://kit.svelte.dev/docs/adapters).

---

## 📚 Available Commands

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `npm run dev` | Start development server | While building/editing |
| `npm run dev -- --open` | Start dev server + open browser | Quick preview |
| `npm run dev -- --port 3000` | Use different port | Port 5173 is busy |
| `npm run build` | Build for production | Before deploying |
| `npm run preview` | Preview production build | Test before deploy |
| `npm run check` | Type-check TypeScript | Find type errors |
| `npm run lint` | Check code formatting | Before committing |
| `npm run format` | Auto-format code | Clean up code style |

**Most used commands:**
```bash
npm run dev      # Daily development
npm run build    # Before deploying
npm run format   # Before committing code
```

---

## 🐛 Troubleshooting

### ❌ "Port 5173 is already in use"

**Problem**: Another app is using port 5173

**Solution**:
```bash
# Option 1: Use a different port
npm run dev -- --port 3000

# Option 2: Kill the process using port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Option 2: Kill the process (Mac/Linux)
lsof -ti:5173 | xargs kill -9
```

---

### ❌ "Module not found" or dependency errors

**Problem**: Dependencies not installed or corrupted

**Solution**:
```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm install

# Or on Windows PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

---

### ❌ TypeScript errors

**Problem**: Type checking errors

**Solution**:
```bash
# Check for errors
npm run check

# Common fixes:
# 1. Make sure all imports are correct
# 2. Check data.ts for missing fields
# 3. Restart VS Code
```

---

### ❌ Changes not showing in browser

**Problem**: Browser cache or dev server issue

**Solution**:
1. **Hard refresh**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Clear browser cache**: Settings → Clear browsing data
3. **Restart dev server**: Stop (`Ctrl + C`) and run `npm run dev` again

---

### ❌ Images not showing

**Problem**: Image path incorrect or file missing

**Solution**:
1. Check image is in `/static` folder
2. Check path starts with `/` (e.g., `/image.jpg` not `image.jpg`)
3. Check file extension matches (`.jpg` vs `.jpeg`)
4. Check file name spelling (case-sensitive on some systems)

**Example**:
```typescript
// ❌ Wrong
image: 'program-digital.jpg'        // Missing /
image: '/Program-Digital.jpg'       // Wrong case
image: '/static/program-digital.jpg' // Don't include /static

// ✅ Correct
image: '/program-digital.jpg'
```

---

### ❌ "Cannot find module 'lucide-svelte'"

**Problem**: Icon import not found

**Solution**:
```bash
# Reinstall dependencies
npm install lucide-svelte

# Or reinstall everything
npm install
```

---

### 🆘 Still Having Issues?

1. **Check the browser console**: Right-click → Inspect → Console tab
2. **Check the terminal**: Look for error messages
3. **Search the error**: Copy error message and search on Google/Stack Overflow
4. **Ask for help**: Contact the team (see Support section below)

---

## 📞 Support & Contact

### 🤝 Get Help

**For technical issues:**
- 📧 Email: gtechskillhub@gmail.com
- 💬 WhatsApp: [Join Community](https://chat.whatsapp.com/IdNGD9CgqCWKNa1ODqqPC7)

**For content updates:**
- See the [Content Management Guide](#-content-management-guide) above
- Check the [data.ts file](src/lib/data.ts)

**For code contributions:**
- Fork the repository
- Create a feature branch
- Submit a pull request

### 📚 Helpful Resources

- **SvelteKit Docs**: [kit.svelte.dev](https://kit.svelte.dev/)
- **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Lucide Icons**: [lucide.dev/icons](https://lucide.dev/icons)
- **Svelte Motion**: [svelte-motion.gradientdescent.de](https://svelte-motion.gradientdescent.de/)

---

## 🎯 Quick Reference Card

**Most Common Tasks:**

| Task | File to Edit | What to Change |
|------|--------------|----------------|
| Update email/phone | `src/lib/data.ts` | `general.email`, `general.whatsapp` |
| Change hero text | `src/lib/data.ts` | `hero.headline`, `hero.subheadline` |
| Update statistics | `src/lib/data.ts` | `impact.youthTrained`, etc. |
| Add new program | `src/lib/data.ts` | Add to `programs` array |
| Add team member | `src/lib/data.ts` | Add to `aboutPage.team` array |
| Add new image | `static/` folder | Copy image, reference as `/image.jpg` |
| Change colors | `tailwind.config.js` | Modify theme colors |
| Add new page | `src/routes/` | Create new folder with `+page.svelte` |

**Most Used Commands:**
```bash
npm run dev      # Start development
npm run build    # Build for production
npm run format   # Format code
```

---

## 📄 License

This project is private and proprietary to **GTech SkillsHub**.

© 2025 GTech SkillsHub. All rights reserved.

---

## 🙏 Acknowledgments

**Built with:**
- ❤️ Love and dedication by the GTech SkillsHub Team
- ⚡ SvelteKit - The fastest web framework
- 🎨 Tailwind CSS - Beautiful, responsive design
- ✨ Svelte Motion - Smooth animations

**Special thanks to:**
- All contributors and volunteers
- Our students and community members
- Open source community

---

<div align="center">

### 🌟 Star this project if you find it helpful!

**GTech SkillsHub** - *Bridging the digital divide, one student at a time.*

[Website](https://gtechskillshub.org) • [Instagram](https://www.instagram.com/gtechskillhub/) • [LinkedIn](https://www.linkedin.com/company/gtech-skills-hub)

</div>
