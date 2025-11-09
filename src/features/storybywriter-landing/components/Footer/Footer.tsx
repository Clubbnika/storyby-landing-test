import LegalLinks from './LegalLinks';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] py-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-white/60 mb-4">
          © {currentYear} StorybyWriter. All rights reserved.
        </p>

        <LegalLinks />
        <SocialLinks />
      </div>
    </footer>
  );
}