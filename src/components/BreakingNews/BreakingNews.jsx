
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function BreakingNews() {
  return (
    
    <div className="flex">
              <button className="btn bg-red-400 text-white font-bold" >BreakingNews</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to={'/'} className="mr-12"> I can be a React component, multiple React components.</Link>
                <Link to={'/login'} className="mr-12 text-purple-700">  I can be a React component, multiple React components.</Link>
                <Link to={'/'} className="mr-12"> I can be a React component, multiple React components.</Link>
            </Marquee>
        </div>
  )
}

export default BreakingNews