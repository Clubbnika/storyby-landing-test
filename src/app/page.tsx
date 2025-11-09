import { redirect } from 'next/navigation';
import { LANDINGS_CONFIG } from './config/landings';

export default function Home() {
  const firstSlug = Object.keys(LANDINGS_CONFIG)[0] || 'writer';
  redirect(`/landings/${firstSlug}`);
}