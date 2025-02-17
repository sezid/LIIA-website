import React, { useState, useEffect } from "react";
import images from "../../assets/images/images";
import { Blurhash } from "react-blurhash";

const DiamondResume = () => {
  const hero_src = images.resume_hero;

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
            hash="|NLXD8~p00xuX9%g%MD%s:00WB-=t7RPxuM{s;oz9FxttRt7%MRPayx]RjV@Mxt7kCx]ogt7t7xabwt7IURjITRkWBofxus:M{RjRjt7tRRkf+WWxuWBkCxuofj[WAMxWBNGWBM{s:oLayfPoff5juWXkCoJt7j[aetRof"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}

        {imageLoaded && (<img src={hero_src} className="min-h-screen object-cover bg-center" alt="" />)}
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="absolute top-0 left-0 w-full text-left text-white">
          <div className="">
            <div className="p-10">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                DIAMOND RESUME WRITING SERVICE
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-16 text-center font-semibold text-2xl">
        <p>
          Are you lost? Are you frustrated while searching for the perfect job?
          We are a team of dedicated professionals to help you achieve your
          dream career. We craft your resume based on understanding your
          background, characteristics, and goals. We do not leave you wondering
          what to do with your job and career. We put you on the right path.
        </p>
      </div>

      <div className="bg-slate-300">
        <div className="text-center p-20 bg">
          <h1 className="font-bold text-4xl">Get our free resume review</h1>
          <p className="font-medium text-2xl">Please send your resume to</p>
          <p className="font-medium text-2xl">liia.smart.inc@gmail.com</p>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4">Here's how we do things</h2>
        <div className="w-full max-w-screen-lg mx-auto">
          <div
            className="relative overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            {" "}
            {/* 16:9 aspect ratio */}
            <iframe
              src="https://drive.google.com/file/d/1QEibG697YDEhcxEO5-OcRVlfQ_kDIkou/preview"
              title="Video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="pb-6">
          <h1 className="text-red-500 font-bold text-3xl">01</h1>
          <h1 className="font-bold text-2xl">Tell us about yourself </h1>
          <p className="text-xl">
            Complete a quick 5-minute questionnaire <br /> to prepare your
            future writer.
          </p>
        </div>
        <div className="pb-6">
          <h1 className="text-red-500 font-bold text-3xl">02</h1>
          <h1 className="font-bold text-2xl">Meet your match </h1>
          <p className="text-xl">
            We'll match you with the writer best suited to work <br /> with your
            industry and experience.{" "}
          </p>
        </div>
        <div>
          <h1 className="text-red-500 font-bold text-3xl">03</h1>
          <h1 className="font-bold text-2xl">Review first draft</h1>
          <p className="text-xl">
            Have notes on the first draft? Send them <br /> to your writer to
            edit and update.
          </p>
        </div>
        <div>
          <h1 className="text-red-500 font-bold text-3xl">04</h1>
          <h1 className="font-bold text-2xl">Receive your resume </h1>
          <p className="text-xl">
            Download your final draft and get ready for <br /> a renewed job
            search.
          </p>
        </div>
      </div>

      <div className="pl-20 pr-20 p">
        <div className="pb-6">
          <h1 className="font-bold text-2xl">1-On-1 Time</h1>
          <p className="text-xl">
            Our writers take the necessary time to learn about your career goals
            and what you'd like to see in your new resume.
          </p>
          <p className="text-xl">
            While other resume services only have you filling out a form, you'll
            be working directly with our writers. They'll set up an initial
            consultation with you to discuss your resume concerns and answer any
            sort of questions you may have.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Unlimited Revisions</h1>
          <p className="text-xl">
            Our writers are here to help every step of the way. Even after
            you've been sent your new resume, they'll be glad to continue
            providing revisions and updates to for up to 14 days.
          </p>
        </div>
      </div>

      <div className="p-10">
        <div>
          <h1 className="font-extrabold text-center text-5xl">
            Our Pricing{" "}
            <span className="text-red-600 font-semibold text-2xl">for U.S</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-9 gap-6 justify-items-center">
          <div>
            <div className="card bg-teal-300  text-primary-content w-96">
              <div className="card-body">
                <h2 className="text-center text-4xl text-black font-bold ">
                  Starter
                </h2>
                <h2 className="text-center text-4xl text-black font-bold ">
                  <span className="font-semibold text-2xl">USD</span>200
                </h2>

                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                  <li className="pb-2">Delivery in Word and PDF file</li>
                  <li className="pb-2">One-to-One discussion</li>
                  <li className="pb-2">
                    Professional Content to grab employer's attention
                  </li>
                  <li className="pb-2">Modification Opportunity</li>
                  <li className="pb-2">5 to 7 Working Days Delivery</li>
                  <li className="pb-2">90 Days of Career Support</li>
                  <li className="pb-2">Lifetime Career advice</li>
                </ul>
                <div className="card-actions justify-center">
                  {/* <button className="btn">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-teal-300  text-primary-content w-96">
              <div className="card-body">
                <h2 className="text-center text-4xl text-black font-bold ">
                  Premium
                </h2>
                <h2 className="text-center text-4xl text-black font-bold ">
                  <span className="font-semibold text-2xl">USD</span>300
                </h2>

                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                  <li className="pb-2">Delivery in Word and PDF file</li>
                  <li className="pb-2">One-to-One discussion</li>
                  <li className="pb-2">
                    Professional Content to grab employer's attention
                  </li>
                  <li className="pb-2">Modification Opportunity</li>
                  <li className="pb-2">7 to 10 Working Days Delivery</li>
                  <li className="pb-2">90 Days of Career Support</li>
                  <li className="pb-2">Lifetime Career advice</li>
                </ul>
                <div className="card-actions justify-center">
                  {/* <button className="btn">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-teal-300  text-primary-content w-96">
              <div className="card-body">
                <h2 className="text-center text-4xl text-black font-bold ">
                  Ultimate
                </h2>
                <h2 className="text-center text-4xl text-black font-bold ">
                  <span className="font-semibold text-2xl">USD</span>400
                </h2>

                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                  <li className="pb-2">Delivery in Word and PDF file</li>
                  <li className="pb-2">One-to-One discussion</li>
                  <li className="pb-2">
                    Professional Content to grab employer's attention
                  </li>
                  <li className="pb-2">Modification Opportunity</li>
                  <li className="pb-2">10 to 20 Working Days Delivery</li>
                  <li className="pb-2">90 Days of Career Support</li>
                  <li className="pb-2">Lifetime Career advice</li>
                </ul>
                <div className="card-actions justify-center">
                  {/* <button className="btn">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div>
          <h1 className="font-extrabold text-center pb-9 text-5xl">
            Sample Resumes{" "}
          </h1>
        </div>

        <div className="carousel rounded-box h-[700px]">
          <div className="carousel-item">
            <img src="https://i.ibb.co.com/YpwBmsd/r3-1.png" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co.com/1vXdVyf/r2-1.png" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/XZHZycN/Whats-App-Image-2024-07-10-at-00-03-32-5783da79-1.jpg"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondResume;
