import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { MediumIcon } from "../../client/components/icons";
import {
  HeaderItem,
  SocialMediaItem,
  AboutItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  BlogItem,
} from "../../shared/types";

export const HeaderData: HeaderItem = {
  name: "Abraham Ahn",
  profileImage: "/assets/about/1.jpg",
  title: "Software Engineer & Music Producer",
  buttons: [
    {
      text: "Blendtune",
      url: "https://blendtune.com/sounds"
    },
    {
      text: "Youtube",
      url: "https://www.youtube.com/@blendtunemusic"
    },
    {
      text: "Soundcloud",
      url: "https://www.soundcloud.com/blendtune"
    },
    {
      text: "Personal Music",
      url: "https://soundcloud.com/meekahstars"
    }
  ]
};

export const SocialMediaData: SocialMediaItem[] = [
  {
    iconName: <FiGithub color="white" />,
    link: "https://www.github.com/abrahamahn",
  },
  {
    iconName: <FiLinkedin color="white" />,
    link: "https://www.linkedin.com/in/abrahamahn/",
  },
  {
    iconName: <FiTwitter width="24px" height="24px" color="white" />,
    link: "https://twitter.com/satmorningrain",
  },
  {
    iconName: <MediumIcon width="16px" height="16px" color="white" />,
    link: "https://medium.com/@abrahamahn",
  },
];

export const AboutData: AboutItem = {
  paragraph1: `In 2018, I was running an online music production company. During that time, while building custom websites for my music licensing business, I discovered a passion for coding and web development. Fast forward to today, I am developing <a href="https://blendtune.com/" target="_blank" style="color: white; text-decoration: none;" onMouseOver="this.style.color='#00ddff'" onMouseOut="this.style.color='white'">Blendtune</a>, a music licensing application.`,
  paragraph2: `My primary focus is on building a music streaming service and a social media platform. Currently, I am pursuing a Master's degree in Computer Science at <a href="https://www.yonsei.ac.kr/en_sc/" target="_blank" style="color: white; text-decoration: none;" onMouseOver="this.style.color='#00ddff'" onMouseOut="this.style.color='white'">Yonsei University</a> in South Korea. I am deeply interested in full-stack web development, while also actively researching and building machine learning and AI projects focused on audio and music.`,
  paragraph3: `Outside of my professional and academic pursuits, I am passionate about combat sports such as Muay Thai, boxing, and Brazilian Jiu-Jitsu, which help me stay physically and mentally sharp. As a long-time music producer, I also enjoy creating <a href="https://soundcloud.com/meekahstars" target="_blank" style="color: white; text-decoration: none;" onMouseOver="this.style.color='#00ddff'" onMouseOut="this.style.color='white'">pop music</a> in my free time.`,
};

export const EducationData: EducationItem[] = [
  {
    year: "AUG 2024 — PRESENT",
    img: "/assets/company/yonsei.png",
    institute: "Yonsei University",
    degree: "Master of Science - Computer Science",
    url: "https://www.yonsei.ac.kr/en_sc/",
  },
  {
    year: "AUG 2011 — MAY 2015",
    img: "/assets/company/usc.jpg",
    institute: "University of Southern California",
    degree: "Bachelor of Science - Music Industry",
    url: "https://www.usc.edu/",
  },
];

