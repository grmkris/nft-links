import {
  BeakerIcon,
  ChartPieIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CogIcon, UserGroupIcon } from "@heroicons/react/solid";

function Menu() {
  const router = useRouter();
  const dummyMenu = [
    {
      name: "Dashboard",
      link: "/",
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
    {
      name: "Groups",
      link: "/groups",
      icon: <UserGroupIcon className="mt-1 h-5 w-5" />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <CogIcon className="mt-1 h-5 w-5" />,
    },
  ];

  return (
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
              router.pathname == item.link
                ? "border-r-4 border-indigo-500 text-indigo-500 underline decoration-2 underline-offset-4"
                : ""
            }
          >
            <div
              className={`flex cursor-pointer space-x-2  border-indigo-500 p-3 text-base decoration-2 underline-offset-4  transition-all duration-150 ease-in-out hover:border-r-4 hover:text-indigo-500 hover:underline`}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
