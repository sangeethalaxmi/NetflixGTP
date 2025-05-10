import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { setShowGtpSearchBox } from "../utils/gtpSlice";
import { AVAILABLE_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.config.lang);
  const showGtpSearchBox = useSelector((state) => state.gtp.showGtpSearchBox);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        if (uid) {
          // dispatch action
          const { uid, displayName, photoURL, email } = user;
          dispatch(
            addUser({
              uid,
              displayName,
              photoURL,
              email,
            })
          );
          navigate("/browse");
        }
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      // unsubscribel onauthchange when component unmount
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleSwitchGtpSearch = () => {
    dispatch(setShowGtpSearchBox());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex md:justify-between justify-center flex-col md:flex-row">
      <img className="mx-auto md:mx-0 w-44" src={LOGO_URL} alt="logo"></img>
      {user && (
        <div className="p-2 flex gap-1 items-center justify-center md:justify-start">
          {showGtpSearchBox && (
            <select
              className="mr-2 bg-transparent text-white"
              onChange={handleLanguageChange}
              value={lang}
            >
              {AVAILABLE_LANGUAGE.map((lang) => (
                <option
                  className="bg-black text-white"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-500 rounded-sm p-2"
            onClick={handleSwitchGtpSearch}
          >
            {showGtpSearchBox ? "Home" : "GTP Search"}
          </button>
          <img className="w-8 h-8" src={user?.photoURL} alt="profile" />

          <button className="font-bold text-white" onClick={handleSignOut}>
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
