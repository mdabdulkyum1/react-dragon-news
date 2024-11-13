import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import BreakingNews from "../components/BreakingNews/BreakingNews";
import CategoriesNews from "../components/CategoriesNews/CategoriesNews";
import LoginWith from "../components/LoginWith/LoginWith";
import QZone from "../components/QZone/QZone";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import HomeNavbar from "./../components/HomeNavbar/HomeNavbar";

function Home() {
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <div className="text-center">
            <img src={Logo} alt="Logo for Dragon news" />
            <h3>Journalism Without Fear or Favour</h3>
            <h1 className="text-2xl">Tuesday, November 12, 2024</h1>
          </div>
        </div>
        <div className="lg:w-2/3 mx-auto">
          <BreakingNews></BreakingNews>
        </div>
        <HomeNavbar></HomeNavbar>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 px-6 lg:px-0">
        <div className="">
            <CategoriesNews></CategoriesNews>
        </div>
        <div className="col-span-2">
        <h3 className="font-bold text-xl mb-4">Dragon News Home</h3>
          <Outlet></Outlet>
        </div>
        <div className="">
          <h1 className="text-3xl mb-3">Login With</h1>

          <LoginWith></LoginWith>
          <div className="my-16"></div>
          <SocialLinks></SocialLinks>

          <div className="my-16">
             <QZone></QZone>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
