import Answer from "@/components/Answer/Answer";
import Business from "@/components/Business/Business";
import Custormer from "@/components/Custormer/Custormer";
import Hero from "@/components/Hero/Hero";
import ImageList from "@/components/ImageList/ImageList";
import Latest from "@/components/Latest/Latest";
import Portfolio from "@/components/Portfolio/Portfolio";
import Status from "@/components/Status/Status";

const page = () => {
  return (
    <>
      <Hero />
      <ImageList />
      <Business />
      <Status />
      <Portfolio />
      <Latest />
      <Custormer />
      <Answer />
    </>
  );
};

export default page;
