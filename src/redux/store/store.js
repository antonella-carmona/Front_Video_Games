//DEPENDENCIAS QUE NOS TRAE REDUX
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk"
// import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";

//SI QUEREMOS VER LA MINI CONSOLA DE REDUX DEVTOOLS.AGREGAMOS
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//AQUI INVOCAMOS A CREATESTORE//esta ultima es para hacer petisiones a una api
const store= createStore(
    rootReducer,
     composeEnhancer(applyMiddleware(thunkMiddleware))
     );

export default store;     
