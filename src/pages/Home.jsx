import Logo from "../assets/logo.png";
import BreakingNews from "../components/BreakingNews/BreakingNews";
import HomeNavbar from './../components/HomeNavbar/HomeNavbar';

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
        <div className="w-2/3 mx-auto">
          <BreakingNews></BreakingNews>
        </div>
        <HomeNavbar></HomeNavbar>
      </div>
    </>
  );
}

export default Home;
