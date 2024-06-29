import React from "react";
import Banner from "./../../Components/Banner";
import Gallery from "../../Components/Gallery";

const Home = () => {
  return (
    <div className="homePage">
      <div className="bannerHome">
        <Banner
          className="bannerTitleHome"
          title={`Chez vous, partout et ailleurs`}
          page="home"
        />
      </div>
      <section className="gallerySection">
        <Gallery page="home" />
      </section>
    </div>
  );
};

export default Home;
