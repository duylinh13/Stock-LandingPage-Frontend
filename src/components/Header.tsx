import logo from "../assets/logo.png";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 md:py-8 px-4 md:px-10 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Maven Trading Logo"
          className="h-6 w-6 md:h-8 md:w-8"
        />
        <h1 className="text-xl md:text-2xl font-bold hidden sm:block">
          Maven Trading
        </h1>
      </div>

      <nav className="hidden sm:block ">
        <ul className="flex space-x-2 md:space-x-4 gap-2 md:gap-4">
          {["Chart", "Markets", "News", "Community", "More"].map(
            (item, index) => (
              <li key={index}>
                <button
                  className="text-blue-400 hover:text-blue-300 text-sm md:text-base"
                  aria-label={item}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="flex items-center space-x-2 md:space-x-4">
        <Button label="Login" variant="secondary" />
        <Button label="Start Free Trial" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
