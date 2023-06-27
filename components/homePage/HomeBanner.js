import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-3/6 px-10">
        <h1 className="text-black font-semibold text-5xl my-4">
          Discover your family story
        </h1>
        <p className="text-gray text-2xl my-4">
          Grow your family tree, find new relatives, and explore other
          trees.Expand your family tree, uncover new relatives, and explore the
          intricacies of other ancestral lineages.
        </p>
        <div className="w-fit">
          <Link href="/signup">
            <p className="bg-primary text-white px-7 py-2 w-fit rounded text-lg hover:bg-blue-700">
              GET STARTED
            </p>
          </Link>
        </div>
      </div>

      <div className="w-auto h-auto">
        <Image src="/bannerImage.png" alt="Banner" width={600} height={300} />
      </div>
    </div>
  );
};

export default HomeBanner;
