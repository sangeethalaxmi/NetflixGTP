import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute text-white p-8 bg-black bg-opacity-85 rounded-md mx-auto my-36 right-0 left-0 ">
        <h1 className=" text-3xl font-bold py-4">
          Sign {!isSignInForm ? "Up" : "In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 bg-gray-700 rounded-sm border-white w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-3 my-4 bg-gray-700 rounded-sm border-white w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 my-4 bg-gray-700 rounded-sm border-white w-full"
        />
        <button className=" py-2 my-6  bg-red-700 w-full  rounded-md font-semibold">
          Sign {isSignInForm ? "Up" : "In"}
        </button>
        {isSignInForm ? (
          <p className="py-2 ">
            New to netflix?
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              Signup now
            </span>
          </p>
        ) : (
          <p className="py-2 ">
            Already a user?
            <span>SignIn now</span>
          </p>
        )}
      </form>
    </div>
  );
};
export default Login;
