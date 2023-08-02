import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../../views/Search/Search";
import Filtrado from "../filtrado/Filtrado"

const NavBar = () =>{

    return(
        <div  className={style.back}>
          <div className={style.container}>
          {/* <Link to="/home">HOME</Link> */}
          <Filtrado />
          <Link to="/create"  className={style.create}>CREAR JUEGO</Link>
          <div className={style.SearchBar}>
          <Search/>
          </div>
          </div>
        </div>
    )
}

export default NavBar;