export interface HeaderItem {
  name: string;
  mobiledesc: string;
  desktopdesc: string;
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

export interface SkillItem {
  name: string;
  skillPercent: string;
}

export interface PortfolioItem {
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