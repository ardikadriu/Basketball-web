import React from "react";

const Contactform = () => {
  return (
    <form className="w-[528px] bg-[#272626] flex flex-col items-center text-black ml-[128px] ">
      <h1 className="text-[30px] font-semibold mt-[34px] mb-[20px] text-white">
        Contactanos
      </h1>
      <div className="text-black shrink-0 ">
        <input
          className="outline-0 py-[10px] pl-[13px] rounded-[9px] shrink-0"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="outline-0 py-[10px] pl-[13px] rounded-[9px] ml-[34px]"
          type="text"
          placeholder="Apellido"
        />
      </div>
      <input
        className="w-[448px] py-[12px] rounded-[9px] pl-[12px] outline-none mt-[36px]"
        type="email"
        placeholder="Email"
      />
      <input
        className="w-[448px] py-[12px] rounded-[9px] pl-[12px] outline-none mt-[36px] text-black"
        type="tel"
        placeholder="Telefono"
      />

      <textarea
        className="w-[448px] py-[12px] rounded-[9px] pl-[12px] outline-none mt-[36px] h-[133px]"
        placeholder="Mensaje"
      />
      <button
        type="submit"
        className="text-white text-[22px] font-semibold w-[213px] h-[50px] bg-[#FE7C45] rounded-[9px] mt-[20px]"
      >
        Eniar
      </button>
    </form>
  );
};

export default Contactform;
