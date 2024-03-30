import React from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
    const { user, loginUser } = useContext(AuthContext);

    console.log("refresh:", user);
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
