import { GETALLGAMES, GETBYNAMEGAME, GETBYIDGAME, GETGENRES, ALLPLATFORMS, CLEAR_STATE,
   POSTGAME , FILTER_CARD_GENRES, ORDER_CARDS, SORT_RATING, FILTER_GAMES, DELETEGAME} from "../actionsTypes";

let inicialState= {
    copyAllGames: [],  //--> copia para que no se pisen 
    allGames: [],    // --> todos juegos
    genresData: [],
    detailGame: [],
    genres: [],   //-->  todos los generos
    platforms: [], //--> todas las plataformas
    clear: []
   
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
      console.log("que tiene mi failtrado de genres? ", filtrados)
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

    // if (action.payload === "Orden Rating") {
    //   return {...state }  }

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
//  case DELETEGAME:
//       const eliminar= state.copyAllGames
//        // Filtra la lista de juegos y excluye el juego con el ID proporcionado
//       //  const updatedGames = eliminar.filter(game => game.id !== action.payload);

//        // Muestra una alerta con el ID y el nombre del juego eliminado
//       //  const gameToDelete = eliminar.find(game => game.id === action.payload);
//       //  alert(`Se eliminó exitosamente el juego con ID: ${gameToDelete.id} y nombre: ${gameToDelete.name}`);
//        console.log("que llego en mi action.payload?  ", action.payload)
       // Retorna un nuevo estado con la lista de juegos actualizada
      //  return {
      //    ...state,
      //    copyAllGames: updatedGames
      //  };
//___________________________________________________________________
    default: return {...state}
  }
}

export default rootReducer;