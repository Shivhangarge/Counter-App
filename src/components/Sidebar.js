import { React } from "react";

const Sidebar = () => {

    return(
        <nav className = "col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 px-3">
                <ul className= "nav flex-column">
                    <li className="nav-item">
                        <span className="nav-link">Reports</span>
                    </li>
                    <li className= "nav-items">
                        <span className="nav-link">Settings</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;