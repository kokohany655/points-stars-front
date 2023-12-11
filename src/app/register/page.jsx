"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import baseUrl from "../../../baseUrl";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referCode, setReferCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await baseUrl.post("/users/", {name, email, password, referCode});
      router.push("/login")
    } catch (error) {
      console.log(error);
    }
    console.log({name, email, password });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/")
    }
  }, [])

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#151515] rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-white text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6 text-black" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name"
                  required
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-left"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="referral"
                  className="block mb-2 text-sm font-medium text-left"
                >
                  Referral Code
                </label>
                <input
                  type="text"
                  name="referral"
                  id="referral"
                  placeholder="Referral Code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={referCode}
                  onChange={({ target }) => setReferCode(target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-white">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
