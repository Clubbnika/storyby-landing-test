import { ComponentType } from 'react';

export type LandingSection = {
  id: string;
  component: ComponentType<unknown>;
};

export type LandingConfig = {
  title: string;
  description?: string;
  backgroundImage?: string;
  sections: LandingSection[];
};