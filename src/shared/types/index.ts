export interface HeaderItem {
  name: string;
  profileImage: string;
  title: string;
  buttons: {
    text: string;
    url: string;
  }[];
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
  school: string;
  details: string;
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