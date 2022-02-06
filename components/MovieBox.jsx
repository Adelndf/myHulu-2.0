import Image from "next/image";
import { forwardRef, useState } from "react";

// eslint-disable-next-line react/display-name
const MovieBox = forwardRef(({ results }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [isClick, setIsClick] = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => setIsClick(!isClick)}
      className="cursor-pointer border border-gray-600 rounded-xl
        overflow-hidden hover:border-green-600 sm:hover:scale-105
        transition ease-in-out duration-150 hover:shadow-2xl group bg-[#06202A]"
    >
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        objectFit="cover"
        alt="Image_poster"
        src={
          `${BASE_URL}${results.backdrop_path}` ||
          `${BASE_URL}${results.poster_path}`
        }
      />
      <div className="flex p-2 justify-between">
        <div>
          <h2 className="font-bold pb-2">
            {results.title || results.name || results.original_title}
          </h2>
          <p className="text-sm text-gray-400 font-light tracking-wide">
            {isClick ? (
              <p>{results.overview.slice(0, 150)}...</p>
            ) : (
              <p>{results.overview.slice(0, 50)}...</p>
            )}
          </p>
        </div>
        <div className="min-w-[80px] text-right flex flex-col justify-between">
          <h1 className="font-bold text-green-300 transition ease-in-out duration-150 opacity-50 group-hover:opacity-100 ">
            {results.vote_average}
          </h1>
          <p className=" transition ease-in-out duration-150  text-xs text-gray-400 opacity-0 group-hover:opacity-100">
            {results.release_date}
          </p>
        </div>
      </div>
    </div>
  );
});

export default MovieBox;
