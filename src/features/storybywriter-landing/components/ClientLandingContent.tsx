'use client';

import { LANDINGS_CONFIG } from '@/app/config/landings';

export default function ClientLandingContent({ slug }: { slug: string }) {
  const config = LANDINGS_CONFIG[slug];

  if (!config) return <div>404 — Landing not found</div>;

  return (
    <div className="relative min-h-screen">
      {config.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
          style={{ backgroundImage: `url('${config.backgroundImage}')` }}
        />
      )}

      <div className="relative z-10">
        {config.sections.map(({ id, component: Section }) => (
          <section key={id} id={id}>
            <Section />
          </section>
        ))}
      </div>
    </div>
  );
}