export const ExperienceData: ExperienceItem[] = [
  {
    year: "Nov 2023 — Present",
    img: "/assets/company/blendtune.jpg",
    position: "Founder",
    companyName: "Blendtune",
    details: `Music web studio and library with advanced keyword search, genre and tempo filters, key combinations, music player, sorting options, and ongoing backend development on Node.js and PostgreSQL.`,
    technologies: [
      "Javascript",
      "Typescript",
      "React js",
      "HTML/CSS",
      "Next.js",
      "Node.js",
      "React",
      "PostgreSQL",
    ],
    url: "https://blendtune.com/",
  },
  {
    year: "Aug 2024 — Dec 2024",
    img: "/assets/company/stadium-skills.jpg",
    position: "Research Intern",
    companyName: "Yonsei University",
    details: `Directed both front-end and back-end development, ensuring seamless coordination with another front-end engineer. Successfully completed MVP development within 2 months, delivering features such as user signup, authentication, dashboard, bio page, user directory, and video chat functionality.`,
    url: "https://mirlab.yonsei.ac.kr//",
  },
  {
    year: "Aug 2023 — Nov 2023",
    img: "/assets/company/stadium-skills.jpg",
    position: "Lead Backend Engineer",
    companyName: "Stadium Skills, Inc.",
    details: `Directed both front-end and back-end development, ensuring seamless coordination with another front-end engineer. Successfully completed MVP development within 2 months, delivering features such as user signup, authentication, dashboard, bio page, user directory, and video chat functionality.`,
    technologies: [
      "Javascript",
      "Typescript",
      "React js",
      "SCSS",
      "Next.js",
      "Node.js",
      "React",
      "Firebase",
      "NoSQL",
    ],
    url: "https://stadiumskills.com/",
  },
  {
    year: "Jan 2018 — Jun 2020",
    img: "/assets/company/cashrollie.jpg",
    position: "Founder",
    companyName: "Cashrollie",
    details: `Produced over 120 music catalogs with 15+ years of experience in music production. Built and managed a team of 8 remote contractors overseas, overseeing data mining and collection projects, with effective communication in English and Spanish. Developed complex responsive web applications and led digital marketing campaigns, including SEO, PPC, social media, email marketing (Mailchimp), sales funnels, and content marketing. These efforts resulted in 972,000+ YouTube streams and 195,000+ followers across platforms like Facebook, YouTube, TikTok, and Instagram. Automated production pipelines and repetitive tasks, reducing labor costs by approximately 25%. A track from our music catalog was featured in the final round of the Chinese national TV show "Rap of China.`,
    technologies: ["HTML/CSS", "WordPress", "PHP"],
    url: "https://www.youtube.com/watch?v=Ts-Pwl388pI",
  },
  {
    year: "Jan 2017 — Dec 2017",
    img: "/assets/company/nick.jpg",
    position: "Web Developer",
    companyName: "Nick Hadim Group of Companies",
    details: `Collaborated with executives and investors to develop a user-friendly website, conducting A/B testing and analyzing web analytics to enhance performance and conversion rates. Developed and executed digital marketing strategies, including SEO, PPC, social media marketing, Google Analytics, email marketing, and content marketing, resulting in a 360% increase in listing inquiries and a social media following of over 15,000.`,
    technologies: ["HTML/CSS", "WordPress", "PHP"],
    url: "https://nickhadim.com/",
  },
  {
    year: "2012 — 2017",
    img: "/assets/company/portal.jpg",
    position: [
      "Freelancer",
      "Music Publishing Consultant",
      "Music Producer & Sound Design Consultant",
      "TV Ads Music Producer",
      "Event Operations Coordinator",
      "Music Curator",
      "Product Design Analyst and Strategy Advisor",
    ],
    companyName: [
      "Portal Music Group",
      "Far East Movement",
      "K-Pop Artists and Rappers",
      "Google, KIA, Ensure, JW Marriott",
      "Ultra Music Korea, World DJ Festival",
      "Markus Persson",
      "Native Instruments",
    ],
    details: `Developed a back-end administration system for managing legal documents and contracts for clients, leveraging copyright expertise from USC's Music Industry program. Provided artist support, including merchandise production, music video coordination, and tour management, to enhance career opportunities. Mentored Korean hip-hop artists and K-Pop track makers in sound design. Produced music and sound effects for TV ads for clients. Coordinated short film productions, managing scheduling, budgeting, and logistics. Facilitated bilingual communication and managed backstage teams at major music festivals like Ultra Music Korea. Curated music projects for high-profile events. Conducted competitive analysis and provided strategic product design recommendations.`,
    url: "",
  },
  {
    year: "Jan 2016 — Oct 2016",
    img: "/assets/company/sunrun.jpg",
    position: "Sales Associate",
    companyName: "Sunrun",
    details: `Achieved over $100,000 in annual revenue through door-to-door sales of residential solar panels, converting more than 4,000 cold prospects per month into warm leads and consistently closing an average of 60 deals per month in the Los Angeles Metropolitan Area.`,
    url: "https://sunrun.com/",
  },
  {
    year: "Aug 2013 — Dec 2013",
    img: "/assets/company/axs.jpg",
    position: "Product and Marketing Intern",
    companyName: "AXS.com",
    details: `Streamlined ticket sales data by rectifying 3,700 entries with 0% error, ensuring precise sales reporting and accurate financial analysis. Improved conversion rates by 10% through A/B testing of the ExactTarget plugin, enhancing user experience, engagement, and revenue. Developed a data-driven algorithm utilizing social media data, improving sales forecast accuracy by 25% for better event planning and resource allocation. Enhanced the AXS iOS application, leading to improved performance, user experience, and customer satisfaction. Optimized email marketing campaigns for a 2 million subscriber base, increasing engagement, open rates, and retention. Boosted online visibility by conducting keyword research and creating a 500+ word SEO-optimized Wikipedia page, increasing organic traffic and brand visibility.`,
    url: "https://axs.com/",
  },
];

