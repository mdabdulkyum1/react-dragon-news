import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Login() {
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const singIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        navigate('/');
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.massage);
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
