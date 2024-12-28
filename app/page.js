import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";
import NewsletterSection from "@/components/newsletter/NewsLetter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
