import React from "react";
import { Skeleton } from "../ui/skeleton";

const HomePageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-14 w-full">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
        <Skeleton
          key={el}
          className={` relative rounded-3xl h-[25vh] lg:h-[32vh] p-5 flex flex-col items-center`}
        />
      ))}
    </div>
  );
};

export default HomePageSkeleton;
