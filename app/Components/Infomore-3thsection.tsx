import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

const Infomore = () => {
  return (
    <div className="bg-[#FE7C45] flex-col items-center flex w-[438px] drop-shadow-[5px_5px_20px_rgba(254,254,254,0.38)] max-sm:w-[188px]  ">
      <h1 className=" max-sm:mb-[17px] mb-[32px] text-[30px] font-semibold max-sm:pt-[27px] max-sm:text-[12px] ">
        Info
      </h1>
      <div className="flex items-center text-[22px] max-sm:text-[10px] max-sm:block">
        <div>
          <div className="flex items-center mb-[24px] text-[10px]">
            {" "}
            <FiPhone className="max-sm:w-[23px]" size={36} />
            <div className="max-sm:ml-[4px] ml-[29px] ">
              <h1 className="max-sm:pb-[12px] pb-[37px] font-semibold">
                Telefono:{" "}
              </h1>
              <h2 className="font-medium"> +54 9 113345679</h2>
            </div>
          </div>
          <div className="flex items-center  mb-[24px]">
            <div>
              <TfiEmail className="max-sm:w-[28px] max-sm:h-[20px]" size={41} />
            </div>
            <div className=" max-sm:ml-[4px] ml-[29px]">
              <h1 className=" max-sm:pb-[12px] pb-[37px] font-semibold ">
                E-mail:
              </h1>
              <h2 className=" font-medium">Dirección:</h2>
            </div>
          </div>

          <div className="flex items-center mb-[24px]">
            {" "}
            <CiLocationOn
              className=" max-sm:w-[21px] max-sm:h-[26px]"
              size={39}
            />
            <div className="max-sm:ml-[4px] ml-[29px]">
              <h1 className="max-sm:pb-[12px] pb-[37px] font-semibold">
                Dirección
              </h1>
              <h2 className="font-medium">Calle cualquiera 1234</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomore;
