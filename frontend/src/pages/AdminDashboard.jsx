import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [workshops, setWorkshops] = useState([]);
  const [users, setUsers] = useState([]);
  const [newWorkshop, setNewWorkshop] = useState({ title: "", description: "", date: "", price: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workshopRes = await axios.get("http://localhost:5000/api/workshops");
        const userRes = await axios.get("http://localhost:5000/api/auth/user");
        setWorkshops(workshopRes.data);
        setUsers(userRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  const handleCreateWorkshop = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/workshops", newWorkshop);
      setWorkshops([...workshops, data]);
      setNewWorkshop({ title: "", description: "", date: "", price: "" });
    } catch (error) {
      console.error("Failed to create workshop", error);
    }
  };

  const handleDeleteWorkshop = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/workshops/${id}`);
      setWorkshops(workshops.filter((workshop) => workshop._id !== id));
    } catch (error) {
      console.error("Failed to delete workshop", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-4">
          <a href="/admin" className="block py-2 px-4 bg-gray-800 rounded">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Users</a>
          <a href="/workshops" className="block py-2 px-4 hover:bg-gray-700 rounded">Workshops</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Analytics</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-gray-600 text-lg">Total Users</h2>
            <p className="text-3xl font-bold">{users.length}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-gray-600 text-lg">Total Workshops</h2>
            <p className="text-3xl font-bold">{workshops.length}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-gray-600 text-lg">Revenue</h2>
            <p className="text-3xl font-bold">₵12,340</p>
          </div>
        </div>

        {/* Workshop Creation Form */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Create Workshop</h2>
          <form onSubmit={handleCreateWorkshop} className="space-y-4">
            <input type="text" placeholder="Title" value={newWorkshop.title} onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })} className="border p-2 w-full rounded" required />
            <textarea placeholder="Description" value={newWorkshop.description} onChange={(e) => setNewWorkshop({ ...newWorkshop, description: e.target.value })} className="border p-2 w-full rounded" required />
            <input type="date" value={newWorkshop.date} onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })} className="border p-2 w-full rounded" required />
            <input type="number" placeholder="Price (₵)" value={newWorkshop.price} onChange={(e) => setNewWorkshop({ ...newWorkshop, price: e.target.value })} className="border p-2 w-full rounded" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition">Create Workshop</button>
          </form>
        </div>

        {/* User List */}
        <h2 className="text-2xl font-bold mb-4">All Users</h2>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Registered</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border">
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.phone}</td>
                  <td className="p-2 border">{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;
