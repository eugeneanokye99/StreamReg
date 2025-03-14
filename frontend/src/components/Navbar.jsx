import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">StreamReg</Link>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded-lg w-1/3">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search workshops..."
            className="bg-transparent outline-none text-white w-full placeholder-gray-400"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/workshops" className="hover:text-gray-300">Workshops</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>

          {user ? (
            <>
              <span className="text-gray-400">{user.email}</span>
              <button
                onClick={logout}
                className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link
                to="/register"
                className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-800 p-4 mt-2 rounded-lg">
          <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/workshops" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Workshops</Link>
          <Link to="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>

          {user ? (
            <>
              <span className="text-gray-400">{user.email}</span>
              <button
                onClick={logout}
                className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link
                to="/register"
                className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
