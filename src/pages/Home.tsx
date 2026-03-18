import Hero from "../components/ui/hero";
import Features from "../components/ui/features";
import Connections from "../components/ui/connections";
import DownloadBanner from "../components/ui/downloadBanner";
import MobileInterface from "../components/ui/mobileInterface";
import Testimonials from "../components/ui/testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <MobileInterface />
      <Connections />
      <Testimonials />
      <DownloadBanner />
    </main>
  );
};

export default Home;
