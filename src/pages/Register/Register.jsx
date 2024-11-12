import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"


function Register() {
  return (
    <>
    <Navbar></Navbar>
    <div className="my-16">
        <h1 className="text-center text-3xl font-bold">Please Register</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo Url</span>
        </label>
        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" className="input input-bordered" required />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="text-center mb-3 text-xl">Already have an account? <Link to={'/login'} className="text-blue-600 font-bold underline">Login</Link></p>
  </div>
  </>
  )
}

export default Register