import Basktballimage from "../Components/Basktballimage";
import { LiaWhatsapp } from "react-icons/lia";
import Paragraps from "../Components/Paragraps";

const Firstsection = () => {
  return (
    <div
      className=" flex w-full justify-center max-sm:flex-col max-sm:items-center "
      id="Start"
    >
      <Basktballimage />
      <Paragraps />
    </div>
  );
};

export default Firstsection;
