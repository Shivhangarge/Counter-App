import { React } from "react";


const Navbar = ({toggleDarkMode}) => {

    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-primay px-3'>
            <span className= "navbar-brand">Task Counter Dashboard</span>
            <button className= "btn btn-outline-light ms-auto" onClick = {toggleDarkMode}>
                Toggle Theme
            </button>
            </nav>
    );
};

export default Navbar;