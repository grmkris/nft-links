import React from "react";
import {
  BeakerIcon,
  ChartPieIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const dummyMenu = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <ChartPieIcon className="mt-1 h-5 w-5" />,
    },
    {
      name: "NFT's",
      link: "/nft",
      icon: <ClipboardCheckIcon className="mt-1 h-5 w-5" />,
    },
    {
      name: "Mint NFT's",
      link: "/mint-nft",
      icon: <BeakerIcon className="mt-1 h-5 w-5" />,
    },
  ];
  return (
    <header className="fixed hidden h-screen w-64 border-r-2 border-gray-500 bg-gradient-to-b from-primary  to-slate-900 md:block">
      <Link href={"/"}>
        <div className="bg- mx-4 my-2 flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-violet-900 font-semibold ">
          Logo picture NFT Links
        </div>
      </Link>

      <hr className="mx-4 border-gray-500 " />

      <div className="space-y-4 p-3 text-gray-300">
        <div className="mt-2 space-y-14 px-4 ">
          <div className="space-y-4">
            <div className="flex justify-between">
              <h1 className="text-gray-400">Menu</h1>
            </div>
          </div>
        </div>

        {dummyMenu.map((item) => (
          <Link href={item.link} key={item.link}>
            <div
              className={
                router.pathname == item.link &&
                "rounded-lg bg-indigo-900 text-blue-500"
              }
            >
              <div
                className={`flex scale-105 cursor-pointer space-x-2 rounded-lg p-3 text-base transition-all duration-150 ease-in-out  hover:bg-indigo-900 hover:text-blue-500`}
              >
                {item.icon}
                <p className="">{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="drawer hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content ">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
