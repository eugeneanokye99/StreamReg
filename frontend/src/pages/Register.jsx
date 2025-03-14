import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/57141.jpg')" }}
      ></div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
            Register for Workshop
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp Number"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white py-3 w-full rounded-md hover:bg-gray-900 transition text-lg"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
