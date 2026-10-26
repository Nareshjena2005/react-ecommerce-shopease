import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Auth from "../Layout/Auth";
import  { useContext } from 'react';
import { Autha } from "../context/Authcontext";
 import { ToastContainer, toast } from 'react-toastify';
const Register = () => {
  const{setRegisterdata,registerdata}=useContext(Autha)
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    let arr = [...registerdata,data]
    setRegisterdata(arr)
    localStorage.setItem("registerUser",JSON.stringify(arr));
    toast.success("User register successfully");
    reset();
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Register to get started.
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register("email", {
                required: "Email is require",
              })}
            />
              {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register("password", {
                required: "password is require",
                minLength: {
                  value: 6,
                  message: "Minmum 6 length require",
                },
              })}
            />
              {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
           
            onClick={() => Navigate("/")}
            className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
