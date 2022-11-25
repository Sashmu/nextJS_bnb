import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3  bg-white shadow-md p-3 md:p-4 xl:p-5 ">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle -Search */}
      <div className="flex py-2 md:border-2 md:shadow-sm rounded-full">
        <input
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-400"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className=" hidden md:inline-flex h-10 cursor-pointer bg-red-400 text-white rounded-full p-2  md:mx-2 " />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center border-2 p-2 rounded-full space-x-2 ">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
