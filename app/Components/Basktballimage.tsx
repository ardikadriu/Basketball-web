import Image from "next/image";
import Basketball from "@/public/ball-img.png";

const Basktballimage = () => {
  return (
    <div className="">
      <div className="max-sm:block max-sm:mt-[55px] sm:mr-[77px] ">
        <Image
          className="max-sm:w-[150px]  max-sm:block "
          src={Basketball}
          width={383}
          height={377}
          alt="ball"
        />
      </div>
    </div>
  );
};

export default Basktballimage;
