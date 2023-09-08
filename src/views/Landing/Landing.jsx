import { Link } from "react-router-dom";
import style from "./Landing.module.css";



const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.content}>
        <Link to="/home" className={style.landingLink}>
          INGRESAR
        </Link>
      </div>
    </div>
  );
}

export default Landing;
