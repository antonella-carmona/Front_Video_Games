import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../../views/Search/Search";
import Filtrado from "../filtrado/Filtrado"


const NavBar = () =>{

    return(
       
          <div className={style.container}>
         
              <div className={style.barra}>  <Filtrado /> </div>
            
              <div  className={style.create}>  <Link to="/create" style={{ color: 'white' }}>CREAR JUEGO</Link> </div>
          
              <div className={style.SearchBar}>
              <Search/>
              </div>

             
          </div>
        
    )
}

export default NavBar;