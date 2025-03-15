import { Link } from "react-router-dom";

const WorkshopCard = ({ workshop }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold">{workshop.title}</h2>
      <p>{workshop.description}</p>
      <p className="text-gray-600">Date: {new Date(workshop.date).toDateString()}</p>
      <p className="text-green-500">Price: ₵{workshop.price}</p>
      <Link to={`/workshop_register/${workshop._id}`} className="bg-blue-500 text-white px-3 py-1 rounded mt-2 inline-block">Register</Link>
    </div>
  );
};

export default WorkshopCard;
