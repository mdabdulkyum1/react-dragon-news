import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

function Login() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const notify = () => {
    toast.success(`Login successfully!!!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const singIn = (e) => {
    e.preventDefault();

    setError(null);
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        notify();
        setSuccess("Login successfully!!!");
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });

    e.target.reset();
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="my-16">
        <h1 className="text-center text-3xl font-bold">Please Login</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
        <form className="card-body" onSubmit={singIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {success && <p className="text-green-600">{success}</p>}
          {error && (
            <p className="text-red-600">Login Failed :( Please Try again...</p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-3 text-xl">
          Do not have an account{" "}
          <Link to={"/register"} className="text-blue-600 font-bold underline">
            Register
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
