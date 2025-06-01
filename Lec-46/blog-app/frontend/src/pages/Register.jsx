import { useState } from "react";
import Input from "../components/Input";
import axios from "axios"
import { useNavigate } from "react-router";
import API from "../common/api";
import { registerUser } from "../api/auth";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newError = {}
    if(!form.fullName) newError.fullName = "Name is required";
    if(!form.username) newError.username = "Username is required";
    if(!form.email) newError.email = "Email is required";
    if(!form.password) newError.password = "Password is required";
    if(!form.confirmPassword) newError.confirmPassword = "Password is required";

    if(form.password !== form.confirmPassword){
      newError.confirmPassword = "Password does not match";
    }
    setError({...newError});

    for(let key in error){
      if(error[key] != ""){
        return;
      }
    }

    try {
      const res = await registerUser(form);
      if(res.success){
        navigate("/login")
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong")
    }
  }

  const handleChange = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(e.target.name == "email") {
      emailRegex.test(e.target.value) 
      ? setError(err => ({...err, [e.target.name]: ""}))
      : setError(err => ({...err, [e.target.name]: "Email not valid"}))
    } else{
      setError(err => ({...err, [e.target.name]: ""}))
    }
    setForm({...form, [e.target.name] : e.target.value})
  }

  // const handleChangeEmail = (e) => {
  //   setForm({...form, email: e.target.value});
  // }

  
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[580px] mt-8 mb-6 p-7 mx-auto shadow-sm"
    >
      <p className="pb-4 font-bold text-base">Create your account</p>

      <Input
        label="Name"
        type="text"
        name="fullName"
        value={form.name}
        error={error.fullName}
        onChange={handleChange}
      />
      <Input
        label="Username"
        type="text"
        name="username"
        value={form.username}
        error={error.username}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        error={error.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        error={error.password}
        onChange={handleChange}
      />
      <Input
        label="Password Confirmation"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        error={error.confirmPassword}
        onChange={handleChange}
      />

      {/* {error && <p className="text-red-600 text-sm mt-2">{error}</p>} */}

      <button
        type="submit"
        className="mt-3 w-full px-4 py-1.5 rounded-md border-[#3B49DF] font-semibold border-2 text-white bg-[#3B49DF]"
      >
        Sign up
      </button>
    </form>
  );
};

export default Register;
