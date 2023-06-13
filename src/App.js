import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

import ForgotPassword from "./pages/forgotPassword"
import Offers from "./pages/offers"
import Profile from './pages/profile';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/sign-in" element={<Signin />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/offers" element={<Offers />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
