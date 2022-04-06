import React from "react";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
import Menu from "./Menu";

function Navbar() {
  return (
    <header>
      <div className="fixed hidden h-screen w-64 border-r-2 border-gray-500 bg-gradient-to-b from-slate-700 via-slate-700  to-slate-800 md:block">
        <Link href={"/"}>
          <div className="bg- mx-4 my-2 flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-violet-900 font-semibold ">
            Logo picture NFT Links
          </div>
        </Link>

        <hr className="mx-4 border-gray-500 " />

        <Menu />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
}

export default Navbar;
