export type Theme = 'light' | 'dark';

export interface NavigationItem {
  id: string;
  label: string;
  href: `#${string}`;
}

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  bio: string;
  avatarUrl?: string;
  avatarAlt?: string;
  email: string;
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  imageAlt?: string;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  name: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon?: string;
  newTab?: boolean;
  rel?: 'noreferrer' | 'noopener noreferrer';
}

export interface ContactDetails {
  email: string;
  location?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>> & {
  form?: string;
};

interface ContactFormStateBase {
  values: ContactFormValues;
  errors: ContactFormErrors;
}

export type ContactFormState =
  | (ContactFormStateBase & { status: 'idle' })
  | (ContactFormStateBase & { status: 'invalid' })
  | (ContactFormStateBase & { status: 'submitting' })
  | (ContactFormStateBase & { status: 'success'; message: string })
  | (ContactFormStateBase & { status: 'error'; message: string });