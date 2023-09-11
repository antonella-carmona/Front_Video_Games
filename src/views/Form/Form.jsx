import { useState, useEffect } from "react";
import style from "./Form.module.css";
import {getAllGenres, getAllPlatforms, postGames} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {uploadFile} from "../../firebase/config";
import Modal from "react-modal";


const Form = () =>{
  const dispatch = useDispatch();
 
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
const [currentPage, setCurrentPage] = useState(1);
const [modalIsOpen, setModalIsOpen] = useState(false);
//_________________________________________________________________________ 

  // esta fn maneja el state local-> controladorCambios de los input_____________
 //lee el contenido del input, y guarda en el estado local_____________
  const changeHandler = (event) =>{
    const propiedad= event.target.name;
    const valor = event.target.value;
  

   setInput({...input, [propiedad]:valor})
   setError(validate({...input, [propiedad]:valor})) 
    
  }


 // fn valida que lo que se escriba en los input sea correcto_____________________________
 const validate = (input) =>{
   let errorA={};

   // Validación del campo 'name'
   if (!input.name || input.name.trim().length === 0) {
    errorA.name = "* Se debe completar este campo";
    } else if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/.test(input.name)) {
    errorA.name = "* Solo permite letras del alfabeto (A-Z)";
    }
   
   //______________________________________________________________________________________
 // Validación del campo 'description'
    if (!input.description || input.description.trim().length === 0) {
      errorA.description = "* Se debe completar este campo";
    } else if (input.description.length < 20 || input.description.length > 200) {
      errorA.description = "* Debe tener entre 20 y 200 caracteres";
    }
   //______________________________________________________________________________________
   // Validación del campo 'image'
      if (!input.image) {
        errorA.image = "* Se debe completar este campo";
      }
   //__________________________________________________________________________________
  // Validación del campo 'released'
      if (!input.released) {
        errorA.released = "* Se debe completar este campo";
      }
   //_________________________________________________________________________________
  // Validación del campo 'rating'
      if (!input.rating) {
        errorA.rating = "* El rating es obligatorio";
      } else if (input.rating < 1 || input.rating > 5) {
        errorA.rating = "* El rating debe estar entre 1 y 5";
      }
   //_________________________________________________________________________________
  // Validación del campo 'genres'
    if (!input.genres) {
      errorA.genres = "* El género es obligatorio";
    }
//____________________________________________________________________________________
  // Validación del campo 'platforms'
  if (!input.platforms) {
    errorA.platforms = "* Seleccione una plataforma";
  }

   return errorA;
 } 


 //_________________________FN BOTON CREAR__________________________________________________________
const submitHandler = async (event) => {
  event.preventDefault();

  if (input && file) {
    try {
      const imageUrl = await uploadFile(file);
      setInput({ ...input, image: imageUrl });
      dispatch(postGames({ ...input, image: imageUrl }));
      
      // Abre el modal cuando se crea el juego
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      return;
    }
  } else {
    alert("Faltan algunos campos");
  }
}

const closeModal = () => {
  setModalIsOpen(false);
  history.push("/home"); // Redirige a la página de inicio después de cerrar el modal
};


