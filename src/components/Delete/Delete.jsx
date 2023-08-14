import { useDispatch } from 'react-redux';
import { deleteGame } from '../../redux/actions/actions'; // Importa la acción de eliminación

const Delete = ({id}) => {
  const dispatch = useDispatch();
//   const { id } = props.match;
console.log("que id llega en el delete?  ->", id)
  const handleDelete = () => {
    // Dispatcha la acción de eliminación con el ID del elemento
    dispatch(deleteGame(id));
  };

  return (
    <button onClick={handleDelete}>Eliminar</button>
  );
};

export default Delete;
