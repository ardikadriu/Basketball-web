const Form = () => {
  return (
    <div>
      {" "}
      <form className=" md:hidden max-sm:mt-[53px] text-center ">
        <h1 className="md:hidden max-sm:mt-[53px] mb-[10px] ">Contactanos</h1>
        <div>
          <input
            className="w-[109px] h-[24px] rounded-[9px] text-black text-[10px] pl-[5px] font-medium"
            type="text"
            placeholder="Nombre"
          ></input>{" "}
          <input
            className="w-[109px] h-[24px] rounded-[9px] ml-[17px] text-black text-[10px] pl-[5px] font-medium"
            type="text"
            id="Apellido"
            name="Apellido"
            placeholder="Apellid"
          ></input>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="w-[232px] h-[24px] mt-[23px] mb-[23px] text-black pl-[5px] rounded-[9px] text-[10px]"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-[232px] h-[24px] mb-[23px] text-black pl-[5px] rounded-[9px] text-[10px]"
            type="tel"
            placeholder="Telefono"
          />

          <textarea
            className="w-[232px] h-[84px] flex-shrink-0 text-[10px] pl-[7px] pt-[5px] rounded-[9px] text-black"
            placeholder="Mensaje"
          />
        </div>
        <button
          className="w-[108px] h-[25px] bg-[#FE7C45]  text-[10px] font-semibold mt-[15px] rounded-[9px] "
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
