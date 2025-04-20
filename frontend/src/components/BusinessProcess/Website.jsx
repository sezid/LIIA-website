import images from "../../assets/images/images";
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";


const Website = () => {

    const hero_src = images.website_hero;
    
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
                            hash="LB3^EnL}VDpyiabvk?e9MbtUj:WC"
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
                    
                        <div className="p-10">
                            <h1 className="mb-5 text-5xl font-bold">WEBSITE DEVELOPMENT</h1>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                            <p className="font-bold text-2xl text-blue-600">Transform Your Online Presence with Custom Solutions</p>
                        </div>
                    
                </div>
            </div>

            <div className="bg-white py-12 px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Services We Offer</h2>
                    <hr className="mt-4 w-96 mx-auto border-t-2 border-gray-400" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Custom Web Development */}
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Tailored websites to meet your business needs.</li>
                            <li>Responsive design to ensure your site looks great on all devices.</li>
                        </ul>
                    </div>

                    {/* Search Engine Optimization */}
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Search Engine Optimization (SEO)</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Enhance your website's visibility on search engines.</li>
                            <li>Improve your ranking to attract more organic traffic.</li>
                        </ul>
                    </div>

                    {/* User Experience (UX) Design */}
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">User Experience (UX) Design</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Design intuitive and engaging interfaces.</li>
                            <li>Focus on user satisfaction to increase conversions.</li>
                        </ul>
                    </div>

                    {/* Digital Growth */}
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Digital Growth</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Develop strategies to boost your online presence.</li>
                            <li>Implement digital marketing campaigns to drive growth.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <img className="w-[700px] pb-10" src={images.website_dev_process} alt="" />
            </div>









        </div>
    );
};

export default Website;