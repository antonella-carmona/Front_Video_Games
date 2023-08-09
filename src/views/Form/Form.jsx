// import { useState, useEffect } from "react";
// import style from "./Form.module.css";
// import {getAllGenres, getAllPlatforms, postGames, getAllGames} from "../../redux/actions/actions";
// import {useDispatch, useSelector} from "react-redux";
// import { useHistory } from 'react-router-dom';
// import { Link } from "react-router-dom/cjs/react-router-dom.min";




// const Form = () =>{
//   const dispatch = useDispatch();
//   // const navigate= useNavigate()
//   const genres = useSelector((state) => state.genres);
//   const platforms = useSelector((state)=> state.platforms);
//   const history = useHistory();

//   //manejador inputs
//   const [input, setInput] = useState({
//     name:"",   
//     description:"",
//     released:"",
//     rating:"",
//     image:"",
//     platforms: [],
//     genres: []
// });
// console.log(input)
// //manejador state de errores______________________________________________
// const [error, setError] = useState({
//     name:"",   
//     description:"",
//     released:"",
//     rating:"",
//     image:"",
//     platforms: [],
//     genres: []
// });


// //_________________________________________________________________________ 

//   // esta fn maneja el state local-> controladorCambios de los input_____________
//   // //tiene que leer lo que escribi, y guardarlo en el estado local_____________
//   const changeHandler = (event) =>{
//     const propiedad= event.target.name;
//     const valor = event.target.value;
   
//    setInput({...input, [propiedad]:valor})
//    setError(validate({...input, [propiedad]:valor})) 
    
//   }


//  // fn valida que lo que se escriba en los input sea correcto_____________________________
//  const validate = (input) =>{
//    let errorA={};

//       if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/.test(input.name)) {
//     errorA.name = "✔️";
//   } else if (input.name === "" || input.name[0].trim().length === 0) {
//     errorA.name = "Se debe completar este campo";
//   } else {
//     errorA.name = "Solo permite letras del alfabeto (a-z, A-Z)";
//   }
   
//    //______________________________________________________________________________________
//    if(input.description.length>0 && input.description.length > 20 && input.description.length < 200){
//     errorA.description= "✔️"
//    } else if(input.description==="" || input.description[0].trim().length === 0) {
//     errorA.description= "Se debe completar este campo"}
//    //______________________________________________________________________________________
//    if(/\.(jpg|jpeg|png|gif|bmp)$/i.test(input.image)){
//     errorA.image= "✔️"
//    } else{
//     errorA.image = "La imagen debe ser una url valida";
//    } if(input.image==="") errorA.image="Se debe completar este campo";
//    //__________________________________________________________________________________
//    if(input.released){
//     errorA.released="✔️";
//    } else if(input.released === ""){
//     errorA.released="Se debe completar este campo";
//    }
//    //_________________________________________________________________________________
//    if(!input.rating){
//     errorA.rating= "El rating es obligatorio";
//    } 
//    else if(input.rating > 5 || input.rating < 0) {
//       errorA.rating="El rating debe estar entre 0 y 5";
//    }
//    else{
//     errorA.rating= "✔️"
//    }
//    //_________________________________________________________________________________
//    if(!input.genres){
//    errorA.genres= "El genero es obligatorio";
//    } 
//    else {
//     errorA.genres= "✔️"
//    }
// //____________________________________________________________________________________
//    if(!input.platforms){
//     errorA.platforms= "Seleccione una plataforma";
//     } 
//     else {
//      errorA.platforms= "✔️"
//     }

//    return errorA;
//  } 


//  //_________________________FN BOTON CREAR__________________________________________________________
//  const submitHandler = (event)=>{
//     event.preventDefault();
      
//     if(input){
//       dispatch(postGames(input))
    
     
//     alert(`Has creado el juego ${input.name} exitosamente`)
//     setInput({
//       name: "",
//       description: "",
//       released: "",
//       image: "",
//       platforms: [],
//       genres: [],
//       rating: ""
//      });
//     history.push("/home")

//   }else{
//     alert("falta algunos campos")
//   }
 
//  }
// //______________________________________________________________________________


//  useEffect(() => {
//   dispatch(getAllGenres()); // Despacha la acción para obtener los géneros
// }, [dispatch]);

// useEffect(() => {
//   dispatch(getAllPlatforms()); // Despacha la acción para obtener las platforms
// }, [dispatch]);

// //_______________________________________________________________________________________
//     return(
//     <div className={style.containerFormulario}>

//        <Link to="/home">
//           <div >
//             <button id="work" type="button" name="Hover" className={style.ButtonForm}>
//               Volver!
//             </button>
//           </div>
//         </Link>

//      <form onSubmit={submitHandler} className={style.formulario}>
//         <div>    
//             <div>
//               <label>Name</label>
//               <input type="text" value={input.name} onChange={changeHandler} name="name" required/>
//               <span className={style.error}>{error.name && error.name}</span>
//             </div>

//             <div>  
//               <label>Imagen</label>
//               <input type="text"value={input.image} onChange={changeHandler} name="image" required />
//               {error.image && <span  className={style.error}>{error.image}</span>}
//             </div> 
            
//             <div>
//               <label>Description</label>
//               <input type="text" value={input.description} onChange={changeHandler} name="description" required/>
//               {error.description && <span  className={style.error}>{error.description}</span>}
//               </div>

//               <div>
//               <label>Fecha de lanzamiento</label>
//               <input type="date" value={input.released} onChange={changeHandler} name="released" required/>
//               {error.released && <span  className={style.error}>{error.released}</span>}
//               </div>

//               <div>
//               <label>Rating</label>
//               <input type="number" value={input.rating} onChange={changeHandler} name="rating" required/>
//               {error.rating && <span  className={style.error}>{error.rating}</span>}
//               </div>

//               <div>
//               <label>Platforms</label>
//               <select name="platforms" onChange={changeHandler} required  value={input.platforms}>
//                     {platforms && platforms.map((name) => (
//                        <option value={name}>
//                           {name}
//                        </option> ))}
//               </select>
//               {/* {error.platforms && <span>{error.platforms}</span>} */}
//               </div>

//               <div>
//               <label>Genero</label>
//               <select onChange={changeHandler} required name="genres"  value={input.genres}>
//                  {genres && genres.map((genre) => (
//                     <option key={genre.id} value={genre.name}>
//                       {genre.name}
//                     </option>
//                   ))}
//               </select>
//               {error.genres && <span>{error.genres}</span>}
//              </div>

//               <button type="submit">CREAR</button>
//             </div>
//           </form>
//       </div>
//     )
//   } 
  
//   export default Form;



  //_____________________________PROBANDO_____________________________________


import { useState, useEffect } from "react";
import style from "./Form.module.css";
import {getAllGenres, getAllPlatforms, postGames, getAllGames} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {uploadFile} from "../../firebase/config"




const Form = () =>{
  const dispatch = useDispatch();
  // const navigate= useNavigate()
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state)=> state.platforms);
  const history = useHistory();

  //manejador inputs
  const [input, setInput] = useState({
    name:"",   
    description:"",
    released:"",
    rating:"",
    image:"",
    platforms: [],
    genres: []
});

//manejador state de errores______________________________________________
const [error, setError] = useState({
    name:"",   
    description:"",
    released:"",
    rating:"",
    image:"",
    platforms: [],
    genres: []
});
//__________________________________________________________________________

const [file, setFile] = useState(null)

//_________________________________________________________________________ 

  // esta fn maneja el state local-> controladorCambios de los input_____________
  // //tiene que leer lo que escribi, y guardarlo en el estado local_____________
  const changeHandler = (event) =>{
    const propiedad= event.target.name;
    const valor = event.target.value;
  

   setInput({...input, [propiedad]:valor})
   setError(validate({...input, [propiedad]:valor})) 
    
  }


 // fn valida que lo que se escriba en los input sea correcto_____________________________
 const validate = (input) =>{
   let errorA={};

      if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/.test(input.name)) {
    errorA.name = "✔️";
  } else if (input.name === "" || input.name[0].trim().length === 0) {
    errorA.name = "Se debe completar este campo";
  } else {
    errorA.name = "Solo permite letras del alfabeto (a-z, A-Z)";
  }
   
   //______________________________________________________________________________________
   if(input.description.length>0 && input.description.length > 20 && input.description.length < 200){
    errorA.description= "✔️"
   } else if(input.description==="" || input.description[0].trim().length === 0) {
    errorA.description= "Se debe completar este campo"}
   //______________________________________________________________________________________
  //  if(/\.(jpg|jpeg|png|gif|bmp)$/i.test(input.image)){
  //   errorA.image= "✔️"
  //  } else{
  //   errorA.image = "La imagen debe ser una url valida";
  //  } if(input.image==="") errorA.image="Se debe completar este campo";

     // Verificar si hay un archivo seleccionado en lugar de validar una URL
  if (!file) {
    errorA.image = "Se debe completar este campo";
  } else {
    errorA.image = "✔️";
  }
   //__________________________________________________________________________________
   if(input.released){
    errorA.released="✔️";
   } else if(input.released === ""){
    errorA.released="Se debe completar este campo";
   }
   //_________________________________________________________________________________
   if(!input.rating){
    errorA.rating= "El rating es obligatorio";
   } 
   else if(input.rating > 5 || input.rating < 0) {
      errorA.rating="El rating debe estar entre 0 y 5";
   }
   else{
    errorA.rating= "✔️"
   }
   //_________________________________________________________________________________
   if(!input.genres){
   errorA.genres= "El genero es obligatorio";
   } 
   else {
    errorA.genres= "✔️"
   }
//____________________________________________________________________________________
   if(!input.platforms){
    errorA.platforms= "Seleccione una plataforma";
    } 
    else {
     errorA.platforms= "✔️"
    }

   return errorA;
 } 


 //_________________________FN BOTON CREAR__________________________________________________________
 const submitHandler = async (event)=>{
    event.preventDefault();
      
    if(input && file){
      
        try {
          const imageUrl = await uploadFile(file); // Subir la imagen a Firebase Storage
          setInput({ ...input, image: imageUrl }); // Actualizar la URL de la imagen en el estado
          dispatch(postGames({ ...input, image: imageUrl }))
        } catch (error) {
          console.error("Error al subir la imagen:", error);
          return
        }
      
      // dispatch(postGames(input))
    
     
    alert(`Has creado el juego ${input.name} exitosamente`)
    setInput({
      name: "",
      description: "",
      released: "",
      image: "",
      platforms: [],
      genres: [],
      rating: ""
     });
    history.push("/home")

  }else{
    alert("falta algunos campos")
  }
 
 }
//______________________________________________________________________________


 useEffect(() => {
  dispatch(getAllGenres()); // Despacha la acción para obtener los géneros
}, [dispatch]);

useEffect(() => {
  dispatch(getAllPlatforms()); // Despacha la acción para obtener las platforms
}, [dispatch]);

//_______________________________________________________________________________________
    return(
    <div className={style.containerFormulario}>

       <Link to="/home">
          <div >
            <button id="work" type="button" name="Hover" className={style.ButtonForm}>
              Volver!
            </button>
          </div>
        </Link>

     <form onSubmit={submitHandler} className={style.formulario}>
        <div className={style.formColumns}>    

            <div className={style.formColumn}>
              <label>Name</label>
              <input type="text" value={input.name} onChange={changeHandler} name="name" required/>
              <span className={style.error}>{error.name && error.name}</span>
            </div>

            <div className={style.formColumn}>  
              <label>Imagen</label>
              <input type="file" value={input.image.event} onChange={evento => setFile(evento.target.files[0])} name="image" required />
              {file && <span className={style.fileName}>{file.name}</span>}
              {error.image && <span  className={style.error}>{error.image}</span>}
            </div> 
            
            <div className={style.formColumn}>
              <label>Description</label>
              <input type="text" value={input.description} onChange={changeHandler} name="description" required/>
              {error.description && <span  className={style.error}>{error.description}</span>}
              </div>

              <div className={style.formColumn}>
              <label>Fecha de lanzamiento</label>
              <input type="date" value={input.released} onChange={changeHandler} name="released" required/>
              {error.released && <span  className={style.error}>{error.released}</span>}
              </div>

              <div className={style.formColumn}>
              <label>Rating</label>
              <input type="number" value={input.rating} onChange={changeHandler} name="rating" required/>
              {error.rating && <span  className={style.error}>{error.rating}</span>}
              </div>

              <div className={style.formColumn}>
              <label>Platforms</label>
              <select name="platforms" onChange={changeHandler} required  value={input.platforms}>
                    {platforms && platforms.map((name) => (
                       <option value={name}>
                          {name}
                       </option> ))}
              </select>
              {/* {error.platforms && <span>{error.platforms}</span>} */}
              </div>

              <div className={style.formColumn}>
              <label>Genero</label>
              <select onChange={changeHandler} required name="genres"  value={input.genres}>
                 {genres && genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
              </select>
              {error.genres && <span>{error.genres}</span>}
             </div>

              <button type="submit"   className={style.submitButton}>CREAR</button>
            </div>
          </form>
      </div>
    )
  } 
  
  export default Form;