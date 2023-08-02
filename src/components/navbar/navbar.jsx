// import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"

const navbar = () => {
  // const {user} = useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="nav__container">
            <span className="logo">Go For It</span>
            <div className="nav__items">
                <button className="nav__button">Register</button>
                <button className="nav__button">Login</button>
            </div>
        </div>
    </div>
  )
}

export default navbar
