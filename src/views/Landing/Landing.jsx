import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Landing.module.css";
import gifBackground from "../../img/giphy.gif"


const Landing = () =>{
    return(
      <div className={style.landingContainer}>

          {/* <h1 className={style.landingTitle}>Video juegos</h1> */}
          <Link to="/home"  className={style.landingLink}>
           INGRESAR
          </Link>
          
      </div>
    )
  }
  
  export default Landing;