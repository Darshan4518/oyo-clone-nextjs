"use client";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res?.data?.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.log("register error");
    }
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post(`/api/user/login`, {
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res?.data?.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.log("login error");
    }
  };
  const handleToggle = () => {
    setLogin(!login);
  };
  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="md:flex h-screen justify-center items-center relative bg-[url('/background.avif')]  bg-no-repeat bg-cover opacity-85  hidden">
        <div className=" absolute w-full top-10 px-20 flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5 hidden xl:block">OYO</h2>
          <p className=" font-bold text-2xl hidden xl:block w-[400px] line-clamp-1">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div className=" text-white">
            <p className=" font-bold text-5xl text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className=" text-2xl mt-5 text-justify ">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10">
              <h3 className=" text-5xl font-bold my-5">Login / Signup</h3>
              <p className=" font-bold text-lg mb-1">
                Please enter your phone number to continue
              </p>

              {login ? null : (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              )}

              <input
                type="email"
                placeholder="Enter your email..."
                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Enter yourt password..."
                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                type="submit"
                className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login" : "SignUp"}
              </button>
              <p className=" my-1 text-md flex items-center space-x-2">
                <span>
                  {login
                    ? "Don't have an Account ?"
                    : "Already have an account ?"}
                </span>
                <Link
                  className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  href={"/login"}
                  onClick={handleToggle}
                >
                  {login ? "SignUp" : "Login"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full border bg-slate-50 md:hidden">
        <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
          Sign up & Get ₹500 OYO Money
        </p>
        <div className="px-10 flex flex-col gap-6">
          <h3 className=" text-2xl font-bold mt-4 ">Login / Signup</h3>
          <p className=" font-bold text-sm mb-1">
            Please enter your phone number to continue
          </p>

          {login ? null : (
            <input
              type="text"
              placeholder="Enter your name..."
              className=" outline-none border my-3 border-black px-3 py-1 w-full h-10"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          )}

          <input
            type="email"
            placeholder="Enter your email..."
            className=" outline-none border my-3 border-black px-3 py-1 w-full h-10"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter yourt password..."
            className=" outline-none border my-3 border-black px-3 py-1 w-full h-10"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className=" w-full h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
            onClick={login ? handleLogin : handleSignup}
          >
            {login ? "Login" : "SignUp"}
          </button>
          <p className=" my-1 text-md flex items-center space-x-2">
            <span>
              {login ? "Don't have an Account ?" : "Already have an account ?"}
            </span>
            <Link
              className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
              href={"/login"}
              onClick={handleToggle}
            >
              {login ? "SignUp" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
