import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getById, clear , deleteGame} from "../../redux/actions/actions";
import { Link , useHistory} from "react-router-dom";
import { useEffect } from "react";



const Detail = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();

  const gameDetalle = useSelector((state) => state.detailGame);
 

  useEffect(() => {
    dispatch(getById(id));
    return()=>{
      dispatch(clear())
    }
  }, [dispatch, id]);


  const handleDelete = async (event) => {
    
    // Dispatcha la acción de eliminación con el ID del elemento
   await dispatch(deleteGame(id));
   history.push("/home");
  };
 
 // Verificar si el ID actual coincide con el ID del juego creado (UUID)__________
    const isUUID = (id) => {
      const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
      return uuidPattern.test(id);
    };
    const isUUIDType = isUUID(id);

//_________________platforms y genres de string --> array_____________________________
  const platformsArray = gameDetalle?.platforms?.split(",") || [];
  const genresArray = gameDetalle?.genres?.split(",") || [];
  const genresArray2 = gameDetalle?.Genres || [];
  const todo= [...genresArray, ...genresArray2]
//___________________________________________________________________________

  return (
    <div className={style.container}>

      {isUUIDType && (
         <div>
           <button onClick={(event) => handleDelete(event)} className={style.backButtonDos}>Eliminar</button>
          </div>
      )}
    
      
        <Link to="/home">
          <div >
            <button id="work" type="button" name="Hover" className={style.backButton}>
            &#129144; Atras
            </button>
          </div>
        </Link>


      <div>
        <img className={style.image} 
          
          src={gameDetalle?.image}
        />
      </div>
      
      <h2>{gameDetalle?.name}</h2>

      <div  className={style.platformsContainer}>
        
        <span> <h4>Fecha lanzamiento: </h4>{gameDetalle?.released}</span>
        </div>
        <div>
        <h4> Plataformas:</h4>
         
          {platformsArray.length > 0 ? (
              platformsArray.map((elemento, index) => (
                <span key={index} className="platformItem">{elemento.trim()} | </span>
              ))
            ) : (
              <p>No se encontraron plataformas válidas</p>
            )}
        </div>
      

{/* //__________________________________________________ */}
       <div className={style.genresContainer}>
          <h4>Generos: </h4>
            <div>
                  {Array.isArray(todo) ? (
                  todo.map((item, index) => {
                  if (typeof item === "string") {
                    return  <span key={index} className="platformItem"> {item.trim()} | </span>;
                  } else if (typeof item === "object") {
                    for (let key in item) {
                      return <span key={index} className="platformItem"> {item[key]} </span> ;
                    }
                  }
                      return null;
                    })
                  ) : (
                    <p>No genres available</p>
                  )}
          </div>
      </div> 


{/* //__________________________________________________ */}      
  
      <div  className={style.rating}>
          
      <h4>Rating:</h4> <span>{gameDetalle?.rating}</span>
           
      </div>

            <div className={style.description}>
                
                <h4>Description:</h4>
                <span> {gameDetalle?.description}</span>
                
            </div>

    </div>
  );
};

export default Detail;

