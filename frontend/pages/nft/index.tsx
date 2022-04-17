import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import NFTList from '../../components/nft/NFTList'
import NFTListSkeleton from '../../components/nft/NFTListSkeleton'
import { nftModel } from '../../model/nftModel'
import CountUp from 'react-countup'

function NFT() {
  const [nfts, setNfts] = useState<nftModel[]>([])

  useEffect(() => {
    setTimeout(function () {
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
      setNfts(dummyNFT)
    }, 1000)
  }, [])

  return (
    <Layout>
      <div className="bg-gray-100 py-2">
        <div className="my-4 mx-2 flex flex-col space-y-5 rounded-xl bg-white py-4 shadow-xl md:mx-10">
          <div className="px-12 text-center text-2xl text-gray-700 md:text-4xl">
            <p>
              Your <span className="text-rose-400 underline underline-offset-2">NFT</span>{' '}
              Collection
            </p>
          </div>

          <hr className="opacity-50" />

          <div className="flex justify-between px-2 text-xl md:px-12">
            <div className="flex flex-col text-center">
              <div className="text-sm text-black md:text-2xl">Total Volume</div>
              <CountUp delay={1} end={9717901} className="text-purple-500" />
            </div>

            <div className="flex flex-col text-center">
              <div className="text-sm text-black md:text-2xl">Weekly Volume</div>
              <CountUp delay={1} end={72524} className="text-fuchsia-500" />
            </div>

            <div className="flex flex-col text-center">
              <div className="text-smtext-black md:text-2xl">Total NFT&apos;s</div>
              <CountUp delay={1} end={5215} className="text-cyan-500" />
            </div>
          </div>
        </div>

        {nfts.length ? <NFTList dummyNFT={nfts} /> : <NFTListSkeleton skeletonCount={10} />}
      </div>
    </Layout>
  )
}

export default NFT
