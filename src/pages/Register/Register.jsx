import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";


function Register() {

  const { createUser } = useContext(AuthContext);

  const handelRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then((result)=>{
        console.log(result.user)
        
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        }).then(()=>{
            console.log("success")
        }).catch((error)=> {
      console.log("ERROR", error.massage)
    })
    }).catch((error)=> {
      console.log("ERROR", error.massage)
    })

    e.target.reset();
    // console.log(name, photo, email, password)
  }






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
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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