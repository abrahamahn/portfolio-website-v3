import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import MediumIcon from "../components/icons/socialmedia/Medium";
import {
  HeaderItem,
  SocialMediaItem,
  AboutItem,
  SkillItem,
  PortfolioItem,
  BlogItem,
} from "./types";

export const HeaderData: HeaderItem = {
  name: "Abraham Ahn",
  mobiledesc: "Turning Ideas into Digital Reality.",
  desktopdesc: "",
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
    iconName: <MediumIcon width="24px" height="24px" color="white" />,
    link: "https://medium.com/@abrahamahn",
  },
];

export const AboutData: AboutItem = {
  title: "Hello! I'm Abe.",
  paragraph1: `I specialize in designing and building marvelous digital web experiences and letting people know about them.`,
  paragraph2: `Currently, I am building web application related with music, multimedia, and social media. I am also interested in generative artificial intelligence, using deep learning and machine learning techniques to develop original sound recordings for music creators. Please refer to resume for more information.`,
};

export const SkillData: SkillItem[] = [
  {
    name: "React.js",
    skillPercent: "85",
  },
  {
    name: "Next.js",
    skillPercent: "75",
  },
  {
    name: "C/C++",
    skillPercent: "75",
  },
  {
    name: "Typescript",
    skillPercent: "68",
  },
  {
    name: "Python",
    skillPercent: "70",
  },
  {
    name: "PostgreSQL",
    skillPercent: "85",
  },
];