//___________________BOTON SIGUIENTE FORMULARIO________________________________
  const nextFormHandler = () => {
    // Verifica si el usuario está en la última página (en este caso, la página 4)
    if (currentPage < 4) {
      // Dependiendo de la página actual, verifica los campos relevantes
      if (currentPage === 1) {
        if (input.name && input.released) {
          setCurrentPage(currentPage + 1);
        }
      } else if (currentPage === 2) {
        if (input.rating && input.platforms) {
          setCurrentPage(currentPage + 1);
        }
      } else if (currentPage === 3) {
        if (input.genres) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };
  
//______________________________________________________________________________

 useEffect(() => {
  dispatch(getAllGenres()); // Despacha la acción para obtener los géneros
}, [dispatch]);

useEffect(() => {
  dispatch(getAllPlatforms()); // Despacha la acción para obtener las platforms
}, [dispatch]);

//_______________________________________________________________________________________
    return(

     <div className={style.contenedor_General}>

       <Link to="/home">
          <div >
            <button id="work" type="button" name="Hover" className={style.ButtonForm}>
            🡨 Volver
            </button>
          </div>
        </Link> 


  <div className={style.Contenedor_Formulario}>
      <h3>CREA TU PROPIO JUEGO</h3>

      <div className={style.progress}>
            
            <div className={`${style.paso}`}>
              <div className={`${style.num}  ${currentPage === 1 ? style.active : ""} `}><span>1</span></div>
              <div className={`${style.check} ${style.icono}`}>
             
              </div>
            </div>

            <div className={`${style.paso} `}>
              <div className={`${style.num} ${currentPage === 2 ? style.active : ""}`}><span>2</span></div>
              <div className={`${style.check} ${style.icono}`}>
             
              </div>
            </div>
            <div className={style.paso}>
              <div className={`${style.num} ${currentPage === 3 ? style.active : ""}`}><span>3</span></div>
              <div className={`${style.check} ${style.icono}`}>
             
              </div>
            </div>
            <div className={style.paso}>
                <div className={`${style.num} ${currentPage === 4 ? style.active : ""}`}><span>4</span></div>
                <div className={`${style.check} ${style.icono}`}>
               
                </div>
            </div>
    </div>
      

     <form onSubmit={submitHandler} className={style.formulario}>

{/* --PAGINA 1------ */}

      <div className={style.pagina}  style={{ display: currentPage === 1 ? 'block' : 'none' }}>
        <div className={style.campo}>

              <div className={style.label}> <label>Nombre:</label>
              <span className={style.error}>{error.name && error.name}</span>
              <input type="text" value={input.name} onChange={changeHandler} name="name" required/>
              </div>

        </div>

              <div className={style.campo}>

                  <div className={style.label}> <label>Fecha de lanzamiento:</label>
                  {error.released && <span  className={style.error}>{error.released}</span>}
                  <input type="date" value={input.released} onChange={changeHandler} name="released" required/>
                  </div>

              </div>

              <div className={style.campo } >
                <button onClick={() => { nextFormHandler()} } >Siguiente</button>
              </div>
      </div>   


 {/* --PAGINA 2------ */}
   <div className={style.pagina} style={{ display: currentPage === 2 ? 'block' : 'none' }}>
              <div className={style.campo}>

                  <div className={style.label}><label>Rating: </label>
                  {error.rating && <span  className={style.error}>{error.rating}</span>}
                  <input type="number" value={input.rating} onChange={changeHandler} name="rating" required/>
                  </div>

              </div>


            <div className={style.campo}>

                  <div className={style.label}><label>Plataformas:</label>
                  {error.platforms && <span  className={style.error}>{error.platforms}</span>}
                      <select name="platforms" onChange={changeHandler} required  value={input.platforms}>
                      <option value="">Elegir</option>
                            {platforms && platforms.map((name) => (
                              <option key={name} value={name}>
                                  {name}
                              </option> ))}
                      </select>
                  </div>
            </div>

                <div className={`${style.campo} ${style.btns}`} >
                  <button className={style.atras} onClick={() => setCurrentPage(currentPage - 1)}>Atras</button>
                  <button className={style.siguiente} onClick={nextFormHandler}>Siguiente</button>
                </div>
  </div>


 {/* --PAGINA 3------ */}
 <div className={style.pagina} style={{ display: currentPage === 3 ? 'block' : 'none' }}>

              <div className={style.campo} >
                      <div className={style.label}><label>Genero: </label>
                        {error.genres && <span className={style.error}>{error.genres}</span>}
                       <select onChange={changeHandler} required name="genres"  value={input.genres} >
                         <option value="">Elegir</option>
                             {genres && genres.map((genre) => (
                               <option key={genre.id} value={genre.name}>
                                 {genre.name}
                               </option>
                              ))}
                       </select>
                    </div>
             </div>

             <div className={style.campo}>  
                    <div className={style.label}><label>Imagen: </label>
                    {/* {error.image && <span  className={style.error}>{error.image}</span>} */}
                    <input type="file" value={input.image.event} onChange={evento => setFile(evento.target.files[0])} name="image" required />
                    {file && <span className={style.fileName}>{file.name}</span>}
                    </div>
             </div> 


             <div className={`${style.campo} ${style.btns}`}>
                <button className={style.atras} onClick={() => setCurrentPage(currentPage - 1)}>Atras</button>
                <button className={style.siguiente} onClick={nextFormHandler}>Siguiente</button>
             </div>
  </div>         

   {/* --PAGINA 4------ */} 
   <div className={`${style.pagina} ` } style={{ display: currentPage === 4 ? 'block' : 'none' }} >       

            <div className={style.campo}>
                  <div className={style.label}><label>Descripción: </label>  

                  {error.description && <span  className={style.error}>{error.description}</span>}
                  <textarea type="text" value={input.description} onChange={changeHandler} name="description" required/>
                  </div>
           </div>
                      
            <div className={`${style.campo} ${style.btns} `}>

                      <button className={`${style.atras}`} onClick={() => setCurrentPage(currentPage - 1)}>Atras</button>
                      <button type="submit" onClick={submitHandler} >CREAR</button>
                     

            </div>
                
                  
            
    </div>      

  
      
      </form>


       {/* Modal para mostrar el mensaje */}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mensaje Modal"

        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro tras el modal
          },
          content: {
            width: 'auto',  // Ancho del modal
            maxWidth: '300px', // Ancho máximo del modal
            maxHeight: "300px",
            height:"auto",
            margin: 'auto', // Centrar el modal horizontalmente
            padding: '20px', // Espaciado interno del contenido del modal
            borderRadius: '8px', // Bordes redondeados
            display: 'flex', // Utiliza display flex
            alignItems: 'center', // Centra verticalmente el contenido
            flexDirection: 'column', // Alinea el contenido verticalmente
          },
        }}
      > <h1> ★ ★ ★ ★ ★ ★</h1>
        <h2>Juego creado exitosamente</h2>
        <h1> ★ ★ ★ ★ ★ ★</h1>
        <button onClick={closeModal}
         className={style.modalButton}>Aceptar</button>
      </Modal>
 
           
    </div>

</div>
    )
  } 
  
  export default Form;

