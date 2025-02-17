import images from "../../src/assets/images/images";
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const Airbnb = () => {
  const hero_src = images.airbnb_hero;

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = hero_src;
  }, [hero_src]);

  return (
    <div>
      <div className="hero min-h-screen relative">
        {!imageLoaded && (
          <Blurhash
            hash="LFGAtNoe9$bb_KkCD*fk0fj]IBWB"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
        {imageLoaded && (
          <img
            src={hero_src}
            className="min-h-screen object-cover bg-center"
            alt=""
          />
        )}

        <div className="hero-overlay bg-opacity-30"></div>
        <div className="absolute top-0 left-0 w-full text-left text-black">
          <div className="">
            <div className="p-10">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                AIRBNB MARKET ANALYTICS
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-9 text-blue-500 text-center font-semibold text-5xl flex justify-center">
        <p>Unlock the Full Potential of Your Airbnb Investments</p>
      </div>

      <div className="pt-3 pr-16 pl-16 pb-10 text-center font-bold text-2xl">
        <p>
          Maximize your Airbnb success with LIIA SMART INC's comprehensive
          Market Analytics tools. Whether you're a seasoned investor or just
          starting out, our data-driven insights empower you to make informed
          decisions, optimize your listings, and boost your revenue.
        </p>
      </div>

      <div className="pl-20 text-left text-green-500 font-bold text-3xl">
        <p>Why Airbnb Market Analytics</p>
      </div>

      <div className="pl-20 pr-20 pt-3 text-left font-medium text-xl">
        <p>
          In the competitive world of short-term rentals, understanding market
          dynamics is crucial. Our Airbnb Market Analytics provides you with the
          tools and insights needed to navigate the complexities of the Airbnb
          landscape. From local market trends to pricing strategies, we help you
          stay ahead of the curve.
        </p>
      </div>
      <div className="pl-20 pt-6 text-left text-green-500 font-bold text-3xl">
        <p>Our Mission</p>
      </div>

      <div className="pl-20 pr-20 pt-3 text-left font-medium text-xl">
        <p>
          At LIIA SMART INC, we believe that data-driven decisions lead to
          sustainable growth. Our analytics services are designed to help you:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 p-4">
        <div className="bg-blue-200 p-4 text-center w-full max-w-md mx-auto">
          <p className="font-bold">Optimize Occupancy Rates</p>
        </div>
        <div className="bg-blue-200 p-4 text-center w-full max-w-md mx-auto">
          <p className="font-bold">Enhance Revenue Streams</p>
        </div>
        <div className="bg-blue-300 p-4 text-center w-full max-w-md mx-auto">
          <p className="font-bold">Make Strategic Investments</p>
        </div>
      </div>

      <div className="pt-6 pb-8 text-black text-center font-semibold text-5xl">
        <p>Our Services</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center p-4">
        {/* Market Performance Tracking */}
        <div className="bg-black text-white p-6 rounded-lg">
          <h3 className="text-xl font-extrabold mb-4">
            Market Performance Tracking
          </h3>
          <p>
            Stay ahead with our detailed market reports, tracking key
            performance indicators like{" "}
            <span className="font-extrabold">
              Occupancy Rates, Average Daily Rate (ADR),
            </span>{" "}
            and <span className="font-extrabold">Revenue Potential</span>. Our{" "}
            <span className="font-extrabold">Regional Insights</span> offer a
            clear view of market trends across different locations, helping you
            identify high-demand areas and strategically position your listings
            for success.
          </p>
        </div>

        {/* Price Optimization Tools */}
        <div className="bg-gray-600 text-green-200 p-6 rounded-lg">
          <h3 className="text-xl font-extrabold mb-4">
            Price Optimization Tools
          </h3>
          <p>
            Optimize your pricing with our advanced tools that analyze{" "}
            <span className="font-extrabold">
              seasonal trends, local demand,
            </span>{" "}
            and <span className="font-extrabold">competitor pricing</span>. Our
            algorithms suggest ideal nightly rates to maximize your earnings
            while maintaining occupancy.
          </p>
        </div>

        {/* Property Investment Analysis */}
        <div className="bg-blue-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-extrabold mb-4">
            Property Investment Analysis
          </h3>
          <p>
            Make smart investment decisions with insights into{" "}
            <span className="font-extrabold">cap rates, income potential,</span>{" "}
            and <span className="font-extrabold">ROI predictions</span>. Our
            data-driven analysis helps you evaluate and expand your property
            portfolio confidently.
          </p>
        </div>

        {/* Custom Analytics Solutions */}
        <div className="bg-green-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-extrabold mb-4">
            Custom Analytics Solutions
          </h3>
          <p>
            Tailored to your specific needs, we offer{" "}
            <span className="font-extrabold">
              market comparisons, performance forecasting,
            </span>{" "}
            and <span className="font-extrabold">custom dashboards</span>. Work
            with our experts to develop personalized strategies that deliver
            actionable insights for your business
          </p>
        </div>
      </div>

      <div className="pl-20 text-left text-green-500 font-bold text-3xl pt-6">
        <p>Transform Your Airbnb Business</p>
      </div>

      <div className="pl-20 pr-20 pt-3 text-left font-medium text-xl mb-5">
        <p>
          Ready to take your Airbnb listings to the next level? Contact us to
          learn more about our AirBNB Market Analytics services and how we can
          help you achieve your business goals.
        </p>
      </div>
    </div>
  );
};

export default Airbnb;
