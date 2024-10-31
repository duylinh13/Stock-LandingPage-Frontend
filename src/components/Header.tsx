import logo from "../assets/logo.png"; // Import logo từ thư mục assets
import Button from "../components/Button"; // Import component Button

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4 md:py-8 px-4 md:px-10 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Maven Trading Logo"
          className="h-6 w-6 md:h-8 md:w-8"
        />
        <h1 className="text-xl md:text-2xl font-bold">Maven Trading</h1>
      </div>

      <nav>
        <ul className="flex space-x-2 md:space-x-4 gap-2 md:gap-4">
          <li>
            <button className="text-blue-400 hover:text-blue-300 text-sm md:text-base">
              Chart
            </button>
          </li>
          <li>
            <button className="text-blue-400 hover:text-blue-300 text-sm md:text-base">
              Markets
            </button>
          </li>
          <li>
            <button className="text-blue-400 hover:text-blue-300 text-sm md:text-base">
              News
            </button>
          </li>
          <li>
            <button className="text-blue-400 hover:text-blue-300 text-sm md:text-base">
              Community
            </button>
          </li>
          <li>
            <button className="text-blue-400 hover:text-blue-300 text-sm md:text-base">
              More
            </button>
          </li>
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
