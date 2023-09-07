// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import style from "./Landing.module.css";
// import Consola from "../../img/consola.png";


// const Landing = () =>{
//     return(
//       <div className={style.landingContainer}>

//                   <div>
//                       <Link to="/home"  className={style.landingLink}>
//                       INGRESAR
//                       </Link>
//                   </div> 


                 

//                       <div>
//                             <figure className={style.image}>
//                             <img src={Consola} alt='Consola' />
//                             </figure>   
//                             </div>
                  
                  
//       </div>
//     )
//   }
  
//   export default Landing;


// ------------------------------------------------------------------------------

import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import Consola from "../../img/consola.png";


const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.content}>
        {/* <figure className={style.image}>
          <img src={Consola} alt='Consola' />
        </figure> */}
        <Link to="/home" className={style.landingLink}>
          INGRESAR
        </Link>
      </div>
    </div>
  );
}

export default Landing;
