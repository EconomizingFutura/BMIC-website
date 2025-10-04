// Global TypeScript types and interfaces

export interface NavigationProps {
  onNavigateToAbout?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToPharma?: () => void;
  onNavigateToProjects?: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToContact?: () => void;
}

export interface PageProps {
  onBackToHome: () => void;
}

export type PageType = 'home' | 'about' | 'services' | 'pharma' | 'projects' | 'blog' | 'contact';

export interface Project {
  id: number;
  title: string;
  type: string;
  location: string;
  client: string;
  description: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
  status: 'completed' | 'ongoing';
  tags: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
}