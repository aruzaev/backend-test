import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home, Footer, Account, About, Generate } from "./screens";
import NotFound from "./screens/NotFound/NotFound";
import Navbar from "./components/Global/NavBarComponents/Navbar/Navbar";
import "./App.css";
import Register from "./screens/Register/Register";
import Signin from "./screens/Signin/Signin";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "http://localhost:8000"; // our default url to be used for backend
axios.defaults.withCredentials = true; // gives credentials to backend

function App() {
  return (
    <Router>
      <div className="bg-dark text-white">
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Toaster
              position="bottom-right"
              toastOptions={{ duration: 2000 }}
            />
          </div>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
          <div className="gradient__bg">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
