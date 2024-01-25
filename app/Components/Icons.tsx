import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Icons = () => {
  return (
    <div className="flex justify-center sm:hidden items-end mt-[24px] pb-[55px]">
      <div>
        <h2 className="text-[10px] block w-[329px] text-left i">
          Seguinos en nuestras redes sociales
        </h2>
        <div className="flex mt-[18px]">
          {" "}
          <ImFacebook2 size="24" />{" "}
          <FaSquareInstagram size="21" className="mx-[32px]" />{" "}
          <IoLogoLinkedin size="23" />
          <div className="w-[123px] h-[41px] bg-white ml-[74px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
