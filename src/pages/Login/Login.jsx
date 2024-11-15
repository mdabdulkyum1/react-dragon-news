import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

function Login() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
 

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

  const { signInUser, setLoading, verifyEmail } = useContext(AuthContext);

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
        setLoading(false)
        setSuccess("Login successfully!!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error);
      });

    e.target.reset();
  };


  const resetPassword = () => {
    const email = emailRef?.current?.value;
    verifyEmail(email)
    .then(() => {
      setSuccess("Password reset email sent!")
      // mu3sU7TfMQQziCR
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

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
            ref={emailRef}
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

            <label className="input input-bordered flex items-center gap-2">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="password"
              name="password"
              className="grow"
              required
            />

      <span onClick={handelShowPassword}>
        {showPassword ? (
          <FaEye className="cursor-pointer" />
        ) : (
          <IoIosEyeOff className="cursor-pointer" />
        )}
      </span>

            </label>
            
          </div>
          <label className="label">
            <button onClick={resetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</button>
          </label>
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
