import BTC from "../../assets/BTC.png";
import Button from "../Button";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
      {/* Text Section */}
      <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-10 mb-6 md:mb-0">
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-800 font-bold">
          One platform
        </p>
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
          all things Stocks
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-950 mb-3 sm:mb-5">
          Smart Investation
        </h3>
        <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">
          Invest Your Funds with Us and Enjoy Astonishing Returns
        </p>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
          Make the most of your investment in the world of capital markets by
          taking <br className="hidden sm:block" />
          advantage of Maven's many features and conveniences.
        </p>
        <div className="flex space-x-2 sm:space-x-3">
          <div className="my-6 sm:my-8">
            <Button
              label="Get Started"
              variant="primary"
              className="shadow-lg shadow-blue-500/50 transform translate-y-1"
            />
          </div>
          <button className="text-blue-700 font-bold py-2 px-4 rounded hover:underline transition duration-300 text-sm sm:text-base lg:text-lg">
            See How it Works
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={BTC}
          alt="Bitcoin logo"
          className="w-48 sm:w-64 md:w-80 lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default AboutSection;
