import Header from '@/features/storybywriter-landing/components/Header/Header';
import Footer from '@/features/storybywriter-landing/components/Footer/Footer';
import '@/app/globals.css';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}