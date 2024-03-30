import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    // console.log("user:", user);
    return (
        <div className=" h-24 w-full flex gap-6">
            {user && <h1>{user.username}</h1>}
            <Link to="/">Home</Link>
            {user ? (
                <button className="border-2 p-0 m-0" onClick={logoutUser}>
                    Logout
                </button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
};

export default Header;
