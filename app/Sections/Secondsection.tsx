import Image from "next/image";
import Logo from "@/public/Logo.png";
const Secondsetion = () => {
  return (
    <div className="flex flex-col items-center text-white md:mt-[178px] ] ">
      <div className="max-sm:mb-[30px] sm:mb-[30px]">
        <h1 className="text-[30px] font-semibold max-sm:text-[13px] max-sm:mt-[47px]">
          Asóciate
        </h1>
      </div>
      <div className="flex ">
        <div className="bg-white rounded-[9px] flex flex-col items-center mr-[20px] sm:mr-[40px]">
          <Image
            className="max-sm:w-[64px] max-sm:h-[69px]"
            src={Logo}
            width={312}
            height={292}
            alt="Logo"
          />
          <div className="text-black max-sm:px-[16px] pb-[19px]">
            <h2 className="max-sm:text-[8px]">Socio Nuevo</h2>
            <h1 className="max-sm:text-[10px]">
              <strong>$8.000</strong>
            </h1>
            <button className="w-[284px] max-sm:max-w-[62px] max-h-[40px] bg-[#FE7C45] max-sm:text-[8px] font-semibold text-white">
              Comprar ahora
            </button>
          </div>
        </div>
        <div className="bg-white rounded-[9px] flex flex-col items-center mr-[20px] sm:mr-[40px]">
          <Image
            className="max-sm:w-[64px] max-sm:h-[69px]"
            src={Logo}
            width={312}
            height={292}
            alt="Logo"
          />
          <div className="text-black max-sm:px-[16px] pb-[19px]">
            <h2 className="max-sm:text-[8px]">Socio Nuevo</h2>
            <h1 className="max-sm:text-[10px]">
              <strong>$8.000</strong>
            </h1>
            <button className="w-[284px] max-sm:max-w-[62px] max-h-[40px] bg-[#FE7C45] max-sm:text-[8px] font-semibold text-white">
              Comprar ahora
            </button>
          </div>
        </div>
        <div className="bg-white rounded-[9px] flex flex-col items-center">
          <Image
            className="max-sm:w-[64px] max-sm:h-[69px]"
            src={Logo}
            width={312}
            height={292}
            alt="Logo"
          />
          <div className="text-black max-sm:px-[16px] pb-[19px]">
            <h2 className="max-sm:text-[8px]">Socio Nuevo</h2>
            <h1 className="max-sm:text-[10px]">
              <strong>$8.000</strong>
            </h1>
            <button className="w-[284px] max-sm:max-w-[62px] max-h-[40px]  bg-[#FE7C45] max-sm:text-[8px] font-semibold text-white">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
      <div className="text-center md:hidden mt-[47px]">
        <h1 className="text-[10px] font-semibold mb-[14px]">Seminarios</h1>
        <h2 className="text-[8px] font-semibold mb-[14px]">
          Enterate acerca de nuestros seminarios
        </h2>
        <button className="w-[108px] h-[25px] bg-[#FE7C45] text-[10px] font-semibold rounded-[9px]">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Secondsetion;
