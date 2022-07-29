import React from "react";
import './Style.scss'

const Navbar: React.FC = () => {
    return (
        <>
            <div className="nav">
                <p>LILA MODELS</p>


                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Models
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Apply
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

            </div>
        </>
    );
}

export default Navbar;