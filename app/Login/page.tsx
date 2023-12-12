import Formmobile from "../Components/Formmobile";
import Largerscreen from "../Components/Login-largerscreen";
import Loginmobile from "../Components/Login-mobile";

const page = () => {
  return (
    <div className=" flex-col text-white items-center flex">
      <Largerscreen />
      <Loginmobile />
      <Formmobile />
    </div>
  );
};

export default page;
