import React from "react";
import Layout from "../../components/layout/layout";
import NFTList from "../../components/NFTList";

function NFT() {
  const randomWalletAddress =
    "7906687914988522a9dd32b6b1bd9461115b340c74195facf36bbd083a83c981";

  const dummyNFT = [
    {
      title: "Opica 1",
      description: "Collection of best apes in the world yuhu",
      image:
        "https://media.smallbiztrends.com/2022/02/best-selling-nfts-this-week.png",
    },
    {
      title: "Bullrun",
      description: "Bullrun 3,2,1 go!",
      image: "https://miro.medium.com/max/1000/1*2OLWtgu-WqcvaukYwIGpxw.png",
    },
    {
      title: "Random NFT",
      description: "Collection of random NFT's",
      image: "https://miro.medium.com/max/1024/1*RlMqU4P2XiOfw2_V1lNJEw.png",
    },
    {
      title: "Patike",
      description: "Patike NFT",
      image: "https://blockworks.co/wp-content/uploads/2021/11/nike.jpeg",
    },
    {
      title: "Patike2",
      description: "Patike NFT",
      image: "https://blockworks.co/wp-content/uploads/2021/11/nike.jpeg",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-between bg-gray-100 px-8 py-6">
        <div>
          <h1 className="text-3xl font-semibold text-black">
            Your{" "}
            <span className="text-rose-400 underline underline-offset-2">
              NFT
            </span>{" "}
            Collection
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <p className="text-center text-base text-indigo-700">
              You are logged in with wallet{" "}
              {randomWalletAddress.substring(0, 5)}
              ...{randomWalletAddress.substring(randomWalletAddress.length - 5)}
            </p>
          </div>

          <div>
            <button className="rounded-full bg-indigo-500 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:text-black">
              {randomWalletAddress ? "Sign out" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 " />

      <div className="bg-white p-5">
        <NFTList dummyNFT={dummyNFT} />
      </div>
    </Layout>
  );
}

export default NFT;
