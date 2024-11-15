import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

function Register() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      setError(
        "Password must be between 6 and 30 characters, and include at least one lowercase letter, one uppercase letter, one numeric digit, and one non-alphanumeric character."
      );
      return;
    }

    setSuccess("");
    setError("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Register successfully!");
        navigate("/");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.massage);
          });
      })
      .catch((error) => {
        setError(error.code);
      });

    e.target.reset();
    // console.log(name, photo, email, password)
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="my-16">
        <h1 className="text-center text-3xl font-bold">Please Register</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handelRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mb-3 text-xl">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600 font-bold underline">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}

export default Register;