export const PortfolioData: PortfolioItem[] = [
  {
    link: "https://blendtune.com/",
    image: "assets/portfolio/blendtune2.jpg",
    alt: "Blendtune",
    title: "Full-Stack Development",
    postedDate: "2024-02-06",
    description:
      "Blendtune is web studio and music library for artists and content creators.",
    categories: ["Frontend", "Backend", "Web Dev"],
    stacks: ["Next JS", "Typescript", "TailwindCSS", "PostgresQL"],
  },
  {
    link: "https://stadiumskills.com/",
    image: "assets/portfolio/stadium-skills.jpg",
    alt: "Stadium Skills",
    title: "Backend Development",
    postedDate: "2023-08-27",
    description:
      "Collegiate sports recruiting platform. Currently leading the front-end and back-end CRUD web application development, except the site design.",
    categories: ["Backend", "Web Dev"],
    stacks: ["NoSQL", "Firebase"],
  },
  {
    link: "https://github.com/abrahamahn/spreadsheet",
    image: "assets/portfolio/spreadsheet.jpg",
    alt: "Spreadsheet",
    title: "Full Stack Development",
    postedDate: "2023-08-27",
    description: "Fully functional Excel web application",
    categories: ["Web Dev", "Frontend", "Backend", "UX"],
    stacks: ["React JS", "Typescript", "CSS", "Flask", "Python"],
  },
  {
    link: "https://meekahmusic.com/",
    image: "assets/portfolio/artist-website.jpg",
    alt: "Portfolio Website",
    title: "Front-end Development",
    postedDate: "2023-08-18",
    description:
      "Music artist website showcasing music, video, shop, videos, and various social media redirect links.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["Next JS", "Typescript", "Tailwind CSS"],
  },
  {
    link: "https://abrahamahn.com/",
    image: "assets/portfolio/portfolio-website.jpg",
    alt: "Portfolio Website",
    title: "Full-Stack Development",
    postedDate: "2023-06-26",
    description:
      "Personal portfolio website for myself, showcasing portfolios, Medium blog posts, social media links, and contact forms with my brief information.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["React JS", "Typescript", "SCSS"],
  },
  {
    link: "https://auto-connect.netlify.app/",
    image: "assets/portfolio/auto-connect.jpg",
    alt: "Auto Connect",
    title: "Front-end Development",
    postedDate: "2023-05-24",
    description:
      "Auto Connect is a mobile-first web application that presents a carousel view of used cars for sale, allowing users to browse and filter through various categories.",
    categories: ["Web Dev", "UX", "Frontend"],
    stacks: ["React JS", "Typescript", "CSS", "Javascript"],
  },
  {
    link: "https://transaction-approvals.netlify.app/",
    image: "assets/portfolio/transaction-approval.jpg",
    alt: "Transaction Approvals",
    title: "Full-Stack Development",
    postedDate: "2023-05-08",
    description:
      "Transaction Approval is a mobile-first web application prototype designed to facilitate the approval process for transactions within internal teams of companies. It offers a range of filter options and includes buttons for approving or disapproving transactions.",
    categories: ["Web Dev", "UX", "Frontend"],
    stacks: [
      "React JS",
      "Typescript",
      "CSS",
      "Javascript",
      "Python",
      "Node.js",
    ],
  },
  {
    link: "https://blendtune.com/",
    image: "assets/portfolio/blendtune.jpg",
    alt: "Cashrollie",
    title: "Full-stack Development",
    postedDate: "2023-03-14",
    description:
      "Blendtune Music Player is an online music store that provides a diverse catalog of music instrumentals for artists to browse, purchase, and download. Additionally, it features a mini player that allows users to preview the catalogs before making a selection.",
    categories: ["Web Dev", "Frontend"],
    stacks: ["Next JS", "Typescript", "CSS", "Javascript"],
  },
  {
    link: "https://cashrollie.com/",
    image: "assets/portfolio/cashrollie.jpg",
    alt: "Cashrollie",
    title: "Business Development",
    postedDate: "2017-06-15",
    description:
      "Cashrollie is a comprehensive music production and publishing company catering to commercial music artists and content creators. As the person in charge, I handle various aspects of the company, including design, marketing, operations, and business campaigns. My responsibilities encompass a wide range of tasks to ensure the success and growth of Cashrollie in the music industry.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["CSS", "Javascript", "HTML", "Wordpress"],
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
      "In the ever-evolving landscape of web development, efficiency is king. Webpack, the JavaScript module bundler extraordinaire, reigns supreme in this kingdom of code. It exists to take an intricate mesh of modules and their dependencies, transforming them into streamlined, optimized bundles that browsers can readily execute. Think of it as the DJ Khaled of web assets, not only bundling JavaScript modules, but CSS and images as modules as well. So, how does one commandeer this powerful tool for React.js projects? Let`s dive into the world of Webpack.",
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
      "Picture a world where artificial intelligence (AI) doesn`t conjure images of rogue robots bent on human extinction. (Sorry, Schwarzenegger fans!) Today, AI is much more mundane but no less magical. From selecting your next Netflix binge to ordering groceries via voice command, AI is the silent partner in our daily routines. Yet, like a bad magic trick, the science behind AI can leave you more confused than amazed. Fear not, future software savants and curious cats alike, I`ve braved the murky depths of cyberspace to bring you a beginner`s guide to AI, where we serve complicated tech stuff with a side of jargon-free wisdom.",
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
      "BIn a world where the average human attention span falls somewhere around 8 seconds, engaging website visitors has become paramount. The interactive carousel, a visually appealing and dynamic way to showcase an array of content, has emerged as the savior. But, as it often happens with superheroes, there`s a hitch. How do you prevent the carousel from transforming into a dizzying content tornado? Enter pagination, the Robin to our Batman. Welcome, web developers and CS students! Today, we`ll delve into the heart of pagination and breathe new life into your carousel using React.",
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
      "React.js, a popular JavaScript library renowned for its efficient, reusable components, empowers developers to build intricate user interfaces without sacrificing performance. Combining this with TypeScript, a statically typed superset of JavaScript, we ensure type safety and improved maintainability, making our code more robust and easier to refactor. Today’s example is a carousel view portfolio component: a visually appealing, dynamic way to showcase your projects. By following this guide, you`ll not only walk away with a component to boost your portfolio’s user experience but also gain a deeper understanding of React.js and TypeScript, thus refining your programming prowess.",
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
      "Welcome to the new era of CSS — the world of utility-first CSS frameworks where the nightmares of styling conflicts are things of the past. Here, you can experience unprecedented flexibility in creating your user interfaces without getting lost in the labyrinth of CSS lines. If that sounds compelling, it`s time to introduce Tailwind CSS into your front-end toolbox. Tailwind CSS is a revolutionary utility-first CSS framework for rapidly constructing custom user interfaces. It offers a different approach from traditional CSS libraries, enabling developers to work directly on HTML, adding classes instead of writing separate CSS selector rules. This paradigm shift may seem unusual, but it brings with it a host of advantages, transforming your development experience into a smoother journey.",
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
      "It`s common in the world of software development to be working with numerous components at a given time, which can make managing these components a bit tricky. One technique to streamline your workflow is to concatenate multiple components into a single index.js or index.ts file and then import it from another component. This article will guide you through this process in a step-by-step manner, with an emphasis on readability and simplicity.",
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
      "As an aspiring web developer, you`ve likely spent hours meticulously constructing applications using modern JavaScript syntax, only to find it`s incompatible with some browsers. This frustration is common in the world of web development. Thankfully, there`s a tool that can help overcome this problem: Babel. (See full docs: https://babeljs.io/) Babel is an open-source JavaScript compiler that plays a central role in numerous web applications. It bridges the gap between cutting-edge JavaScript code and older browsers that struggle to understand it. Babel transforms ECMAScript 2015+ (ES6+) code into a backward-compatible version, a process often referred to as “transpiling.” Babel can perform various tasks, including syntax transformation, filling missing features in your target environment through a third-party polyfill like core-js, conducting source code transformations (codemods), and more. It`s important to note that Babel`s role goes beyond syntax conversion — it also brings forward compatibility for new native APIs.",
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
      "Imagine this: you`re casually surfing the web, exploring your favorite sites, streaming your favorite tunes, and perhaps even checking your bank account. It seems straightforward, right? However, there’s a hidden dance behind the scenes, a harmonious interaction between your browser and the server. This dance is masterfully orchestrated by a dynamic duo: HTTP and APIs. If the internet is the great information superhighway, then HTTP and APIs are the traffic laws and intersections that ensure everything moves along smoothly.",
    categories: ["Web Dev", "Backend"],
  },
];
