import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterWorkshop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workshop, setWorkshop] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  useEffect(() => {
    const fetchWorkshop = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/workshops/${id}`);
        setWorkshop(data);
      } catch (error) {
        console.error("Failed to fetch workshop details", error);
      }
    };
    fetchWorkshop();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/registrations", { ...formData, workshopId: id });
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  if (!workshop) return <p>Loading workshop details...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Register for {workshop.title}</h1>
      <p className="mb-2">{workshop.description}</p>
      <p className="text-gray-600 mb-2">Date: {new Date(workshop.date).toDateString()}</p>
      <p className="text-green-500 mb-4">Price: ₵{workshop.price}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <input type="text" name="whatsapp" placeholder="WhatsApp Number" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default RegisterWorkshop;
