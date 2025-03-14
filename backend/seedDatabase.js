const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Workshop = require("./models/Workshop");
const User = require("./models/User");
const Registration = require("./models/Registration");

dotenv.config(); // Load environment variables

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

const workshops = [
  {
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and React in 2 weeks!",
    date: new Date("2025-04-01"),
    price: 50,
  },
  {
    title: "AI & Machine Learning Workshop",
    description: "Hands-on ML model training with Python.",
    date: new Date("2025-04-15"),
    price: 80,
  },
];

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "hashedpassword123",
    role: "user",
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "adminhashedpassword",
    role: "admin",
  },
];

const registrations = [
  {
    userEmail: "john@example.com",
    workshopTitle: "Web Development Bootcamp",
    status: "approved",
  },
];

const seedDatabase = async () => {
  try {
    await Workshop.deleteMany();
    await User.deleteMany();
    await Registration.deleteMany();

    const createdWorkshops = await Workshop.insertMany(workshops);
    const createdUsers = await User.insertMany(users);

    const createdRegistrations = await Registration.insertMany(
      registrations.map((reg) => ({
        user: createdUsers.find((u) => u.email === reg.userEmail)._id,
        workshop: createdWorkshops.find((w) => w.title === reg.workshopTitle)._id,
        status: reg.status,
      }))
    );

    console.log("✅ Dummy Data Inserted Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error Seeding Data:", error);
    process.exit(1);
  }
};

seedDatabase();
