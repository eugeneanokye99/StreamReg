# Workshop Registration Web Application

## Description
This is a **full-stack workshop registration web application** built using **React.js (Vite)** for the frontend and **Node.js with MongoDB** for the backend. The application allows users to browse, register, and attend workshops while providing an **admin dashboard** for managing workshops, tracking attendance, and viewing analytics. It features **secure authentication, and data analytics** to track registrations and engagement.

## Features
### User Features
- **User Authentication**: Secure login and registration
- **Browse Workshops**: View available workshops with details
- **Register for Workshops**: Sign up and make payments
- **Dashboard**: View registered workshops and attendance

### Admin Features
- **Manage Workshops**: Add, edit, or delete workshops
- **User Management**: View all registered users in a table
- **Data Analytics**: View statistics on registrations and attendance
- **Secure Admin Panel**: Role-based access control

### Additional Features
- **Payment Integration**: Stripe/PayPal for seamless transactions
- **Modern UI/UX**: Elegant, minimalistic, and responsive design
- **Dark Mode Support**: User preference for light/dark themes
- **Search & Filters**: Easily find relevant workshops

## Tech Stack
### Frontend:
- **React.js (Vite)** – Fast and efficient UI rendering
- **Tailwind CSS** – Modern styling framework
- **Axios** – Handling API requests
- **React Router** – Navigation and routing

### Backend:
- **Node.js & Express.js** – Server and API management
- **MongoDB & Mongoose** – Database for storing users and workshops
- **JWT Authentication** – Secure user sessions
- **Stripe/PayPal API** – Payment processing

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/workshop-app.git
   cd workshop-app
   ```

2. **Install dependencies:**
   ```sh
   # Frontend
   cd client
   npm install
   ```
   ```sh
   # Backend
   cd server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend folder and configure:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   STRIPE_SECRET=your_stripe_key
   ```

4. **Run the application:**
   ```sh
   # Start backend
   cd server
   npm start
   ```
   ```sh
   # Start frontend
   cd client
   npm run dev
   ```

5. **Open the application:**
   - Visit: `http://localhost:5173` for the frontend
   - API runs on `http://localhost:5000`

## Usage
- **Users can browse and register for workshops**
- **Admins can manage workshops and view analytics**
- **Payments can be processed securely**

## Future Enhancements
- Add **email notifications** for registrations
- Implement **multi-step registration process**
- Enhance **dashboard analytics with charts**

## License
This project is open-source under the **MIT License**.

