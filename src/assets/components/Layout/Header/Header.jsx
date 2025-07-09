// import Navbar from "./Navbar";
// import HeaderButton from "./HeaderButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "/public/assets/images/Logo.svg";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };
  const NavbarItem = [
    { id: 1, name: "home", src: "" },
    { id: 2, name: "about", src: "" },
    { id: 3, name: "how to works", src: "" },
    { id: 4, name: "services", src: "" },
  ];
  return (
    <header className="flex items-center justify-between mx-4 md:mx-12 py-2 z-10">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="hidden md:flex items-center justify-between gap-12 bg-white/50 p-6 rounded-xl backdrop-blur-2xl">
        <ul className="flex items-center gap-5">
          {NavbarItem.map((Nitem) => {
            return (
              <li key={Nitem.id}>
                <Link to={Nitem.src}>{Nitem.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* <Navbar />
        <HeaderButton /> */}
      </div>
      <div>
        <Link to="" className="text-sm text-[">
          Sign In
        </Link>
        <Link to="">
          Sign up
        </Link>
      </div>
      {/*  */}
      <div className="md:hidden text-white cursor-pointer">
        <Icon icon="gg:menu" width="22" height="22" />
      </div>
      {/* {isMenuOpen && (
        <div className={`absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-95 flex flex-col justify-between p-12 z-10`}>
          <div className="flex items-center justify-between">
            <HeaderLogo />
            <button onClick={closeMenu} className="text-white">
              <Icon icon="carbon:close-outline" width="24" height="24" />
            </button>
          </div>
          <Navbar closeMenu={closeMenu} /> 
          <HeaderButton />
        </div>
      )} */}
    </header>
  );
}
