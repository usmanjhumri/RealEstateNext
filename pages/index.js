import Head from "next/head";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import Home from "../components/home";
import PropertyAreas from "../components/property-areas";
import LatestPropertiesOfRentCard from "../components/latest-properties-of-rent-card";
import RentPropertiesCard from "../components/rent-properties-card";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover the Figma into nextjs" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <HeroSection />
        <Home />
        <PropertyAreas />
        <LatestPropertiesOfRentCard />
        <RentPropertiesCard />
        <ContactUs />
        <Footer
          houseLine="/houseline1.svg"
          socialMediaLogo="/social-media-logo.svg"
          socialMediaLogo1="/social-media-logo1.svg"
          socialMediaLogo2="/social-media-logo2.svg"
          socialMediaLogo3="/social-media-logo3.svg"
          socialMediaLogo4="/social-media-logo4.svg"
        />
      </div>
    </>
  );
};

export default LandingPage;
