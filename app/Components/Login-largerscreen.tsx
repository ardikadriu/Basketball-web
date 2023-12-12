import Image from "next/image";
import Basket from "@/public/box.png";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Largerscreen = () => {
  return (
    <div className="flex my-[70px] max-md:hidden">
      <form className="bg-[#272626] flex-col items-center px-[66px]  ">
        <h1 className="text-center text-[30px] font-semibold mb-[35px] mt-[41px]">
          Log in
        </h1>{" "}
        <h2 className="text-[22px] font-medium mb-[16px]">
          E-mail address or user name
        </h2>
        <input
          className="w-[424px] h-[40px] border-2 pl-2  rounded-[13px] bg-[#272626]"
          type="email"
        />
        <h2 className="text-[22px] font-medium my-[16px]">Password</h2>
        <input
          className="w-[424px] h-[40px] border-2 pl-2  rounded-[13px] bg-[#272626] mb-[18px]"
          type="password"
        />
        <div className="flex  ">
          <input className="w-[27px] mr-[13px]" type="checkbox" />
          <h2 className="text-[20px] font-semibold">Remember me</h2>
        </div>
        <div className="flex mt-[21px] mb-[17px]">
          <input className="w-[27px] mr-[16px]" type="checkbox" />
          <h2 className="max-w-[394px] text-[20px] font-semibold">
            By continuing, you agree to the Terms of Use and Privacy Policy
          </h2>
        </div>
        <div className="flex flex-col items-center ">
          <button className="w-[268px] h-[36px] bg-[#FE7C45B0] rounded-[13px] border-[0.5px] border-solid mb-[20px]  ">
            Log in
          </button>
          <h1 className="mb-[63px] text-[18px] font-medium hover:cursor-pointer">
            Forgot ur passwords
          </h1>
          <div className="w-[359px] border-[1px] mb-[27.5px] "></div>
          <h2>Or connect with </h2>
          <div className="flex items-center mt-[16px]">
            <FaFacebook size="32" className="mr-[40px]" />
            <FaApple size="42" className="mr-[40px]" />
            <FaGoogle size="23" className="mr-[40px]" />
            <FaTwitter size="28" className="mr-[40px]" />
          </div>
        </div>
      </form>
      <Image src={Basket} width={574} height={704} alt="basketball" />
    </div>
  );
};

export default Largerscreen;
