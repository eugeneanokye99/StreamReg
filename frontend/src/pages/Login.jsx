import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

    // Redirect based on user role after login
    useEffect(() => {
      if (user) {
        console.log("Logged in user:", user);
        if (user.role === "admin") {
          navigate("/admin"); // Redirect to admin dashboard
        } else {
          navigate("/"); // Redirect to homepage for normal users
        }
      }
    }, [user, navigate]);
  

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/57141.jpg')" }}
      ></div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-3 w-full rounded-md bg-gray-50 text-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white py-3 w-full rounded-md hover:bg-gray-900 transition text-lg"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-gray-700 font-bold">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
