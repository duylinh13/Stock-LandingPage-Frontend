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
      {" "}
      {/* Đảm bảo nền tối và chữ sáng */}
      <Header />
      <main className="bg-gray-900">
        {" "}
        {/* Đảm bảo phần chính cũng có nền tối */}
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
