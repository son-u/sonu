import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export const DATA = {
    name: "Sonu Sharma",
    initials: "SS",
    url: "https://sonusharma.com",
    location: "India",
    locationLink: "https://www.google.com/maps/place/India",
    description:
        "Freelance Web Developer focused on building accessible, pixel-perfect, minimalist web experiences.",
    summary:
        "Full-Stack Developer specializing in MERN stack from frontend to backend. Building scalable, high-performance web applications for small business. Open to exciting opportunities.",
    avatarUrl: "/me.jpg",
    skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "Java",
        "HTML",
        "Figma",
        "PHP",
        "MySQL",
    ],
    contact: {
        email: "sunbaeof@gmail.com",
        tel: "+91 12345 67890",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/son-u",
                icon: FaGithub,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/sonu-sharma007",
                icon: FaLinkedin,
            },
            X: {
                name: "X",
                url: "https://x.com/sunbaeof",
                icon: FaXTwitter,
            },
            email: {
                name: "Send Email",
                url: "mailto:sunbaeof@gmail.com",
                icon: FaEnvelope,
            },
            WhatsApp: {
                name: "WhatsApp",
                url: "https://wa.me/918101395176",
                icon: FaWhatsapp,
            },
        },
    },
    work: [
        {
            company: "Faiz Dev & Co.",
            href: "https://faizdevandco.in/",
            badges: [],
            location: "Remote",
            title: "Full Stack Developer",
            logoUrl: "/fdc-logo.png",
            start: "Dec 2024",
            end: "Present",
            description:
                "Co-Founder of Web Agency and a Full Stack Developer.\nWorked on 15+ client projects building scalable solutions for small businesses.\nLed the end-to-end development lifecycle, ensuring timely delivery and high-quality standards for all client deliverables.",
        },
    ],

    projects: [
        {
            title: "E-Commerce Using MERN Stack",
            href: "https://ecommerce-frontend-2024-rouge.vercel.app/",
            dates: "",
            active: true,
            description:
                "Developed an E-Commerce platform using the MERN stack, offering seamless browsing, secure transactions, and personalized shopping experiences.",
            technologies: [
                "React.js",
                "Express.js",
                "Node.js",
                "MongoDB",
                "Firebase",
            ],
            links: [
                {
                    type: "Live",
                    href: "https://ecommerce-frontend-2024-rouge.vercel.app/",
                    icon: "earth",
                },
                {
                    type: "GitHub",
                    href: "https://github.com/son-u/ecommerce-frontend-2024",
                    icon: "github",
                },
            ],
            image: "/ecommerce.png",
            video: "",
        },
        {
            title: "Flower Recognition System",
            href: "https://github.com/son-u/florascan",
            dates: "",
            active: true,
            description:
                "Implemented a Flower Recognition System using machine learning, enabling accurate classification of flowers based on their features.",
            technologies: [
                "Python 3.x",
                "Jupyter Notebook",
                "Flask",
                "HTML",
                "CSS",
                "JavaScript",
            ],
            links: [
                {
                    type: "Live",
                    href: "https://github.com/son-u/florascan",
                    icon: "earth",
                },
                {
                    type: "GitHub",
                    href: "https://github.com/son-u/florascan",
                    icon: "github",
                },
            ],
            image: "/florascan.png",
            video: "",
        },
        {
            title: "Bus Ticket Booking System",
            href: "https://github.com/son-u/Bus_Ticket_Booking_System",
            dates: "",
            active: true,
            description:
                "Built a Java full-stack Bus Ticket Booking System utilizing MySQL for robust data management and seamless user experience.",
            technologies: [
                "Java",
                "JSP",
                "Servlets",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript",
            ],
            links: [
                {
                    type: "Live",
                    href: "https://github.com/son-u/Bus_Ticket_Booking_System",
                    icon: "earth",
                },
                {
                    type: "GitHub",
                    href: "https://github.com/son-u/Bus_Ticket_Booking_System",
                    icon: "github",
                },
            ],
            image: "/nbstc.png",
            video: "",
        },
        {
            title: "PG Management Dashboard",
            href: "https://github.com/son-u/pg-management.git",
            dates: "",
            active: true,
            description:
                "Full-stack dashboard for PG managers to streamline operations, manage tenants, and track business financial health.",
            technologies: [
                "PHP",
                "Supabase",
                "JavaScript",
                "Tailwind CSS",
            ],
            links: [
                {
                    type: "Live",
                    href: "https://github.com/son-u/pg-management.git",
                    icon: "earth",
                },
                {
                    type: "GitHub",
                    href: "https://github.com/son-u/pg-management.git",
                    icon: "github",
                },
            ],
            image: "/pg.png",
            video: "",
        },
        {
            title: "Personal Agency Website",
            href: "https://faizdevandco.in/",
            dates: "",
            active: true,
            description:
                "Official website for Faiz Dev & Co., showcasing services, portfolio, and client testimonials. Designed for performance and visual appeal.",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
                "Framer Motion",
            ],
            links: [
                {
                    type: "Live",
                    href: "https://faizdevandco.in/",
                    icon: "earth",
                },
                {
                    type: "GitHub",
                    href: "https://github.com/son-u/faiz-dev-co.git",
                    icon: "github",
                },
            ],
            image: "/agency.png",
            video: "",
        },
    ],
    blogs: [
        {
            title: "React2Shell: The 10.0 CVSS Nightmare",
            dates: "2026-01-03",
            description: "A deep dive into CVE-2025-55182, a critical RCE vulnerability in React Server Components, how it works, and how to patch it.",
            image: "",
            href: "/blogs/react2shell",
            links: [],
        },
        {
            title: "Progressive Web Apps in 2026: Are they finally mainstream?",
            dates: "2026-01-03",
            description: "From biometric auth to WebAssembly power, explore how PWAs have evolved in 2026 to rival native apps.",
            image: "",
            href: "/blogs/pwa-2026",
            links: [],
        },
        {
            title: "Server-side rendering vs. client-side rendering: When to use what.",
            dates: "2026-01-03",
            description: "Navigating the blurred lines of SSR and CSR in 2026. How React Server Components and hybrid frameworks have changed the rules.",
            image: "",
            href: "/blogs/ssr-vs-csr",
            links: [],
        },
        {
            title: "AI coding assistants: Productivity boost or crutch?",
            dates: "2026-01-03",
            description: "The debate of the decade: Are AI tools making us faster, or are they slowly eroding our fundamental problem-solving skills.",
            image: "",
            href: "/blogs/ai-productivity",
            links: [],
        },
    ],
} as const;
