import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
