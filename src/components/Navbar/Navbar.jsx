import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Navbar() {

  const { currentUser, logOut }  = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    alert("You have been logged out.");
  };

  const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    {
      currentUser &&
    <li><NavLink to={'/profile'}>Profile</NavLink></li>
    }
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/News'}>news</NavLink></li>
    {
      !currentUser &&
    <li><NavLink to={'/login'}>Login</NavLink></li>
    }
  </>
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Dragon News</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">



        {
          currentUser ? <>
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                title={currentUser.displayName}
                alt={currentUser.displayName}
                src={
                  currentUser?.photoURL ||
                  "https://i.ibb.co.com/p0fqz2f/Default-Profile.png"
                } />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Settings</a></li>
            <li onClick={handleLogOut}><a>Logout</a></li>
          </ul>
          </div>
          
          </> :
          <>
          
          <Link to={'/register'} className="btn">Sing Up</Link>
          <Link to={'/login'} className="btn">Log In</Link>
          </>
         }
        

        
 
      </div>
    </nav>
  );
}

export default Navbar;
