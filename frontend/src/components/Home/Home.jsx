import Contact from "../ContactForm/Contact";
import ContactInfo from "../ContactInfo/ContactInfo";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Our Company Section */}
      <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
        <h2 className="text-4xl font-bold text-gray-800 pb-4 border-b-2 border-gray-200">
          Our Company
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed pt-4">
          Welcome to LIIA SMART INC, a cutting-edge company dedicated to
          delivering exceptional business solutions. We are a dynamic company
          that brings transformation to businesses with revolutionary concepts
          and technologies guided through SMEs who have proven track records of
          success. We are a trusted provider of top-notch supply chain
          analytics, inventory management systems, IT system implementation, and
          comprehensive business modeling. We are committed to helping
          businesses thrive by leveraging our innovative services and industry
          expertise.
        </p>
      </div>

      {/* Our Vision Section */}
      <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
        <h2 className="text-4xl font-bold text-gray-800 pb-4 border-b-2 border-gray-200">
          Our Vision
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed pt-4">
          To be the leading provider of innovative business solutions,
          empowering organizations to achieve their full potential through
          advanced analytics and seamless system integration.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
        <h2 className="text-4xl font-bold text-gray-800 pb-4 border-b-2 border-gray-200">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed pt-4">
          Our mission at LIIA SMART INC is to revolutionize the way businesses
          operate by offering comprehensive and integrated solutions that drive
          excellence and innovation. We are committed to:
        </p>
        <ul className="list-decimal list-inside text-gray-600 leading-relaxed pt-4">
          <li>
            <span className="font-bold">Empowering Businesses:</span> Providing
            our clients with the tools and insights needed to streamline
            operations, reduce costs, and enhance overall efficiency.
          </li>
          <li className="mt-2">
            <span className="font-bold">Innovative Solutions:</span>{" "}
            Continuously developing and implementing the latest technologies in
            supply chain analytics, inventory management, and IT systems to
            ensure our clients stay at the cutting edge.
          </li>
          <li className="mt-2">
            <span className="font-bold">Customer-Centric Approach:</span>{" "}
            Building strong, long-term relationships with our clients by
            understanding their unique needs and delivering tailored solutions
            that exceed expectations.
          </li>
          <li className="mt-2">
            <span className="font-bold">Excellence in Service:</span>{" "}
            Maintaining the highest standards of quality and professionalism in
            all our services, ensuring that every project we undertake is
            completed to the utmost satisfaction of our clients.
          </li>
          <li className="mt-2">
            <span className="font-bold">Sustainable Growth:</span> Promoting
            sustainable business practices that not only drive growth and
            profitability for our clients but also contribute positively to the
            wider community and environment.
          </li>
        </ul>
      </div>

      {/* Conclusion Section */}
      <div className="px-10 py-8 bg-white shadow-lg rounded-lg">
        <p className="text-lg text-gray-600 leading-relaxed">
          Through our dedication to these principles, we aim to help businesses
          navigate the complexities of the modern market, achieve their
          strategic goals, and unlock their full potential.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Form */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
