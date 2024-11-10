import logo from "../assets/logo.png";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <img
          src={logo}
          alt="Maven Trading Logo"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">Maven Trading</h1>
      </div>

      {/* Navigation Links */}
      <nav className="w-full md:w-auto mb-2 md:mb-0">
        <ul className="flex justify-center md:justify-start space-x-2 md:space-x-4 text-sm sm:text-lg lg:text-xl">
          {["Chart", "Markets", "News", "Community", "More"].map(
            (item, index) => (
              <li key={index}>
                <button
                  className="text-blue-400 hover:text-blue-300"
                  aria-label={item}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Buttons for Login and Start Free Trial */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button
          label="Login"
          variant="secondary"
          className="text-sm sm:text-lg"
        />
        <Button
          label="Start Free Trial"
          variant="primary"
          className="text-sm sm:text-lg"
        />
      </div>
    </header>
  );
};

export default Header;
