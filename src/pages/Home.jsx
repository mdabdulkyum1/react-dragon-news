import { Outlet } from "react-router-dom";
import BreakingNews from "../components/BreakingNews/BreakingNews";
import CategoriesNews from "../components/CategoriesNews/CategoriesNews";
import LoginWith from "../components/LoginWith/LoginWith";
import QZone from "../components/QZone/QZone";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import HomeNavbar from "./../components/HomeNavbar/HomeNavbar";
import Header from "../components/Header/Header";


function Home() {
  return (
    <>
      <div className="">
        <Header></Header>
        <div className="lg:w-2/3 mx-auto">
          <BreakingNews></BreakingNews>
        </div>
        <HomeNavbar></HomeNavbar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 px-6 lg:px-0">
        <div className="col-span-3">
            <CategoriesNews></CategoriesNews>
        </div>
        <div className="col-span-6">
        <h3 className="font-bold text-xl mb-4">Dragon News Home</h3>
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
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
