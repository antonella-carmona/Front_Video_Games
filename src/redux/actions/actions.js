import axios from "axios";
import { GETALLGAMES, GETBYNAMEGAME, GETBYIDGAME, GETGENRES, POSTGAME, DELETEGAME, PUTGAME, 
  ALLPLATFORMS,CLEAR_STATE, FILTER_CARD_GENRES, ORDER_CARDS, SORT_RATING, FILTER_GAMES } from "../actionsTypes/index";
// poner try cach a todas las actions para ver los errrores
export const getAllGames = ()=>{
  return async (dispatch)=> {
    const response = await axios.get("/videogames")
    return dispatch({
        type: GETALLGAMES,
        payload: response.data
    })
  }
}
//_____________________________________
export const getAllGenres = ()=>{
    return async (dispatch)=> {
        try {
            const response = await axios.get("/genres")
        return dispatch({
            type: GETGENRES,
            payload: response.data
        })
        } catch (error) {
            console.log(error.response.data.error)
        }
        
      }
}
//_______________________________________
export const getAllByName = (name) =>{
    return async (dispatch)=> {
        try {
            const response = await axios.get(`/videogames?name=${name}`)
            return dispatch({
            type: GETBYNAMEGAME,
            payload: response.data
        })
        } catch (error) {
            alert(error.response.data.error)
            
        }
        
      }
}
//______________________________________
export const getById = (id) =>{
    return async (dispatch)=> {
        const response = await axios.get(`/videogames/${id}`)
        return dispatch({
            type: GETBYIDGAME,
            payload: response.data
        })
      }
}
//_____________________________________
export const postGames= (videogame)=>{
    return async (dispatch)=> {
        try {
            const response = await axios.post("/videogames", videogame)
            return dispatch({
                type: POSTGAME,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
       
      }
}
//_________________________________
export const deleteGame = (id) =>{
    return async (dispatch)=> {
      // console.log("que id llega en la action?  ", id)
      try {
        const response = await axios.delete(`/videogames/${id}`)
        return dispatch({
            type: DELETEGAME,
            payload: response.data
        })
      
      } catch (error) {
        alert(error.response.data.error)
      }
    }
}
//______________________________________
export const putGame = (id) =>{
    return async (dispatch)=> {
        const response = await axios.put(`/videogames/${id}`)
        return dispatch({
            type: PUTGAME,
            payload: response
        })
      }
}
//_______________________________________
export const getAllPlatforms = ()=>{
    return async (dispatch)=> {
      const response = await axios.get("/platforms")
      return dispatch({
          type: ALLPLATFORMS,
          payload: response.data
      })
    }
  }
  //________________________________________
  //fn para limpiar
  export const clear = ()=>{
    return async (dispatch)=> {
      return dispatch({
          type: CLEAR_STATE,
      })
    }
  }

  //____________________________________________________-

  export const filterCardGenres= (genero)=>{
    return async (dispatch)=>{
      // console.log('parametro que me llega a la action:', genero);
     return dispatch ({type: FILTER_CARD_GENRES, payload: genero})   
    }
}
//_________________________________________________
export const orderCards = (orden)=>{
  return async (dispatch)=>{
    // console.log('parametro que me llega a la action:', orden);
   return dispatch ({type: ORDER_CARDS, payload: orden})   
  }
  
}
//________________________________________________________

export const  sortRating = (rating)=> {
  return (dispatch)=>{ 
   return dispatch ({type: SORT_RATING, payload : rating})
}
}
//_________________________________________________________
export const  filterGames = (game)=> {
  // console.log("que me llego en la action? -->", game)
  return (dispatch)=>{ 
   return dispatch ({type: FILTER_GAMES, payload : game})
}
}
