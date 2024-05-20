import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { useEffect} from "react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  useEffect(() => {
    document.title = "MSA Holidays.com"; 
  }, []);
  return (
    <div className="bg-blue-200 py-9">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-yellow-600 font-bold tracking-tight">
          <Link to="/">MSA Holidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-yellow-600 px-3 font-bold hover:bg-white"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-yellow-600 px-3 font-bold hover:bg-white"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-blue-200 items-center text-yellow-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
