import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="social-links space-y-4">
      <h2 className="text-3xl font-semibold">Find Us on</h2>
      <button className="flex items-center w-full border border-gray-300 rounded-lg p-3 text-gray-800 hover:bg-gray-100 transition">
        <FaFacebookF className="mr-2" />
        <span>Facebook</span>
      </button>
      <button className="flex items-center w-full border border-gray-300 rounded-lg p-3 text-gray-800 hover:bg-gray-100 transition">
        <FaTwitter className="mr-2" />
        <span>Twitter</span>
      </button>
      <button className="flex items-center w-full border border-gray-300 rounded-lg p-3 text-gray-800 hover:bg-gray-100 transition">
        <FaInstagram className="mr-2" />
        <span>Instagram</span>
      </button>
    </div>
  );
}

export default SocialLinks;
