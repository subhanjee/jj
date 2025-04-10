"use client";

import { loginCoinUser, register } from "@/src/helper";
import { useState } from "react";
import toast from "react-hot-toast"; // optional, for alerts
 
export default function AuthPage({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phonenumber: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await loginCoinUser.post("/", {
          email: formData.email,
          password: formData.password,
        });

        if (res.status === 200) {
          toast.success("Login successful");
          onAuthSuccess(); // trigger authenticated state
        }
      } else {
        const res = await register.post("/", {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          phonenumber: formData.phonenumber,
            role: formData.role,
        });

        if (res.status === 201) {
          toast.success("Registered successfully");
          onAuthSuccess(); // trigger authenticated state
        }
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#262b2d] p-8 rounded shadow-md w-full max-w-md">
    
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded text-orange-500 bg-[#262b2d]"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded bg-[#262b2d] text-orange-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded bg-[#262b2d] text-orange-500"
            required
          />

          {!isLogin && (
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded bg-[#262b2d] text-orange-500"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-200 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center mt-4 text-white">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
