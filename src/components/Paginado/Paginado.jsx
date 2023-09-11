import {useState } from "react";
import style from "./Paginado.module.css";



const Paginado = ({pagina, setPagina, maximo, allGames,porPagina}) =>{
    const [paginaActual, setPaginaActual] = useState(pagina);

 
 const handlerPageNext = () => {
    if (pagina < maximo) {
      setPagina(pagina + 1);
      setPaginaActual(pagina + 1);
    }
  };

  const handlerPagePrev = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
      setPaginaActual(pagina - 1); 
    }
  };
//_____________________________________________________________________________ 

  return(
    <nav className={style.container}>
      <ul className={style.paginado}>
        <li>
          <button onClick={handlerPagePrev} className={style.numeritos}>
            Atras
          </button>
        </li>

        <li>
          <p className={style.numeritosTres}>{paginaActual}</p> {/* Número de página actual */}
        </li>

        <li>
          <button onClick={handlerPageNext} className={style.numeritosDos}>
             Siguiente
          </button>
        </li>
      </ul>
    </nav>

  )
}

export default Paginado;

//_____________________________________________________________________________________________

