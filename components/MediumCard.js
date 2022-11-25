import Image from "next/image";

const MediumCard = ({data}) => {

  return (
  <div className=" cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
    <div className="relative h-72 w-72">
    <Image src={data.img} layout="fill" className="rounded-xl" />
    </div>

<h3 className="mt-3 text-2xl">
    {data.title}
    </h3>
  </div>);
};

export default MediumCard;
