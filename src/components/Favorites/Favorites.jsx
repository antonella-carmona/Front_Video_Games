import Card from "../Card/Card";
import { allFav} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Favorites.module.css";



const Favorites = () => {
  
  const dispatch= useDispatch()
 
  const myFavorites = useSelector((state) => state.myFavorites);
 
  console.log("volvi -->", myFavorites)
 
  useEffect(()=>{
    dispatch(allFav())
  },[dispatch])
  
    return (
        <div className={style.cardContainer}>

        <Link to="/home">
          <div >
            <button id="work" type="button" name="Hover" className={style.backButton}>
            &#129144; Atras
            </button>
          </div>
        </Link>
         
      {myFavorites.length === 0 ? (
        <p>No tienes favoritos seleccionados</p>
      ) : (
        <div className={style.card_publication}>
          {myFavorites?.map((fav) => (
            
            (fav &&
              
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              image={fav.image}
              genres={fav.genres}
              isFavo={true}
            />
          ) ))}
        </div>
      )}
      
      </div>
    )
}

export default Favorites;