import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <header className="shadow-sm">
        <Navbar/>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>

      
    </div>
  )
}

export default App