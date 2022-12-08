import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from "date-fns"
import InfoCard from "../components/InfoCard"

import Maps from "../components/Map"


function Search({searchResults}) {


    const router=useRouter()
   const {location,startdate,enddate,noOfGuests}=router.query
   const formattedStartDate= format(new Date(startdate),"dd MMM yy")
   const formattedEndDate= format(new Date(enddate),"dd MMM yy")

   const range=` ${formattedStartDate}-${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests` }/>

      <main className="flex">
        

    <section className="flex-grow pt-10 px-8">
        <p className="tet-xs text-gray-800"> 300+ Stays <span className="font-semibold"> {range}</span> for <span className="font-semibold">{noOfGuests}</span> {noOfGuests>1? "Guests":"Guest"}</p>
        <h1 className="text-3xl font-semibold mb-6 mt-2" > Stays in {location}</h1>

        <div className="hidden md:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap text-md">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filter</p>
        </div>

        <div className="flex flex-col">
        {searchResults.map(({img,location,title,description,star,price,total})=>(
      <InfoCard 
      key={img}
      img={img}
      location={location}
      title={title}
      description={description}
      star={star}
      price={price}
      total={total}
      />
        ))}
        </div>
    </section >

    {/* hidden xl:inline-flex */}
     
    <section className="hidden xl:inline-flex xl:min-w-[600px]">

<Maps searchResults={searchResults}/>
    </section>

      </main>
  <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults= await fetch("https://www.jsonkeeper.com/b/5NPS").then((res)=>res.json())

    return{
        props:{
            searchResults
        }
    }
    // https://www.jsonkeeper.com/b/5NPS
    // https://links.papareact.com/isz

}

