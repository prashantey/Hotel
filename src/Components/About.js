import React from "react";
import zomato from "../Components/Images/zomatoAboutImage.avif";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8  my-2 p-2">
            <h2 className="text-bold">

              Empowering the Spectrum of
              <span className="text-danger">Variety</span>
            </h2>
            <p className="text-wrap">

              For over a decade, we've been empowering our customers to embark on
              a journey of discovering new tastes and experiences spanning across
              borders. Through our curated wealth of information, we empower them
              to make enlightened choices, ensuring every selection is a delightful
              and informed experience.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 p-2">
            <h1>Who are we ?</h1>
            <p>
              Launched in 2024, our cutting-edge tech hub seamlessly connects food enthusiasts,
              culinary hotspots, and speedy delivery maestros, catering to a myriad of desires.
              Users leverage our avant-garde platform to embark on gastronomic journeys, exploring
              and unearthing hidden culinary gems. Engage in a vibrant community by sharing and
              relishing customer-generated reviews and captivating food snapshots.

              Elevate your dining experience with features like convenient food delivery,
              hassle-free table reservations, and swift, in-app payments. For our esteemed
              restaurant partners, we offer tailored marketing tools, empowering them to
              captivate and expand their customer base, coupled with a reliable and efficient
              last-mile delivery service.

              Enter Hyperpure, our revolutionary procurement solution, delivering top-tier
              ingredients and kitchen essentials to our restaurant partners, ensuring a consistent
              standard of quality. Elevating our delivery partners, we provide transparent and flexible earning opportunities, making every delivery an opportunity for growth.

              Step into a realm where technology transforms dining into an exquisite journey –
              where food meets innovation and convenience meets culinary delight. Welcome to
              the future of food exploration and seamless connectivity!
            </p>
          </div>

          <div className="col-lg-4 zomatoImage">
            <img src={zomato} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
