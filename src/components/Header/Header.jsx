
import Logo from '../../assets/logo.png'
import moment from "moment";

function Header() {
  return (
    <div className="flex justify-center">
          <div className="text-center">
            <img src={Logo} alt="Logo for Dragon news" />
            <h3>Journalism Without Fear or Favour</h3>
            <h1 className="text-2xl">{moment().format("dddd, MMMM Do YYYY")}</h1>
          </div>
        </div>
  )
}

export default Header