import {  useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../components/Navbar/Navbar';

function Profile() {
  const { currentUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    alert("You have been logged out.");
  };

  return (
    <>
        <Navbar></Navbar>
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <img
          className="w-32 h-32 rounded-full border-4 border-pink-500 object-cover"
          src={
            currentUser?.photoURL ||
            "https://i.ibb.co.com/p0fqz2f/Default-Profile.png"
          }
          alt="User Avatar"
        />
      </div>
      <button 
        // onClick={handlePhotoChange} 
        className="block mx-auto mb-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
        Update Profile Photo
      </button>
      <h2 className="text-2xl font-semibold text-center text-gray-800">{currentUser ? currentUser.name : 'John Doe'}</h2>
      <p className="text-center text-gray-600">Web Developer</p>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">About Me</h3>
        <p className="text-gray-600">
          Passionate web developer with a knack for creating elegant solutions
          in the least amount of time. Specializing in HTML, CSS, JavaScript,
          and modern web frameworks.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Contact Information</h3>
        <ul className="text-gray-600">
          <li><span className="font-medium">Email:</span> {currentUser ? currentUser.email : 'john.doe@example.com'}</li>
          <li><span className="font-medium">Phone:</span> (123) 456-7890</li>
          <li><span className="font-medium">Location:</span> New York, USA</li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit Profile Details
        </button>
      </div>
      <div className="mt-4 text-center">
        <button 
          onClick={handleLogOut} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Log Out
        </button>
      </div>
    </div>
    </>
  );
}

export default Profile;
