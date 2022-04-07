import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import NFTList from "../../components/NFTList";
import NFTListSkeleton from "../../components/NFTListSkeleton";

function NFT() {
  const [nfts, setNfts] = useState([]);

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
      title: "Fitness hulja",
      description: "Hulja počikan v fitnessu",
      image:
        "https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/275889148_2857791114519764_2731753575680007448_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RXTYKt_1f9sAX_S-S-N&_nc_ht=scontent.flju4-1.fna&oh=03_AVL6uevZkWkJSFLjFkksu7V2hgxNt8CtPek4XF1Qd7qibw&oe=62725839",
    },
    {
      title: "Hulja mrtu",
      description: "Mrtu hulja po prvi vaji",
      image:
        "https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277821257_1614200642297822_783332395683730326_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=KdCQk7J8ZRQAX8pYavu&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTbfT7UCZ4DlyGlN_pgAc9t7RVIUGOzJ8oSZ3PoRQw_Q&oe=6273C410",
    },
    {
      title: "Hulja dosadan",
      description: "Dosadan hulja k je biu na šihtu dans",
      image:
        "https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276967151_380814533915536_289768505635896743_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DhNqSlM7ysAAX-ijy9X&_nc_ht=scontent.flju4-1.fna&oh=03_AVLHJ0LXD0yFyWYtkdiC2QY8AFqiFxGNcf2NUU7__YYjSQ&oe=62754CD7",
    },
    {
      title: "Hulja veseu",
      description: "Veseli hulja, ker pije pivo",
      image:
        "https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276199310_314963527393704_1894867575042343784_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Uy_ifNoF-TgAX8koag6&_nc_ht=scontent.flju4-1.fna&oh=03_AVIhQYPthx2WXv9UUgTrZLi2hfD4_QxcO1M8JFoHHi_j8Q&oe=62743052",
    },
  ];

  useEffect(() => {
    setTimeout(function () {
      setNfts(dummyNFT);
    }, 1000);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col  justify-between space-y-3 bg-gray-100 px-8 py-6 md:flex-row md:space-y-0">
        <div>
          <h1 className="text-center text-lg font-semibold text-black md:text-xl lg:text-3xl">
            Your{" "}
            <span className="text-rose-400 underline underline-offset-2">
              NFT
            </span>{" "}
            Collection
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
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
        {nfts.length ? (
          <NFTList dummyNFT={nfts} />
        ) : (
          <NFTListSkeleton skeletonCount={10} />
        )}
      </div>
    </Layout>
  );
}

export default NFT;
