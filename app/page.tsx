import Automatizar from "../components/Automatizar";

import ChatButton from "../components/ChatButton";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Automatizar/>
      <Reviews />
      <Footer />
      <ChatButton/>
    </>
  );
}
