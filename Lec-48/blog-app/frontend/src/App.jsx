import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { getUser, isAuthenticated, logout as clearAuth } from "./api/auth";
import ShowBlog from "./components/ShowBlog";
import "./App.css";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [auth, setAuth] = useState({ isLoggedIn: false, user: null });
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const login = () => {
    setAuth({
      isLoggedIn: true,
      user: getUser(),
    });
  };

  const logout = () => {
    clearAuth();
    setAuth({ isLoggedIn: false, user: null });
  };

  useEffect(() => {
    if (isAuthenticated()) {
      setAuth({ isLoggedIn: true, user: getUser() });
    }
    setIsAuthLoading(false);
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (isAuthLoading) return <div>Loading...</div>;
    return auth.isLoggedIn ? children : <Navigate to={"/login"} />;
  };

  return (
    <div>
       <Toaster />
      <header className="shadow-sm">
        <Navbar auth={auth} onLogout={logout} />
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-3">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs/:id" element={<ShowBlog />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
