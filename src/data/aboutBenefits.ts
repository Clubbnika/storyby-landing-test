import { PenTool, DollarSign, BookOpen, Globe } from 'lucide-react';
import { Benefit } from '@/features/storybywriter-landing/types';

export const ABOUT_BENEFITS: Benefit[] = [
  {
    title: 'Full Creative Control',
    text: 'On StorybyWriter, you retain complete control over your works — defining characters, plot, and world without restrictions or editorial demands.',
    Icon: PenTool,
  },
  {
    title: 'Global Audience',
    text: 'StorybyWriter lets you publish your works and receive feedback from readers worldwide, attracting a global audience.',
    Icon: Globe,
  },
  {
    title: 'Generous Bonuses & Royalties',
    text: 'Authors receive competitive royalties, bonuses, and opportunities for book adaptations, helping you earn and grow your stories.',
    Icon: DollarSign,
  },
  {
    title: 'Resources for Growth',
    text: 'The platform provides educational resources and helpful tips to improve your skills and advance professionally.',
    Icon: BookOpen,
  },
];