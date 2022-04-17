import React from "react";

function Claim() {

  const dummyNFT = [
    {
      nftTitle: 'Opica 1',
      nftDescription: 'Collection of best apes in the world yuhu',
      nftImage: { url: 'https://media.smallbiztrends.com/2022/02/best-selling-nfts-this-week.png' }
    },
    {
      nftTitle: 'Bullrun',
      nftDescription: 'Bullrun 3,2,1 go!',
      nftImage: { url: 'https://miro.medium.com/max/1000/1*2OLWtgu-WqcvaukYwIGpxw.png' }
    },
    {
      nftTitle: 'Random NFT',
      nftDescription: "Collection of random NFT's",
      nftImage: { url: 'https://miro.medium.com/max/1024/1*RlMqU4P2XiOfw2_V1lNJEw.png' }
    },

    {
      nftTitle: 'Fitness hulja',
      nftDescription: 'Hulja počikan v fitnessu',
      nftImage: {
        url: 'https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/275889148_2857791114519764_2731753575680007448_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RXTYKt_1f9sAX_S-S-N&_nc_ht=scontent.flju4-1.fna&oh=03_AVL6uevZkWkJSFLjFkksu7V2hgxNt8CtPek4XF1Qd7qibw&oe=62725839'
      }
    },
    {
      nftTitle: 'Hulja mrtu',
      nftDescription: 'Mrtu hulja po prvi vaji',
      nftImage: {
        url: 'https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277821257_1614200642297822_783332395683730326_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=KdCQk7J8ZRQAX8pYavu&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTbfT7UCZ4DlyGlN_pgAc9t7RVIUGOzJ8oSZ3PoRQw_Q&oe=6273C410'
      }
    },
    {
      nftTitle: 'Hulja dosadan',
      nftDescription: 'Dosadan hulja k je biu na šihtu dans',
      nftImage: {
        url: 'https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276967151_380814533915536_289768505635896743_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DhNqSlM7ysAAX-ijy9X&_nc_ht=scontent.flju4-1.fna&oh=03_AVLHJ0LXD0yFyWYtkdiC2QY8AFqiFxGNcf2NUU7__YYjSQ&oe=62754CD7'
      }
    },
    {
      nftTitle: 'Hulja veseu',
      nftDescription: 'Veseli hulja, ker pije pivo',
      nftImage: {
        url: 'https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276199310_314963527393704_1894867575042343784_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Uy_ifNoF-TgAX8koag6&_nc_ht=scontent.flju4-1.fna&oh=03_AVIhQYPthx2WXv9UUgTrZLi2hfD4_QxcO1M8JFoHHi_j8Q&oe=62743052'
      }
    },
    {
      nftTitle: 'Hulja v antici',
      nftDescription: 'Hulja rad obišče Antico in si privošči tartufe',
      nftImage: {
        url: 'https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277912235_691062952216035_1666736231789691998_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0q9GOPkKS5UAX89knYl&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTxKhxRSOHur1DlWArSJM6wsE63q4y19B4fzluh735Bw&oe=62754A64'
      }
    }
  ]

  return (
    <div className="mockup-window border bg-base-300 md:w-1/2 m-auto">
      <div className="flex justify-center px-4 py-16 bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Claim the NFT</h2>
            <div
              key={dummyNFT[0].nftTitle}
              className="mx-auto my-2 flex w-full cursor-pointer  flex-col items-center justify-center space-y-2 rounded-xl border-2 border-slate-300 border-opacity-50 bg-slate-100 bg-gradient-to-b shadow-lg shadow-slate-300 transition-all duration-300 sm:w-3/4 md:w-5/6 md:justify-start md:hover:scale-110 lg:my-8  xl:w-[250px]"
            >
              <div className="w-full items-center rounded-lg bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400 p-1 md:w-full">
                <img
                  src={dummyNFT[0].nftImage.url}
                  className="h-72 w-full rounded-lg object-cover  xl:h-64"
                  alt={dummyNFT[0].nftTitle}
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-700">{dummyNFT[0].nftTitle}</h1>
              </div>

              <div className="px-3 pb-4 text-sm text-slate-500">{dummyNFT[0].nftDescription}</div>
            </div>
            <label className="block text-sm font-bold mb-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">I agree to the terms and conditions</span>
            </label>
            <button className="btn btn-primary">Claim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;