export interface HeaderItem {
  name: string;
<<<<<<< HEAD
  profileImage: string;
  title: string;
  buttons: {
    text: string;
    url: string;
  }[];
=======
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
}

export interface SocialMediaItem {
  iconName: React.ReactNode;
  link: string;
}

export interface AboutItem {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export interface EducationItem {
  degree: string;
  year: string;
  img: string;
  institute: string;
  url: string;
}

export interface ExperienceItem {
  year: string;
  img: string;
  position: string | string[];
  companyName: string | string[];
  details: string;
  technologies?: string[];
  url: string;
}


export interface ProjectItem {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  postedDate: string;
  categories: string[];
  stacks: string[];
}

export interface BlogItem {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  postedDate: string;
  categories: string[];
}