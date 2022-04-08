import React from "react";

interface NFTListSkeletonProps {
  skeletonCount: number;
}

function NFTListSkeleton({ skeletonCount }: NFTListSkeletonProps) {
  function renderSkeletons(amount: number) {
    let skeletons = [];
    for (let i = 0; i < amount; i++) {
      skeletons.push(
        <div
          key={i}
          className="my-2 flex w-full cursor-pointer  flex-col items-center justify-center space-y-2 rounded-xl border-2 border-slate-300 border-opacity-50 bg-slate-100 bg-gradient-to-b shadow-lg shadow-slate-300 transition-all duration-300 sm:w-3/4 md:w-5/6 md:justify-start md:hover:scale-110 lg:my-8  xl:w-[250px]"
        >
          <div className="w-full items-center rounded-lg bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400 p-1 md:w-full">
            <div className="h-72 w-full animate-pulse rounded-lg  bg-slate-500 object-cover xl:h-64" />
          </div>

          <div className="animate-pulse ">
            <div className="h-6 w-36 rounded-full bg-slate-500"></div>
          </div>

          <div className="w-full animate-pulse px-8 py-2">
            <div className="h-8 w-full rounded-full bg-slate-500 px-3 pb-4 text-sm"></div>
          </div>
        </div>
      );
    }
    return skeletons;
  }

  const displaySkeletons = renderSkeletons(skeletonCount);

  return (
    <div className="grid w-full grid-cols-1 justify-items-center md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {displaySkeletons}
    </div>
  );
}

export default NFTListSkeleton;
