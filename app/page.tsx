import CarouselSection from "./home/carousel";
import Hero from "./home/hero";
import Overview from "./home/overview";
const Home = () => {
  return (

      <div className="max-w-[87rem] mx-auto bg-[#F5E6E6] ">
        <Hero />
        <Overview />
        <CarouselSection />
      </div>
  );
}

export default Home;