export const ProjectsData: ProjectItem[] = [
  {
    link: "https://github.com/abrahamahn/ml-project/",
    image: "assets/projects/ml-project.jpg",
    alt: "NLP Driven Music Playlist Generator",
    title: "NLP Driven Music Playlist Generator",
    postedDate: "2024-03-19",
    description:
      "An advanced music recommendation system that creates personalized playlists based on natural language descriptions. Unlike traditional keyword-based search, this system understands complex textual queries about mood, musical characteristics, situational context, and emotional journeys, then maps these descriptions to appropriate songs that form a coherent playlist.",
    categories: ["ML", "DL", "Research", "AI", "NLP"],
    stacks: ["Python", "PyTorch", "Hugging Face", "NLTK", "Transformers", "Spotify API"],
  },
  {
    link: "https://github.com/abrahamahn/abe-stack/",
    image: "assets/projects/abe-stack.jpg",
    alt: "ABE Stack",
    title: "Full-Stack Boilerplate",
    postedDate: "2024-03-19",
    description:
      "A comprehensive full-stack boilerplate optimized for social media and multimedia applications. Features include a robust backend architecture with layered design (repositories, services, API controllers), complete JWT-based authentication system with refresh tokens and role-based access control, RESTful API with Express featuring data validation and error handling, PostgreSQL database layer with migrations and transaction support, and background processing with task queue for async operations.",
    categories: ["Frontend", "Backend", "Web Dev"],
    stacks: ["React", "Typescript", "PostgreSQL", "Express.js", "Node.js", "C++"],
  },
  {
    link: "https://blendtune.com/",
    image: "assets/projects/blendtune.jpg",
    alt: "Blendtune",
    title: "Full-Stack Development",
    postedDate: "2024-02-06",
    description:
      "Blendtune Music Player is an online music store that provides a diverse catalog of music instrumentals for artists to browse, purchase, and download. Additionally, it features a mini player that allows users to preview the catalogs before making a selection.",
    categories: ["Frontend", "Backend", "Web Dev"],
    stacks: ["Next JS", "Typescript", "TailwindCSS", "PostgresQL"],
  },
  {
    link: "https://meekahmusic.com/",
    image: "assets/projects/artist-website.jpg",
    alt: "Artist Website",
    title: "Design & Music Production",
    postedDate: "2023-08-18",
    description:
      "Music artist website showcasing music, video, shop, videos, and various social media redirect links.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["Next JS", "Typescript", "Tailwind CSS"],
  },
];

