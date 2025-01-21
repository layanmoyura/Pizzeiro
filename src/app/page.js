import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader 
          subHeading="Our Story"
          heading="About Us"
      /> 
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
      <p>
        We are a family-owned pizza restaurant that has been serving the community for over 30 years. Our secret recipe has been passed down from generation to generation, and we take pride in making the best pizza in town. Our mission is to provide our customers with delicious food and great service at an affordable price. We look forward to serving you!
      </p>
      <p>
        we are a family-owned pizza restaurant that has been serving the community for over 30 years. Our secret recipe has been passed down from generation to generation, and we take pride in making the best pizza in town. Our mission is to provide our customers with delicious food and great service at an affordable price. We look forward to serving you!
      </p>
      
      </div> 
      
      </section>
      <section className="text-center my-16">
        <SectionHeader 
          subHeading="Don't be shy"
          heading="Contact Us"
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+94761234567">
            +94 76 123 4567
          </a>
        </div>
      </section>
    </>
  );
}
