import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import Header from "./components/Header";
import PrivateRoutes from "./utils/PrivateRoutes";

import { AuthProvider } from "./context/AuthContext";

import "./App.css";

function App() {
    return (
        <div className="App ">
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route path="/" element={<HomePage />} exact />
                        </Route>

                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
