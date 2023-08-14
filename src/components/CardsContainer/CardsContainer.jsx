import { useState } from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import {useSelector} from "react-redux";
// import {getAllGames} from "../../redux/actions/actions";
import Paginado from "../Paginado/Paginado"



const CardsContainer = ()=>{
  const allGames = useSelector(state=>state.allGames); //allVideogames

  const [pagina, setPagina] = useState(1);  //PAGINA ACTUAL
  const [porPagina, setPorPagina] = useState(15); //POR PAGINA 15 CARDS
 

  const maximo= Math.round(allGames.length/ porPagina) //redondea 7
  

  return(
    <div >
     {/* El componente Paginado, que recibe props para manejar la paginación */}
     <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} allGames={allGames.length} porPagina={porPagina}/>
        
        
        <div className={style.cardContainer} >
{/* .slice() es un método que se utiliza en las arrays en JavaScript para crear una nueva copia de una porción de la array original. Se define mediante dos índices (inicio y fin)  */}
        {allGames.slice(
          (pagina - 1) *  porPagina , (pagina -1 ) * porPagina + porPagina
        ).map((game, i) =>{


          //---------------------------------------------------
  // Verificar si la estructura de datos de genres es diferente y adaptarla si es necesario
            if (game.genres === undefined) {
              game.genres = game.Genres
            }  else{
              game.genres = game.genres
            }


          //-------------------------------------------------

            return  <div key={i} className={style.lasCards} > <Card
             Key={game.id}
             id= {game.id}
             name= {game.name}
             image= {game.image}
             released= {game.released}
             description= {game.description}
             rating= {game.rating}
             genres={game.genres}                                                                
             platforms= {game.platforms}
             created= {game.created}
            />
          </div>   
        })  }
      </div>
        
    </div>
  )
}

export default CardsContainer;