import { Link, useNavigate } from "react-router"

const Navbar = ({ auth, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className='max-w-[1400px] mx-auto flex justify-between items-center px-4 py-3'>
      <span onClick={() => navigate("/")} className='cursor-pointer bg-black text-white text-2xl font-bold px-2 py-1 rounded-sm'>CB</span>
    {/* #EBECFC */}
      <div>
        {auth.isLoggedIn ? 
          <div className="flex gap-4">
            <span 
              onClick={() => {
                onLogout()
                navigate("/login")
              }}
              className='cursor-pointer px-4 py-2 rounded-lg border-[#3B49DF] text-[#3B49DF] font-semibold border-2 hover:text-white hover:bg-[#3B49DF] hover:underline'
            >
              Logout
            </span>

            <div className="cursor-pointer w-10 h-10 border rounded-full flex justify-center items-center bg-purple-700 text-white">{auth.user.name[0]}</div>
          </div> : 
            <>
              <Link to="/login" className='me-3 px-4 py-2 rounded-lg border-white border-2 hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline'>Log in</Link>
              <Link to="/register" className='px-4 py-2 rounded-lg border-[#3B49DF] text-[#3B49DF] font-semibold border-2 hover:text-white hover:bg-[#3B49DF] hover:underline'>Create account</Link>
            </>
        }
       
      </div>
    </nav>
  )
}

export default Navbar