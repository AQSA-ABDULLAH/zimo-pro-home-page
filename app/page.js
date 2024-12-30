import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";
import NewsletterSection from "@/components/newsletter/NewsLetter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <img src="/assets/Line 93.png" alt="line" className="mt-12 mb-10 px-[30em] opacity-50 w-screen" />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
