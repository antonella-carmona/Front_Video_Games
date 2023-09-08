// import { useState } from "react";
// import style from "./Paginado.module.css";



// const Paginado = ({pagina, setPagina, maximo, allGames,porPagina}) =>{
//  const [input, setInput] = useState(1) 

 

// const handlerPageNext= ()=>{
//     setInput(input + 1)
//     setPagina(pagina + 1)
// }

// const handlerPagePrev= ()=>{
//     setInput(input - 1)
//     setPagina(pagina - 1)
// }
// //____________________________________________________________________________ 
// const pageNumbers = [];
// for (let i = 1; i <= maximo; i++) {
//   pageNumbers.push(i);
// } 
// const paginado = (pageNumber) => setPagina(pageNumber);
// //_____________________________________________________________________________ 

//   return(
//     <nav className={style.container}>
//         <ul className={style.paginado}>
//             {
//                 pageNumbers && pageNumbers.map((number,i) => (
//                     <li key={i}>
//                         <button onClick={() => paginado(number)} className={style.numeritos}>
//                        <p className={style.numerito}> {number } </p> 
//                         </button> 
//                     </li> 
//                 ))
//             }
//         </ul>
//     </nav>

//   )
// }

// export default Paginado;




//________________________________________________________________________________________


import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {getAllGames,clear} from "../../redux/actions/actions";
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

