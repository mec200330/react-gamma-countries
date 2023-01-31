import { NavLink } from "react-router-dom";

const Navbar =()=>{

    return(
        

      <nav>
         
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'selected' : ''}>LAB - WikiCountries</NavLink>
           
      </nav>
        
    )
}
export default Navbar