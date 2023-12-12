import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Formmobile = () => {
  return (
    <form className="sm:hidden  mt-[78px]">
      <div className="flex flex-col items-start w-[268px]">
        <h1 className="text-[13px] mb-[10px]">Login</h1>
        <h3 className="text-[11px] font-medium mb-[14px]">
          Email address or user name
        </h3>

        <input
          type="email"
          className="w-[268px] h-[36] rounded-[13px] bg-[#121212] border-[1px] pl-[10px] "
        />

        <h2 className="text-[11px] font-medium mt-[21px] mb-[14px]">
          Password
        </h2>

        <input
          type="password"
          className="w-[268px] h-[36] rounded-[13px] bg-[#121212] border-[1px] pl-[10px] "
        />

        <h1 className="font-semibold ml-[33px] text-[13px] mt-[9px]">
          Remember me
        </h1>
      </div>
      <div className="flex mt-[27px]">
        {" "}
        <input className="w-[19px]" type="checkbox" />
        <h2 className="max-w-[246px] text-[11px] ml-[9px]">
          By continuing, you agree to the Terms of Use and Privacy Policy
        </h2>
      </div>
      <button
        type="submit"
        className="border-[0.5px] bg-[#FE7C45B0] rounded-[13px] w-[268px] h-[36px] text-[11px] font-semibold mb-[14px]"
      >
        Login
      </button>
      <h2 className="text-[11px] text-center font-medium mb-[85px] hover:cursor-pointer">
        Forget your password
      </h2>
      <div className="329px border-[0.5px] mb-[29px]"></div>
      <h2 className="text-[11px] font-medium text-center hover:cursor-pointer">
        Or Continue with
      </h2>
      <div className="flex items-center mt-[16px]">
        <FaFacebook size="32" className="mr-[40px]" />
        <FaApple size="42" className="mr-[40px]" />
        <FaGoogle size="23" className="mr-[40px]" />
        <FaTwitter size="28" className="mr-[40px]" />
      </div>
    </form>
  );
};

export default Formmobile;
