import Vector4 from "../../assets/Vector4.png";
import Vector5 from "../../assets/Vector5.png";
import Vector6 from "../../assets/Vector6.png";
import Vector7 from "../../assets/Vector7.png";
import Vector8 from "../../assets/Vector8.png";
import Vector9 from "../../assets/Vector9.png";
import Vector10 from "../../assets/Vector10.png";

const InvestInStock = () => {
  return (
    <div className="text-center">
      <div>
        <p className="font-bold text-blue-800 mb-6 mt-4">
          Invest in their stock and be part of the business
        </p>
      </div>
      <div className="overflow-hidden mt-4">
        <ul className="flex justify-center space-x-4 mt-4 gap-6 animate-scroll">
          <li>
            <img src={Vector4} alt="Vector 4" />
          </li>
          <li>
            <img src={Vector5} alt="Vector 5" />
          </li>
          <li>
            <img src={Vector6} alt="Vector 6" />
          </li>
          <li>
            <img src={Vector7} alt="Vector 7" />
          </li>
          <li>
            <img src={Vector8} alt="Vector 8" />
          </li>
          <li>
            <img src={Vector9} alt="Vector 9" />
          </li>
          <li>
            <img src={Vector10} alt="Vector 10" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InvestInStock;
