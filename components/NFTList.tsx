import React from "react";

interface NFTListProps {
  dummyNFT: string[];
}

function NFTList({dummyNFT}) {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center md:grid-cols-2  2xl:grid-cols-3">
      {dummyNFT.map((nft) => (
        <div
          key={nft.title}
          className="my-8 flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-slate-200 p-8 transition-all duration-300 hover:scale-110 md:w-64 xl:w-96"
        >
          <div>
            <h1 className="text-2xl font-bold text-black">{nft.title}</h1>
          </div>

          <div className="w-full rounded-lg bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400 p-2 sm:w-1/2 md:w-full">
            <img
              src={nft.image}
              className="w-76 h-72 rounded-lg object-cover"
              alt={nft.title}
            />
          </div>

          <div className="text-slate-800">{nft.description}</div>
        </div>
      ))}
    </div>
  );
}

export default NFTList;
