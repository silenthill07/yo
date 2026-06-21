export interface CaseStudy {
  id: string;
  title: string;
  targetContext: string;
  objective: string;
  attackVectors: string[];
  impact: string;
  remediationOutcome: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'offensive' | 'leadership' | 'infra';
  badgeColor?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  grade?: string;
  year?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authorName: string;
  publisher?: string;
  description?: string;
}

export interface DevelopedTool {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
}

