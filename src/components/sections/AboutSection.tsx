import Button from "../Button";

const AboutSection = () => {
  return (
    <div className=" py-16 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-2xl sm:text-4xl text-blue-800 font-bold">
          One platform
        </p>
        <p className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
          All Things Stocks Smart Investment
        </p>

        <p className="text-gray-600 text-lg">
          Invest Your Funds with Us and Enjoy Astonishing Returns
        </p>
        <p className="text-gray-500 text-md">
          Make the most of your investment in the world of capital markets by
          taking <br className="hidden md:inline" />
          advantage of Maven's many features and conveniences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <div>
            <Button
              label="Get Started"
              variant="primary"
              className="px-6 py-2 rounded-full"
            />
          </div>
          <button className="text-blue-600 font-medium hover:underline">
            See How it Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
