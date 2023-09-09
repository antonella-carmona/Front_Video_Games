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
         
              <Filtrado />
          
              <Link to="/create"  className={style.create}>CREAR JUEGO</Link>
          
              <div className={style.SearchBar}>
              <Search/>
              </div>

             
              {/* <Link to="/favoritos"> <button className={style.buttonFav}>Favoritos</button> </Link> */}
             
          </div>
        
    )
}

export default NavBar;