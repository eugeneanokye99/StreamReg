import { useEffect, useState } from "react";
import axios from "axios";
import WorkshopCard from "../components/WorkshopCard";

const Home = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/workshops");
        setWorkshops(data);
      } catch (error) {
        console.error("Error fetching workshops", error);
      }
    };
    fetchWorkshops();
  }, []);

  return (
    <div className="min-h-screen bg-white-100">
      {/* Hero Section */}
      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center px-6">
        <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold">Discover Exclusive Workshops</h1>
          <p className="text-lg md:text-xl mt-2">Learn new skills and connect with experts.</p>
          <button className="mt-4 bg-blue-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-600 transition">
            Explore Workshops
          </button>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop._id} workshop={workshop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
