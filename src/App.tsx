import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import InvestInStock from "./components/sections/InvestInStock";
import AboutSection from "./components/sections/AboutSection";
import MavenAdvantages from "./components/sections/MavenAdvantages";
import MarketNewsNewsletter from "./components/sections/MarketNewsNewsletter";
import MavenSupport from "./components/sections/MavenSupport";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="bg-gray-900">
        <HeroSection />
        <InvestInStock />
        <AboutSection />
        <MavenAdvantages />
        <MavenSupport />
        <MarketNewsNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