export const BlogData: BlogItem[] = [
  {
    link: "https://medium.com/@abrahamahn/supabase-is-supa-awesome-here-is-why-you-should-use-it-for-your-databases-8f5dc942822b",
    image:
      "https://miro.medium.com/v2/resize:fit:750/format:webp/1*iAZEMDC1bQeXqKqylb75Yg.jpeg",
    alt: "Create-react-app Officially Dead. Here are 3 alternatives.",
    title: "Create-react-app Officially Dead. Here are 3 alternatives.",
    postedDate: "2023-10-02",
    description:
      "The death of Create React App (CRA) has sparked debates and discussions in the JavaScript community. Among the multitude of options, three have stood out prominently: Vite, Next.js, and Remix. Each of these frameworks brings unique attributes to the table, catering to diverse development needs and project requirements.",
    categories: ["Web Dev", "Ftonend"],
  },
  {
    link: "https://medium.com/@abrahamahn/supabase-is-supa-awesome-here-is-why-you-should-use-it-for-your-databases-8f5dc942822b",
    image:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/1*pnSzmFJRCJztS7tkSJXYuQ.jpeg",
    alt: "Supabase is Supa Awesome: Here is Why You Should Use It for Your Next Web Application",
    title:
      "Supabase is Supa Awesome: Here is Why You Should Use It for Your Next Web Application",
    postedDate: "2023-09-25",
    description:
      "Supabase is an open-source Firebase alternative that provides you with a robust set of tools for building modern web applications. Built atop PostgreSQL, it offers a real-time database, auto-generated APIs, and a flexible authentication system right out-of-the-box.",
    categories: ["Web Dev", "Backend", "SQL"],
  },
  {
    link: "https://medium.com/@abrahamahn/react-js-props-documentation-304f0f457d17",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*20g2eZHnPAN6I005KIEA0g.jpeg",
    alt: "React.js Props Documentation",
    title: "React.js Props Documentation",
    postedDate: "2023-06-26",
    description:
      "Props, short for properties, are a fundamental concept in React.js that allows you to pass data from a parent component to a child component. They enable you to customize and configure child components, making them reusable and flexible. This comprehensive documentation will cover everything you need to know about React.js props, including their usage, types, advanced topics, and best practices.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/introduction-to-webpack-a-beginners-guide-to-configuration-for-react-js-projects-de9d32d82a25",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wDQ9ttktgtqVgqs5xpGSGA.jpeg",
    alt: "Mastering Webpack: The Ultimate Guide for Optimizing React.js Projects",
    title:
      "Mastering Webpack: The Ultimate Guide for Optimizing React.js Projects",
    postedDate: "2023-06-18",
    description:
      "In the ever-evolving landscape of web development, efficiency is king. Webpack, the JavaScript module bundler extraordinaire, reigns supreme in this kingdom of code. It exists to take an intricate mesh of modules and their dependencies, transforming them into streamlined, optimized bundles that browsers can readily execute. Think of it as the DJ Khaled of web assets, not only bundling JavaScript modules, but CSS and images as modules as well. So, how does one commandeer this powerful tool for React.js projects? Let's dive into the world of Webpack.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/comprehensive-overview-of-artificial-intelligence-for-beginners-52679c43d7ab",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4IeYg5toFULnXBmlZBQO2w.jpeg",
    alt: "Headfirst Dive into the Whirly-gig of Artificial Intelligence for Newbies",
    title:
      "Headfirst Dive into the Whirly-gig of Artificial Intelligence for Newbies",
    postedDate: "2023-06-15",
    description:
      "Picture a world where artificial intelligence (AI) doesn't conjure images of rogue robots bent on human extinction. (Sorry, Schwarzenegger fans!) Today, AI is much more mundane but no less magical. From selecting your next Netflix binge to ordering groceries via voice command, AI is the silent partner in our daily routines. Yet, like a bad magic trick, the science behind AI can leave you more confused than amazed. Fear not, future software savants and curious cats alike, I've braved the murky depths of cyberspace to bring you a beginner's guide to AI, where we serve complicated tech stuff with a side of jargon-free wisdom.",
    categories: ["Artificial Intelligence"],
  },
  {
    link: "https://medium.com/@abrahamahn/the-carousel-revolution-pagination-made-simple-d489c0253445",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*nmVz2OZl7pWmK7xcyhPvZA.png",
    alt: "Step-by-Step Pagination Guide for React.js",
    title: "Step-by-Step Pagination Guide for React.js",
    postedDate: "2023-06-14",
    description:
      "BIn a world where the average human attention span falls somewhere around 8 seconds, engaging website visitors has become paramount. The interactive carousel, a visually appealing and dynamic way to showcase an array of content, has emerged as the savior. But, as it often happens with superheroes, there's a hitch. How do you prevent the carousel from transforming into a dizzying content tornado? Enter pagination, the Robin to our Batman. Welcome, web developers and CS students! Today, we'll delve into the heart of pagination and breathe new life into your carousel using React.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/building-a-carousel-view-blog-component-in-react-js-and-typescript-6a651e123e0a",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7l9Gsx41zEmwVns5g80lUw.jpeg",
    alt: "Building a Carousel View Portfolio Component in React.js and TypeScript",
    title:
      "Building a Carousel View Portfolio Component in React.js and TypeScript",
    postedDate: "2023-06-07",
    description:
      "React.js, a popular JavaScript library renowned for its efficient, reusable components, empowers developers to build intricate user interfaces without sacrificing performance. Combining this with TypeScript, a statically typed superset of JavaScript, we ensure type safety and improved maintainability, making our code more robust and easier to refactor. Today's example is a carousel view portfolio component: a visually appealing, dynamic way to showcase your projects. By following this guide, you'll not only walk away with a component to boost your portfolio's user experience but also gain a deeper understanding of React.js and TypeScript, thus refining your programming prowess.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/unraveling-the-magic-of-tailwind-css-a-comprehensive-guide-7ab87094207e",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*iGbcs-vJWFTFow9zwTfeXw.jpeg",
    alt: "Unraveling the Magic of Tailwind CSS: A Comprehensive Guide",
    title: "Unraveling the Magic of Tailwind CSS: A Comprehensive Guide",
    postedDate: "2023-06-05",
    description:
      "Welcome to the new era of CSS — the world of utility-first CSS frameworks where the nightmares of styling conflicts are things of the past. Here, you can experience unprecedented flexibility in creating your user interfaces without getting lost in the labyrinth of CSS lines. If that sounds compelling, it's time to introduce Tailwind CSS into your front-end toolbox. Tailwind CSS is a revolutionary utility-first CSS framework for rapidly constructing custom user interfaces. It offers a different approach from traditional CSS libraries, enabling developers to work directly on HTML, adding classes instead of writing separate CSS selector rules. This paradigm shift may seem unusual, but it brings with it a host of advantages, transforming your development experience into a smoother journey.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/bundling-multiple-components-into-a-single-index-js-or-index-ts-file-a-comprehensive-guide-83ee926ad3ae",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-upQDTVOuv2ozXTuAAXQ2w.jpeg",
    alt: "Concatenating Multiple Components into a Single Index.js or Index.ts File: A Comprehensive Guide",
    title:
      "Concatenating Multiple Components into a Single Index.js or Index.ts File: A Comprehensive Guide",
    postedDate: "2023-06-04",
    description:
      "It's common in the world of software development to be working with numerous components at a given time, which can make managing these components a bit tricky. One technique to streamline your workflow is to concatenate multiple components into a single index.js or index.ts file and then import it from another component. This article will guide you through this process in a step-by-step manner, with an emphasis on readability and simplicity.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/breathing-life-into-svg-icons-in-your-react-js-and-next-js-projects-b04458d91a7c",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dSJP_OSZIVsHBdOA8SjdGQ.jpeg",
    alt: "Breathing Life into SVG Icons in Your React.js and Next.js Projects",
    title:
      "Breathing Life into SVG Icons in Your React.js and Next.js Projects",
    postedDate: "2023-06-04",
    description:
      "Icons are a staple in the world of web development. They enhance the interactivity and visual appeal of user interfaces, bridging the gap between static and dynamic. Today, we delve into the implementation of SVG icons in React.js, Next.js, and TypeScript projects. This guide is perfect for entry-level software engineers keen to add more flavor to their user interfaces.",
    categories: ["Web Dev", "Frontend"],
  },
  {
    link: "https://medium.com/@abrahamahn/understanding-the-role-of-babel-46220bcfe772",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ci7Opy7BG-xsZH782UqrCQ.png",
    alt: "Understanding the Role of Babel",
    title: "Understanding the Role of Babel",
    postedDate: "2023-06-01",
    description:
      "As an aspiring web developer, you've likely spent hours meticulously constructing applications using modern JavaScript syntax, only to find it's incompatible with some browsers. This frustration is common in the world of web development. Thankfully, there's a tool that can help overcome this problem: Babel. (See full docs: https://babeljs.io/) Babel is an open-source JavaScript compiler that plays a central role in numerous web applications. It bridges the gap between cutting-edge JavaScript code and older browsers that struggle to understand it. Babel transforms ECMAScript 2015+ (ES6+) code into a backward-compatible version, a process often referred to as \"transpiling\". Babel can perform various tasks, including syntax transformation, filling missing features in your target environment through a third-party polyfill like core-js, conducting source code transformations (codemods), and more. It's important to note that Babel's role goes beyond syntax conversion — it also brings forward compatibility for new native APIs.",
    categories: ["Web Dev"],
  },
  {
    link: "https://medium.com/@abrahamahn/http-and-apis-the-dynamic-duo-of-the-web-45179e82575",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*8nNkpwQwfmS5j2TROWtX9g.jpeg",
    alt: "HTTP and APIs: The Dynamic Duo of the Web",
    title: "HTTP and APIs: The Dynamic Duo of the Web",
    postedDate: "2023-05-31",
    description:
      "Imagine this: you're casually surfing the web, exploring your favorite sites, streaming your favorite tunes, and perhaps even checking your bank account. It seems straightforward, right? However, there's a hidden dance behind the scenes, a harmonious interaction between your browser and the server. This dance is masterfully orchestrated by a dynamic duo: HTTP and APIs. If the internet is the great information superhighway, then HTTP and APIs are the traffic laws and intersections that ensure everything moves along smoothly.",
    categories: ["Web Dev", "Backend"],
  },
];
