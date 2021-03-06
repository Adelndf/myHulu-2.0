import { useRouter } from "next/router";
import req from "../utils/req";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 whitespace-nowrap
      overflow-x-scroll scrollbar-hide space-x-10 sm:space-x-20"
      >
        {Object.entries(req).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer sm:text-xl transition transform: ;
            hover:scale-125 hover:text-white active:text-green-300"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-full" />
    </nav>
  );
};

export default Nav;
