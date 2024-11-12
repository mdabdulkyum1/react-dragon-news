import { Outlet } from "react-router-dom"
// import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


function Root() {
  return (
    <div>
        {/* <Navbar></Navbar> */}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root