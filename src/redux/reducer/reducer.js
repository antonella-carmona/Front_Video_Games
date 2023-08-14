import { GETALLGAMES, GETBYNAMEGAME, GETBYIDGAME, GETGENRES, ALLPLATFORMS, CLEAR_STATE,
   POSTGAME , FILTER_CARD_GENRES, ORDER_CARDS, SORT_RATING, FILTER_GAMES, DELETEGAME, POST_FAV, REMOVE_FAV, ALL_FAV} from "../actionsTypes";


  // Obtener los favoritos desde el localStorage o un array vacío si no hay datos guardados
  //  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];


let inicialState= {
    copyAllGames: [],  //--> copia para que no se pisen 
    allGames: [],    // --> todos juegos
    genresData: [],
    detailGame: [],
    genres: [],   //-->  todos los generos
    platforms: [], //--> todas las plataformas
    clear: [],
    myFavorites: []
   
}

const rootReducer= (state= inicialState, action)=>{
  switch(action.type){

    case GETALLGAMES : return{
      ...state,
      allGames : action.payload,
      copyAllGames: action.payload,
    };
//___________________________________________    
    case GETGENRES:
      return {
        ...state,
        genres: action.payload,
      };
//___________________________________________      
    case ALLPLATFORMS:
        return {
          ...state,
          platforms: action.payload,
        };  
//__________________________________________________________        
    case GETBYNAMEGAME:
          return {
            ...state,
            allGames: action.payload,
          };
//_____________________________________________
case POSTGAME :
      return { ...state } 
//_____________________________________________
    case GETBYIDGAME:
      return {
        ...state,
        detailGame: action.payload,
      };    
//___________________________________________LIMPIAR STADO
case CLEAR_STATE: 
        return{
          ...state,
        clear: {}
        }
//_______________FILTER GENRES____________________________

case FILTER_CARD_GENRES: 
     const todosGames= state.copyAllGames
     const filtrados= action.payload === "Todos" ? todosGames : todosGames.filter(
       p => p.genres.includes(action.payload))
      
       if(filtrados.length === 0){
        alert(`No hay videojuegos con el genero ${action.payload}`)
        return state
       }  else { return { ...state, allGames: filtrados } }    
  
//_______________ORDER______________________________
case ORDER_CARDS:
  const copy = [...state.allGames];
  const sortedCopy = action.payload === 'A'
    ? copy.sort((a, b) => {
        if (a.name < b.name) {
          return -1; // a debe ir antes que b
        } else if (a.name > b.name) {
          return 1; // a debe ir después que b
        }
        return 0; // a y b son iguales en términos de orden alfabético
      })
    : copy.sort((a, b) => {
        if (a.name > b.name) {
          return -1; // a debe ir antes que b
        } else if (a.name < b.name) {
          return 1; // a debe ir después que b
        }
        return 0; // a y b son iguales en términos de orden alfabético
      });

  // console.log("------>", action.payload);

  return {
    ...state,
    allGames: sortedCopy};
//________________________RATING________________________________
 case SORT_RATING : 
 if (action.payload === "Mayor Rating") {
  return {...state, allGames: [...state.allGames].sort((prev, next) => {
      if(prev.rating > next.rating) return -1;
      if(prev.rating < next.rating) return 1;
      return 0;
  })}}

  if (action.payload === "Menor Rating") {
    return {...state, allGames: [...state.allGames].sort((prev, next) => {
        if(prev.rating > next.rating) return 1;
        if(prev.rating < next.rating) return -1;
        return 0;
    })}}
//__________________API O BDD_________________________________________________
  case FILTER_GAMES: 
  const games = state.copyAllGames
  console.log("que tiene la copy de allGames? -->", games)
  const originfilter = action.payload === "BDD"
  ? games.filter(p => p.created === true )  //BD
  : games.filter(p => p.created === false)   //API
  
   console.log("que me llego en mi reducer------>", action.payload);
return { ...state, allGames: action.payload === "ALL" ? state.copyAllGames : originfilter }
//___________________________________________________________________
 case DELETEGAME:
  console.log("es hoy, es hoy ", action.payload.deleteId)
      // const eliminar= state.copyAllGames
      //  // Filtra la lista de juegos y excluye el juego con el ID proporcionado
      //   const updatedGames = eliminar.filter(game => game.id !== action.payload.deleteId);
      //   console.log("......  ", updatedGames)
      //  // Muestra una alerta con el ID y el nombre del juego eliminado
      //   const gameToDelete = eliminar.find(game => game.id === action.payload.deleteId);
      //   alert(`Se eliminó exitosamente el juego con ID: ${gameToDelete.id} y nombre: ${gameToDelete.name}`);
      
      //  //Retorna un nuevo estado con la lista de juegos actualizada
       
       
      //    return {
      //    ...state,
      //    copyAllGames: updatedGames
      //  };


      // Encuentra el índice del favorito en myFavorites que tiene el PublicationId igual al payload
      const favIndex = state.copyAllGames.findIndex((game) => game.id === action.payload.deleteId)
      if (favIndex !== -1) {
        // Crea una nueva copia de myFavorites sin el favorito que coincide con el PublicationId
        const newGames = [...state.copyAllGames.slice(0, favIndex), ...state.copyAllGames.slice(favIndex + 1)];
    return{
      ...state,
      copyAllGames: newGames
    }
  }
//___________________________________________________________________
 case POST_FAV: 
//  console.log("Estado anterior:", state);
 console.log("Nuevo favorito en reducer:", action.payload);
 const favo = state.allGames.find((fav) => fav.id === action.payload)
 console.log("Nuevo favorito completo:", favo);
  return {
  ...state,
  myFavorites: [...state.myFavorites, favo]

};
//___________________________________________________________________
case REMOVE_FAV:       
          const videojuegoId = action.payload;
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== videojuegoId),
      };
//___________________________________________________________________
case ALL_FAV:
  console.log("todos", state.myFavorites)
  return{
 ...state,
 myFavorites: [...state.myFavorites]
}
//___________________________________________________________________

    default: return {...state}
  }
}

export default rootReducer;