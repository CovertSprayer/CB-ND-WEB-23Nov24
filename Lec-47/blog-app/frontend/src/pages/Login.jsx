import { useState } from "react";
import Input from "../components/Input";
import { loginUser, setToken, setUser } from "../api/auth";
import { useNavigate } from "react-router";


const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      if(res.success){
        navigate("/");
        setToken(res.data.token);
        setUser(res.data.token);
        onLogin();
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong")
    }
  }


  return (
    <div className="max-w-[580px] mt-8 mb-6 p-7 mx-auto">
      <h1 className="text-3xl text-center font-bold">Join the CB Community</h1>
      <p className="text-center mt-1.5 text-sm text-gray-700">
        CB Community is a community of 3,274,960 amazing developers
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <p className="text-right cursor-pointer text-[#3B49DF] text-sm mt-2">
          Forgot password?
        </p>

        {/* {error && <p className="text-red-600 mt-2 text-sm">{error}</p>} */}

        <button
          type="submit"
          className="mt-3 w-full px-4 py-1.5 rounded-md border-[#3B49DF] font-semibold border-2 text-white bg-[#3B49DF]"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm italic text-gray-500 my-5 w-[75%] mx-auto">
        By signing in, you are agreeing to our privacy policy, terms of use and code of conduct.
      </p>

      <hr className="text-gray-300" />

      <p className="text-center text-sm mt-4">
        New to DEV Community? <a href="/register" className="text-blue-600">Create account.</a>
      </p>
    </div>
  );
}

export default Login