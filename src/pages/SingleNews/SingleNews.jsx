import { Link, useLoaderData } from "react-router-dom"
import Header from "../../components/Header/Header";
import QZone from "../../components/QZone/QZone";
import SocialLinks from './../../components/SocialLinks/SocialLinks';
import LoginWith from "../../components/LoginWith/LoginWith";


function SingleNews() {

  const data = useLoaderData();
  const news = data.data[0];



  return (
    <>
     <Header></Header> 
     <div className="">
      <h1>Dragon news</h1>
      <div className="grid grid-cols-12">

        <div className="col-span-9">
       
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
      {/* Image Section */}
      <div className="mb-4">
        <img 
          src={news?.image_url} 
          alt={news?.title} 
          className="w-full rounded-lg" 
        />
      </div>

      {/* Title and Details */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">
          {news?.title}
        </h1>
        <p className="text-gray-500 mb-2 text-sm">
          Published by <strong>{news?.author?.name}</strong> on {new Date(news?.author?.published_date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">
          {news?.details}
        </p>
        <p className="text-gray-500 text-sm">
          <span className="font-semibold">Views:</span> {news?.total_view} | 
          <span className="font-semibold"> Rating:</span> {news?.rating?.number} ({news?.rating?.badge})
        </p>
      </div>

      {/* Button */}
      <div className="mb-4">
        <Link to={`/category/${news?.category_id}`} className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md flex items-center">
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back news in this category
        </Link>
      </div>

      {/* Editors Insight Section */}
      <h2 className="text-lg font-bold mb-4">Editors Insight</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Replace these placeholders with actual data if available */}
        <div className="bg-gray-200 rounded-lg p-4">
          <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
          <p className="text-gray-500 text-sm">Jan 4, 2022</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
          <p className="text-gray-500 text-sm">Jan 4, 2022</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
          <p className="text-gray-500 text-sm">Jan 4, 2022</p>
        </div>
      </div>
    </div>

        </div>
        <div className="col-span-3 space-y-3">
          <div className="">
            <h2 className="font-bold text-2xl my-2">Login With</h2>
          <LoginWith></LoginWith>
          </div>
          <SocialLinks></SocialLinks>
          <QZone></QZone>
        </div>



      </div>
     </div>
    </>
  )
}

export default SingleNews