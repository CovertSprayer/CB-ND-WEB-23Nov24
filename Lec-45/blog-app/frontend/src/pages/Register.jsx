import Input from "../components/Input";

const Register = () => {

  const handleSubmit = () => {

  }

  const handleChange = () => {}

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[580px] mt-8 mb-6 p-7 mx-auto shadow-sm"
    >
      <p className="pb-4 font-bold text-base">Create your account</p>

      <Input
        label="Name"
        type="text"
        name="name"
        value={""}
        onChange={handleChange}
      />
      <Input
        label="Username"
        type="text"
        name="username"
        value={""}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={""}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={""}
        onChange={handleChange}
      />
      <Input
        label="Password Confirmation"
        type="password"
        name="confirmPassword"
        value={""}
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
