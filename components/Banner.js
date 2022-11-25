
import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
     <Image src="https://links.papareact.com/0fm" 
       layout= "fill" objectFit="cover"/>
       <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-gray-800">Not Sure where to go ? Perfect</p>
        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150" >I am flexible</button>
       </div>
    </div>
  )
}
