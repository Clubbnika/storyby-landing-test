import Hero from '@/features/storybywriter-landing/components/Hero/Hero';
import About from '@/features/storybywriter-landing/components/About/About';
import Authors from '@/features/storybywriter-landing/components/Authors/Authors';
import Reviews from '@/features/storybywriter-landing/components/Reviews/Reviews';
import { LandingConfig } from '../types';

export const LANDINGS_CONFIG: Record<string, LandingConfig> = {
  'writer-platform': {
    title: 'StorybyWriter',
    backgroundImage: '/bg.webp',
    sections: [
      { id: 'home', component: Hero },
      { id: 'about', component: About },
      { id: 'authors', component: Authors },
      { id: 'reviews', component: Reviews },
    ],
  },
  // ... 100+ лендінгів
};