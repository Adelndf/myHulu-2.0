import Image from "next/image";
import { headerIconData } from "../constants/data";
import HeaderIcon from "./HeaderIcon";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col items-center sm:flex-row px-7 py-5 justify-between">
      <div className="flex flex-grow justify-evenly mb-5 sm:mb-0 max-w-2xl">
        <HeaderIcon title={"Home"} Icon={HomeIcon} />
        <HeaderIcon title={"Trending"} Icon={LightningBoltIcon} />
        <HeaderIcon title={"Verifeid"} Icon={BadgeCheckIcon} />
        <HeaderIcon title={"Collection"} Icon={CollectionIcon} />
        <HeaderIcon title={"Search"} Icon={SearchIcon} />
        <HeaderIcon title={"Account"} Icon={UserIcon} />
      </div>
      <Image
        src="/images/Logo.png"
        objectFit="contain"
        width={100}
        height={40}
        alt="Logo"
      />
    </header>
  );
};

export default Header;
