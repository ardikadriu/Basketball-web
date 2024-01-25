import { FaWhatsapp } from "react-icons/fa";

const Paragraps = () => {
  return (
    <div className="text-white sm:mt-[61px] pr-[42px] shrink-0 ">
      <div className="max-sm:w-[329px] max-sm:flex max-sm:flex-col max-md:items-end max-sm:ml-[22px] max-w-[636px]">
        <h1 className=" max-sm:mb-[25px] max-sm:text-[13px] max-sm:text-right max-sm:w-[250px] text-[35px] text-right">
          Asoc. Civil de Preparadores Físicos de Basquetbol Argentino
        </h1>

        <p className="text-right text-[18px] font-medium max-sm:text-[10px] max-sm:text-right mt-[20px]">
          Buscamos promover el desarrollo profesional y la excelencia en la
          preparación física de nuestros atletas. Trabajamos para potenciar el
          rendimiento de los jugadores y contribuir al crecimiento de nuestro
          deporte nacional. ¡Unite y juntos llevemos el básquet argentino a otro
          nivel
        </p>
        <div className="max-sm:hidden flex justify-end">
          <FaWhatsapp size={63} />
        </div>
      </div>
    </div>
  );
};

export default Paragraps;
