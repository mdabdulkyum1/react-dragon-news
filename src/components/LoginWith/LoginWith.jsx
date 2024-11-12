import { FaGithub, FaGoogle } from "react-icons/fa";

function LoginWith() {
  return (
    <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-center w-3/4 border border-gray-800 rounded-lg py-2 text-gray-800 hover:bg-black hover:text-white transition">
              <FaGoogle className="mr-2" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center w-3/4 border border-gray-800 rounded-lg py-2 text-gray-800 hover:bg-black hover:text-white transition">
              <FaGithub className="mr-2" />
              <span>GitHub</span>
            </button>
          </div>
  )
}

export default LoginWith