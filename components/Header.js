import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {
  const [input, setInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router=useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput=()=>{
    setInput("")
  }
  const searchHandler=()=>{
    router.push({
      pathname:"/search",
      query:{
      location:input,
      startdate: startDate.toISOString(),
      enddate: endDate.toISOString(),
      noOfGuests: noOfGuests

      }
    })
  }

  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3  bg-white shadow-md p-3 md:p-4 xl:p-5 ">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto"
      onClick={()=>router.push("/")}>
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
          placeholder={placeholder||"Start your search" }
          onChange={(e) => setInput(e.target.value)}
          value={input}
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

      {input && (
        <div className="flex flex-col col-span-3 mx-auto">
          {" "}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b margin-b-2">
            <h2 className="text-xl flex-grow font-semibold ">
              Number Of Guests
            </h2>
            <UsersIcon className="h-6" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-700"
            onClick={resetInput}> Cancel </button>
            <button onClick={searchHandler}className="flex-grow text-red-400"
            > Search </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
