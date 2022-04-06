import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-1/3 grid-cols-1 md:h-screen md:grid-cols-3 md:space-x-2 ">
      <div className="flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-indigo-900 via-indigo-500 to-rose-500 p-5 md:space-y-8 ">
        <div>
          <h1 className="text-center text-lg font-bold text-gray-300 transition-all duration-300 hover:text-white md:text-4xl">
            Welcome to NFT Link
          </h1>
          <h3 className=" text-center text-xs text-gray-400 transition-all duration-300 hover:text-white">
            Sign in to continue to Dashboard
          </h3>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-violet-900 via-violet-500 to-orange-500 p-1 transition-all duration-300 hover:scale-105">
          <img
            src={
              "https://d1don5jg7yw08.cloudfront.net/filters:quality(70)/nft-images/20211003/Lazy_Lion_1633263209277.jpg"
            }
            className=" relative h-56 w-48 rounded-lg md:h-72 md:w-64 lg:h-96 lg:w-96"
          />
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full p-5 lg:order-2">
            Lorem, ipsum dolor sit amet consectetur{" "}
            <span className="text-semibold text-rose-500 underline decoration-2	underline-offset-2	">
              adipisicing elit.
            </span>{" "}
            Libero ducimus praesentium quod quae, obcaecati officiis et
            laudantium illo eius ad magnam, vitae ipsa repudiandae recusandae
            magni. Adipisci itaque fuga totam. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Assumenda unde tenetur esse optio
            quasi incidunt numquam repellat, earum, nisi officia qui cumque
            pariatur eligendi rem sapiente architecto iusto reiciendis. Unde?
          </div>
          <div className="w-full px-16 py-4 lg:order-1 lg:w-1/2">
            <Link href={"/dashboard"}>
              <button className="w-full rounded-full bg-teal-800 px-2 py-3 text-center text-white hover:bg-teal-400 hover:text-black">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}