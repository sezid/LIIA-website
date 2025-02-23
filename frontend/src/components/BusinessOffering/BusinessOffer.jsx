import { NavLink } from "react-router-dom";


const BusinessOffer = () => {
    return (
        <div>
            <div><h1 className="text-5xl font-extrabold text-center pt-16">Our Services</h1></div>
            <div className="flex justify-center gap-8 pt-20 pb-[200px]">
                <div className="card bg-teal-300 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center pt-6">DIAMOND RESUME</h2>
                        
                        <div className="card-actions justify-center pt-10">
                            <button className="btn btn-primary p-5"><NavLink to="/diamondResume">GO</NavLink></button>
                        </div>
                    </div>
                </div>

                <div className="card bg-teal-300 w-96 shadow-xl">
                    <div className="card-body"> 
                        <h2 className="card-title justify-center pt-6">SUNSHINE AIRBNB CLEANING</h2>
                        
                        <div className="card-actions justify-center pt-10">
                            <button className="btn btn-primary p-5"><NavLink to="/sunshine">GO</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessOffer;