// import logo from './logo.svg';
// import './App.css';
import {Landing, Home, Form, Detail, Favorites} from "./views";
import NavBar from "./components/navBar/NavBar";
import {Route, useLocation} from "react-router-dom";



function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/> }
      
      <Route exact path="/" component={Landing}/>
      <Route path="/home" render={ ()=>  <Home/>} />
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/create" component={Form}/>
      <Route path="/favoritos" component={Favorites}/>
    </div>
  );
}

export default App;
