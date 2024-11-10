import Vector from "../../assets/Vector.png";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="text-center mt-8 sm:mt-14 px-4 sm:px-0">
      <p className="text-[32px] font-bold text-blue-800">One platform</p>
      <p className="text-[32px] font-bold mb-4 sm:mb-6">all things Stocks</p>
      <p className="text-[20px] text-gray-600 leading-relaxed sm:leading-normal">
        Step into the world of trading excellence and seize every opportunity
        with our advanced
        <br className="hidden sm:block" /> platform, expert guidance, and
        strategic insights for unrivaled financial success.
      </p>

      {/* Icon List */}
      <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-4 text-[20px] text-gray-500">
        <li className="flex items-center gap-2">
          <img
            src={Vector}
            alt="Fast Trading Icon"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span>Fast Trading</span>
        </li>
        <li className="flex items-center gap-2">
          <img
            src={Vector2}
            alt="Secure & Reliable Icon"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span>Secure & Reliable</span>
        </li>
        <li className="flex items-center gap-2">
          <img
            src={Vector3}
            alt="Market Updates Icon"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span>Continuous Market Updates</span>
        </li>
      </ul>

      {/* Button */}
      <div className="my-6 sm:my-8">
        <Button
          label="Start Trading Now!"
          variant="primary"
          className="shadow-lg shadow-blue-500/50 transform translate-y-1"
        />
      </div>
    </div>
  );
};

export default HeroSection;
