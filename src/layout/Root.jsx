import { Outlet } from "react-router-dom"
// import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


function Root() {
  return (
    <div className="max-w-7xl mx-auto">
        {/* <Navbar></Navbar> */}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root