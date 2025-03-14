import { useEffect, useState } from "react";
import axios from "axios";
import WorkshopCard from "../components/WorkshopCard";

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/workshops");
        setWorkshops(data);
      } catch (error) {
        console.error("Failed to fetch workshops", error);
      }
    };
    fetchWorkshops();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Workshops</h1>
      <div className="grid grid-cols-3 gap-4">
        {workshops.length > 0 ? (
          workshops.map((workshop) => <WorkshopCard key={workshop._id} workshop={workshop} />)
        ) : (
          <p>No workshops available.</p>
        )}
      </div>
    </div>
  );
};

export default Workshops;
