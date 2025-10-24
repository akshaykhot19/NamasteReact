//Import of named export
import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (
        <div className = "header">
            <div className="logo-container">
                {/* Below src link also the harcoded data so we will keep it in utils folder */}
                <img className = "logo" src = {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;