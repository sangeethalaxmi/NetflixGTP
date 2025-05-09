import { useRef, useState } from "react";
import { validateForm } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const user = useSelector((store) => store.user);
  const handleFormSubmit = () => {
    // add validation to form and then submit form
    let errorMessage;
    const nameValue = name.current?.value ?? null;

    errorMessage = validateForm(
      nameValue,
      email.current.value,
      password.current.value
    );

    setErrorMessage(errorMessage);
    if (errorMessage) return;
    // either signup or signin
    if (!isSignInForm) {
      // signup - create user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Sangeetha",
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOqqkpSd1JqpJ1LTGbcn50g2OsCPIqaEKww&s",
          })
            .then(() => {
              // after getting user uppdated update the state again
              const { uid, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName: name.current.value,
                  photoURL:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOqqkpSd1JqpJ1LTGbcn50g2OsCPIqaEKww&s",
                })
              );
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div>
        <img className="absolute" src={BACKGROUND_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute text-white p-8 w-[35%] bg-black bg-opacity-85 rounded-md mx-auto my-36 right-0 left-0 "
      >
        <h1 className=" text-3xl font-bold py-4">
          Sign {!isSignInForm ? "Up" : "In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-3 my-4 bg-gray-700 rounded-sm border-white w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          ref={email}
          className="p-3 my-4 bg-gray-700 rounded-sm border-white w-full"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-3 my-4 bg-gray-700 rounded-sm border-white w-full"
        />
        <p className="text-red-600 font-bold text-xl">{errorMessage}</p>
        <button
          className=" py-2 my-6  bg-red-700 w-full  rounded-md font-semibold"
          onClick={handleFormSubmit}
        >
          Sign {!isSignInForm ? "Up" : "In"}
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
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              SignIn now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};
export default Login;
