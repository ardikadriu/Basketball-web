import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center mt-[219px] text-white max-md:hidden">
      <div className="w-[1100px] border-2 border-solid "></div>
      <div className="flex w-full justify-center items-center mt-[45px]">
        <div className="">
          <h1 className="text-[22px]">Seguinos en nuestras redes sociales</h1>
          <div className="flex items-center pt-[18px]">
            <ImFacebook2 color="blue" size="27px" className="ml-[63px]" />
            <FaSquareInstagram color="blue" size="30" className="mx-[77px]" />
            <IoLogoLinkedin color="blue" size="23" className="bg-white " />
          </div>
        </div>
        <div className="border-2 border-solid border-black bg-white w-[219px] ml-[439px] h-[64px]">
          asdsad
        </div>
      </div>
    </footer>
  );
};

export default Footer;
