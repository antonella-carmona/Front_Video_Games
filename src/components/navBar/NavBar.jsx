// import { Link } from "react-router-dom";
// import style from "./NavBar.module.css";
// import Search from "../../views/Search/Search";
// import Filtrado from "../filtrado/Filtrado"
// import Favorites from "../Favorites/Favorites";

// const NavBar = () =>{

//     return(
//         <div  className={style.back}>
//           <div className={style.container}>
         
//               <Filtrado />
          
//               <Link to="/create"  className={style.create}>CREAR JUEGO</Link>
          
//               <div className={style.SearchBar}>
//               <Search/>
//               </div>

             
//               <Link to="/favoritos"> <button className={style.buttonFav}>Favoritos</button> </Link>
             
//           </div>
//         </div>
//     )
// }

// export default NavBar;

//_____________________________________________________________________________________________


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