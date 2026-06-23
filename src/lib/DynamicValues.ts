import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";
import awsLogo from "../assets/aws-logo.png.png";
import vizvaLogo from "../assets/vizva-logo.png.png";

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Abhijeet Chavan",
        occupation: "Software Developer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: 'https://api.whatsapp.com/send?phone=917775025578',
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/abhijeet-chavan-69a251235/"
        },
        {
            name: "GitHub",
            link: "https://github.com/behonestabhi"
        },
    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Abhijeet Chavan",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Work Experience",
                    desc: "7+ months (Software Developer)",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: "English, Hindi",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "India",
                    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png"
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view / download",
                    link: "https://docs.google.com/document/d/12zl1DzzBC9jU4RWJ24fefGSvQ2hs_lVaniapQsqiAU8/edit?usp=sharing",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                },
            ]
        },
        {
            text: "Experiences",
            arr: [
                {
                    title: "Vizva Consultancy Services",
                    desc: "Software Developer · Jul 2025 – Present · Gurugram, India",
                    logo: awsLogo
                },
                {
                    title: "Internship Studio",
                    desc: "AWS Cloud Intern · Jul 2024 – Sept 2024 · Remote",
                    logo: vizvaLogo
                },
            ]
        },
        {
            text: "Education",
            arr: [
                {
                    title: "Sandip University",
                    desc: "B.Tech in Computer Science · Nashik, Maharashtra",
                    logo: "https://cdn-icons-png.flaticon.com/512/8074/8074800.png"
                },
                {
                    title: "S.I.C.E.S Jr. College",
                    desc: "Higher Secondary · Ambernath, Maharashtra",
                    logo: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
                },
            ]
        }
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Programming Languages",
            arr: [
                {
                    title: 'Java',
                    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'TypeScript',
                    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },
                {
                    title: 'Go (Golang)',
                    logo: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg',
                },
                {
                    title: 'SQL',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/ffeb437f-0d63-40e5-9bc3-041d5715d67e',
                },
            ]
        },
        {
            text: "Backend & APIs",
            arr: [
                {
                    title: 'Spring Boot',
                    logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
                },
                {
                    title: 'Node.js',
                    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
                },
                {
                    title: 'Express.js',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f38ec9f9-a921-4c96-8fb3-f2a598c1d0b4',
                },
                {
                    title: 'Fastify',
                    logo: 'https://avatars.githubusercontent.com/u/24939410?s=200&v=4',
                },
                {
                    title: 'FastAPI',
                    logo: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
                },
                {
                    title: 'Flask',
                    logo: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg',
                },
                {
                    title: 'REST APIs',
                    logo: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png',
                },
            ]
        },
        {
            text: "Frontend",
            arr: [
                {
                    title: 'React.js / Next.js',
                    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
                },
                {
                    title: 'Tailwind CSS',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz4NbsiYyG4QdDkxTzbMN5L8Tbd4j1fjxqQ&s',
                },
                {
                    title: 'HTML5',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS3',
                    logo: 'https://icon2.cleanpng.com/20180429/ukw/kisspng-cascading-style-sheets-html-web-page-5ae55eb45423e6.4422717315249814283446.jpg',
                },
                {
                    title: 'Redux',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/77226ad4-1e3a-46ac-b287-e41ee5b5fec7',
                },
            ]
        },
        {
            text: "Databases & Messaging",
            arr: [
                {
                    title: 'PostgreSQL',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/b0b84cdf-ac60-4f7b-b665-99ea7e8854da'
                },
                {
                    title: 'MySQL',
                    logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
                },
                {
                    title: 'Redis',
                    logo: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg'
                },
                {
                    title: 'Apache Kafka',
                    logo: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg'
                },
                {
                    title: 'DynamoDB',
                    logo: 'https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg'
                },
                {
                    title: 'pgvector',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/b0b84cdf-ac60-4f7b-b665-99ea7e8854da'
                },
            ]
        },
        {
            text: "AI / LLM",
            arr: [
                {
                    title: 'LangGraph',
                    logo: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
                },
                {
                    title: 'Groq AI',
                    logo: 'https://cdn-icons-png.flaticon.com/512/1329/1329360.png',
                },
                {
                    title: 'Tavily Search',
                    logo: 'https://cdn-icons-png.flaticon.com/512/3665/3665978.png',
                },
                {
                    title: 'RAG Pipelines',
                    logo: 'https://cdn-icons-png.flaticon.com/512/2593/2593565.png',
                },
                {
                    title: 'spaCy / NLP',
                    logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
                },
                {
                    title: 'Human-in-the-Loop',
                    logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
                },
            ]
        },
        {
            text: "Cloud & DevOps",
            arr: [
                {
                    title: 'AWS',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png',
                },
                {
                    title: 'Docker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png',
                },
                {
                    title: 'Kubernetes',
                    logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
                },
                {
                    title: 'Jenkins',
                    logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
                },
                {
                    title: 'GitHub Actions',
                    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
                },
                {
                    title: 'Terraform',
                    logo: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg',
                },
                {
                    title: 'HuggingFace',
                    logo: 'https://huggingface.co/front/assets/huggingface_logo.svg',
                },
            ]
        },
        {
            text: "Architecture & Practices",
            arr: [
                {
                    title: "Microservices",
                    logo: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png"
                },
                {
                    title: "Event-Driven Architecture",
                    logo: "https://cdn-icons-png.flaticon.com/512/906/906361.png"
                },
                {
                    title: "Clean Architecture",
                    logo: "https://cdn-icons-png.flaticon.com/512/1705/1705312.png"
                },
                {
                    title: "Circuit Breaker",
                    logo: "https://cdn-icons-png.flaticon.com/512/2620/2620484.png"
                },
                {
                    title: "CI/CD Pipelines",
                    logo: "https://cdn-icons-png.flaticon.com/512/3261/3261340.png"
                },
                {
                    title: "Agile / Scrum",
                    logo: "https://cdn-icons-png.flaticon.com/512/3281/3281342.png"
                },
                {
                    title: "Git",
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
                },
            ]
        },
    ]

    static projects: Array<ITitledListItem> = [
        {
            text: "My Projects",
            arr: [
                {
                    title: "Job Application Portal",
                    link: "https://github.com/behonestabhi/Job-Application-Portal",
                    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    desc: "Production-grade 7-microservice distributed job portal (Auth, User, Job, Payment, Utils, API Gateway, Log Admin) with Kafka async resume processing, Groq AI skills extraction, Redis rate limiting, Razorpay subscriptions & real-time Log Admin dashboard. Stack: Node.js · TypeScript · Fastify · Next.js 15 · PostgreSQL · Kafka · Redis · Docker. Demo: drive.google.com/file/d/1pwvEVlw-CeXoAlu7F29nj04G8bWVCyuG",
                },
                {
                    title: "Autonomous AI Research Newsletter Agent",
                    link: "https://github.com/behonestabhi/Autonomous-AI-Research-Newsletter-Agent",
                    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
                    desc: "7-node LangGraph state machine (plan → research → summarize → draft → critique → revise → send) using Groq LLaMA-3.3-70B + Tavily real-time search. Human-in-the-Loop via MemorySaver checkpoints, FastAPI SSE live trace streaming, deployed via Docker on HuggingFace Spaces. Stack: Python · LangGraph · FastAPI · Groq · Tavily · Docker. Live: behonestabhi-autonomous-ai-research-newsletter-agent.hf.space",
                },
                {
                    title: "EduZen — AI Educational Platform (Final Year Project)",
                    link: "https://github.com/behonestabhi/Final-year-project",
                    logo: "https://cdn-icons-png.flaticon.com/512/3976/3976625.png",
                    desc: "Full-stack interactive learning platform for children aged 6–12 featuring gamified multi-subject quizzes, an AI Knowledge Buddy chatbot, badge/reward system, and mobile-first responsive design. Deployed live on HuggingFace Spaces. Stack: Python · Flask · HTML5 · CSS3 · JavaScript. Live: behonestabhi-eduzenfinalyearproject.hf.space",
                },
            ]
        }
    ];

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=917775025578',
                    desc: "+91 7775025578"
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'jeetrc52@gmail.com',
                    link: 'mailto:jeetrc52@gmail.com?subject=Regarding Opportunity&body=Hi Abhijeet,'
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/behonestabhi'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/abhijeet-chavan-69a251235/'
                },
            ]
        },
    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}
