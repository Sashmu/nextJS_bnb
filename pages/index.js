import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard"

const Home = ({ exploreData,cardsData }) => {

  return (
    <div className="">
      <Head>
        <title>Airbnb NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />
      <Banner />
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className=" text-2xl lg:text-3xl font-semibold pb-5">
            {" "}
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item)=><SmallCard img={item.img} distance={item.distance} location={item.location} key={item.img}/>)}
          </div>
          {/* {exploreData?.map((img,location,distance)=><SmallCard key={img} img={img} location={location} distance={distance} />)} */}
        </section>



        <section>
          <h2 className="text-2xl lg:text-3xl font-semibold py-8"> Live Anywhere</h2>
          <div className=" flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
          {cardsData.map((item)=>  <MediumCard data={item} key={item.img}/>  )}
          </div>
        </section>

      <LargeCard
      img={"https://links.papareact.com/4cj"} 
      title="The Greatest Outdoors"
      description="Wishlists Created by airbnb"
      btnText="Get Inspired"
 />
      </main>

      <footer>
        <Footer/>
        </footer>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );


  return {
    props: {
      exploreData: exploreData,
      cardsData:cardsData,
    },
  };
}




export default Home;
