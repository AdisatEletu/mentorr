import React from "react";
import {Link} from "react-router-dom";

const Header = props => {
    return (
        <header className="site-header pos-f white-ft primary-bg fixed-to-top light-shadow ">
            <div className={"pointer"}>Mentorr</div>
            <div className={"d-flex justify-content-end"}>
                <ul>
                    <Link to={"/register"}>
                        <li className={"b-links pointer"}>
                            Become a Mentor
                        </li>
                    </Link>
                    <Link to={"/login"}>
                        <li>
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
