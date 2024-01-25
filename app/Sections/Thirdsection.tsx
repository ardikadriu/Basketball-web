import Infomore from "../Components/Infomore-3thsection";
import Form from "../Components/Form";
import Icons from "../Components/Icons";

const Thirdsection = () => {
  return (
    <div className=" flex max-sm:flex-col w-full  text-white justify-center max-sm:items-center items-center mt-[253px] max-sm:mt-[149px]">
      <div className="  text-center mr-[181px] max-sm:hidden">
        <h1 className="font-semibold text-[30px]">Seminarios</h1>
        <h2 className="text-[22px] font-semibold">
          Enterate acerca de nuestros seminarios
        </h2>
        <button className="w-[213px] h-[50px] flex-shrink-0 bg-[#FE7C45] text-[22px] font-semibold mt-[38px] rounded-[9px] ">
          Ver más
        </button>
      </div>

      <Infomore />
      <Form />
      <div className="sm:hidden w-[329px] border-2 border-solid mt-[70px]"></div>
      <Icons />
    </div>
  );
};

export default Thirdsection;
