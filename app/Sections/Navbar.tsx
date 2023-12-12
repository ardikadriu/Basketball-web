"use client";
import { BsCart4, BsX } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-sm:flex max-sm:justify-center justify-center w-full flex  text-white  sm:mb-[61px] max-sm:items-center max-sm:py-[31px] max-sm:px-[34px] pt-[37px] ">
      <div className="max-sm:w-[329px] w-[1096px] justify-between flex max-sm:justify-between max-sm:items-center ">
        <div>
          <h1 className="text-[30px] max-sm:text-[20px] font-bold">ACPFBA</h1>
        </div>
        <div className="flex text-[18] font-semibold items-center max-sm:hidden  ">
          <Link href={"/"}>
            <h2>Inicio</h2>
          </Link>
          <Link href={"Contact"}>
            <h2 className="ml-[18px]">Contacto</h2>
          </Link>
          <h2 className="ml-[18px]">Tienda</h2>
          <Link href="Login">
            <button className="w-[99px] h-[31px] bg-[#FE7C45] text-black ml-[18px] mr-[18px] ">
              Login{" "}
            </button>
          </Link>
          <BsCart4 size={45} />
        </div>
      </div>
      <div
        onClick={handleNav}
        className="flex md:hidden items-center hover:cursor-pointer"
      >
        <AiOutlineMenu className="mr-[8px]" size={21} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#121212] p-10 ease-in duration-500 "
            : "fixed left-[-100%] top-0 p-10 "
        }
      >
        <div
          onClick={handleNav}
          className="flex w-full justify-end hover:cursor-pointer"
        >
          <AiOutlineClose color="white" />{" "}
        </div>

        <div className="flex-col py-4 text-white text-left">
          <ul>
            <Link href={"/"} className="p-">
              <li onClick={() => setMenuOpen(false)} className="mb-[40px]">
                Inicio
              </li>
            </Link>
            <Link href={"Contact"}>
              <li onClick={() => setMenuOpen(false)} className="mb-[40px]">
                Contacto
              </li>
            </Link>
            <Link href={""}>
              <li onClick={() => setMenuOpen(false)} className="mb-[40px]">
                {" "}
                Tienda
              </li>
            </Link>
            <Link href={"Login"} className="mb-[40px]">
              <li
                onClick={() => setMenuOpen(false)}
                className="w-[99px] text-black h-[31px] bg-[#FE7C45] flex justify-center items-center font-semibold"
              >
                Login
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="sm:hidden items-center ">
        <BsCart4 size="23" />
      </div>
    </nav>
  );
};

export default Navbar;
