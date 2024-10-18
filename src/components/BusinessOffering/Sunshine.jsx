

const Sunshine = () => {
    return (
        <div>
            <div
                className="hero min-h-screen relative"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/0GZ6PsH/people-taking-care-office-cleaning-edited.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="absolute center-0 left-0 w-full text-center text-white ">
                    <div className="">
                        <div className="p-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Sunshine Airbnb Cleaning</h1>
                         
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 text-center font-bold text-2xl">
                <p>


                    Best-in-class Airbnb Cleaning Services are offered by experienced and dedicated team members. We take care of cleaning for Airbnb Hosts so that they can grow their customer base exponentially.
                </p>
            </div>


            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 p-8">
                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co.com/zrt1S7d/Infographics-of-airbnb-cleaning-business-1-1-1.png" alt="Left Section" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co.com/QPFLZSJ/Infographics-of-airbnb-cleaning-business-2-1-1.png" alt="Right Section" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>




        </div>
    );
};

export default Sunshine;