import style from "./Card.module.css";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {postFavorite, removeFav} from "../../redux/actions/actions"

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo digamos.
const Card = ({id, name, image, genres, isFavo})=>{
 
   const dispatch= useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites);

   const isFav = myFavorites.some((fav) => fav.id === id);

  
 

 const handleFavorite = () => {
  if (isFav) {
    dispatch(removeFav(id));
  } else {
    dispatch(postFavorite(id));
  }
};

//--------------------------------   
    return(
      <div className={style.oneCard}>

      <div className={style.favoriteButton} onClick={(event) =>handleFavorite(event)}>
        {isFav ? "❤️" : "🤍"}
      </div>


        <Link to={`/detail/${id}`}  style={{textDecoration: "none"}}  >

         <div className={style.name}> <h2>{name}</h2> </div> 
         
         <div className={style.imagen}>  {image? (<img src={image} alt="" width='200px' height='200px' />)  :
           (< img src="https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png"
              alt="Not Found"
              width="350px"
              height="200px"  />  )}
            
        </div>

         <div className={style.genres}>
            {Array.isArray(genres) ? (
              genres.map((item, index) => {
                if (typeof item === "string") {
                  return  <span key={index}>◼️ {item} </span>;
                } else if (typeof item === "object") {
                  for (let key in item) {
                    return <span key={index}>◼️ {item[key]} </span> ;
                  }
                }
                return null;
              })
            ) : (
              <p>No genres available</p>
            )}
       </div>


      
            </Link>
      </div>
    )
  }
  
  export default Card;