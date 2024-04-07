import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data; // deconstructing data
    try {
      const { data } = await axios.post("/signup", {
        // sending payload to register
        name,
        email,
        password,
      });
      if (data.message === "User registered successfully") {
        toast.success("Registration successful!");
        navigate("/");
      } else if (data.error) {
        toast.error(data.error);
      }

      // if (data.error) {
      //   // if there is an error with the data
      //   toast.error(data.error);
      //   console.log("Response received:", data);
      //   navigate("/");
      // } else if (!data.error) {
      //   //    setData({ name: "", email: "", password: "" }); // Resetting to initial state structure
      //   toast.success("Login successful!");
      //   console.log("Going home...");
      //   window.location.href = "/";
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gradient__bg-register">
      <div className="container mt-5">
        <form onSubmit={registerUser} className="card p-4 bg-dark">
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
