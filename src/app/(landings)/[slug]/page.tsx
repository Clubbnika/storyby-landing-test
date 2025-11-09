import { LANDINGS_CONFIG } from '@/app/config/landings';
import Layout from '@/app/(landings)/[slug]/layout';
import ClientLandingContent from '@/features/storybywriter-landing/components/ClientLandingContent';

export async function generateStaticParams() {
  return Object.keys(LANDINGS_CONFIG).map((slug) => ({ slug }));
}

export const revalidate = 3600;

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!LANDINGS_CONFIG[slug]) {
    return <div>404 — Landing not found</div>;
  }

  return (
      <ClientLandingContent slug={slug} />
  );
}