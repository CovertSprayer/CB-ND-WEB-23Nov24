import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { useState } from "react"
import { Navigate } from "react-router"

const App = () => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null
  });

  const login = (user) => {
    setAuth({
      isLoggedIn: true,
      user: user
    })
  }

  const logout = () => {
    setAuth({
      isLoggedIn: false,
      user: null
    })
  }

  const ProtectedRoute = ({ children }) => {
    return auth.isLoggedIn ? children : <Navigate to={"/login"} />
  }

  return (
    <div>
      <header className="shadow-sm">
        <Navbar auth={auth}/>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-3">
        <Routes>
          <Route path="/" element={
            // <ProtectedRoute>
              <Home/>
            // </ProtectedRoute>
          } />
          <Route path="/login" element={<Login onLogin={login}/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>

      
    </div>
  )
}

export default App