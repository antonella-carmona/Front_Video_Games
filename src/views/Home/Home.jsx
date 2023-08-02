import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {getAllGames,clear} from "../../redux/actions/actions";
import style from "./Home.module.css";
import Loading from "../../components/Loader/Loader";

// que haga dispatch despache la actions


const Home = () =>{
  const dispatch = useDispatch();
  const allVgames = useSelector((state) => state.allGames) 
//______________monta-actualiza-desmonta_____________________________________________________________
//ciclos de vidas de este component particular
  useEffect(()=>{
  dispatch(getAllGames()) //--> montaje
  
  return()=>{
    dispatch(clear())  //--> Limpieza | desmonta
  }
  },[dispatch]); //--> cada vez que se actualiza algo de getAllGames

 //____________LOADER_______________________________________________
if (allVgames.length === 0) {
  return <div >
    <Loading />
  </div>
} 
//____________________________________________________________________________  


  return(
    <div className={style.contenedorHome}>
        {/* <h1 className={style.titleHome}>Home</h1> */}
        <CardsContainer/>
    </div>
  )
}

export default Home;

