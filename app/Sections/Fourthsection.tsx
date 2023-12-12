import Image from "next/image";
import Basketplayer from "@/public/basket-player.png";
import Contactform from "../Components/Contactform-4thsection";

const Fourthsection = () => {
  return (
    <div className="flex w-full justify-center text-white max-md:hidden mt-[220px]">
      <Image src={Basketplayer} width={465} height={605} alt="Player" />
      <Contactform />
    </div>
  );
};

export default Fourthsection;
