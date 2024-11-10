import Frame40254 from "../../assets/Frame 40254.png";
import Frame40255 from "../../assets/Frame 40255.png";
import Frame40256 from "../../assets/Frame 40256.png";
import Frame40256_4 from "../../assets/Frame 40257.png";

const MavenAdvantages = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center bg-gray-900">
      {/* Text Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mb-8">
        <h2 className="text-[32px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          Additional advantages from{" "}
          <span className="text-blue-800">Maven</span>
        </h2>
        <p className="text-gray-300 text-[20px] sm:text-base md:text-lg lg:text-xl">
          At Tradiant, you will benefit from us, such as many conveniences in
          transactions, user-friendly transparency, and many others.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-6">
        <img
          src={Frame40254}
          alt="Frame 40254"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-[260px] xl:h-[300px] object-contain"
        />
        <img
          src={Frame40255}
          alt="Frame 40255"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-[260px] xl:h-[300px] object-contain"
        />
        <img
          src={Frame40256}
          alt="Frame 40256"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-[260px] xl:h-[300px] object-contain"
        />
        <img
          src={Frame40256_4}
          alt="Frame 40257"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-[260px] xl:h-[300px] object-contain"
        />
      </div>
    </div>
  );
};

export default MavenAdvantages;
