import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center space-x-4 mt-5 mb-2 mr-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transirion transform duration-150 ease-out">
      {/* left */}
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2 className=" text-gray-800">{location}</h2>
        <h2 className=" text-gray-500">{distance}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
