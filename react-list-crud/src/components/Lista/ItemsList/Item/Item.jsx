import { useState } from "react";

const Item = ({ item, onDelete, onUpdate }) => {
  //ESTADOS para editar
  // isEditing → para saber si estamos en modo edición
  // editText → para manejar temporalmente el texto mientras el usuario lo edita
  const [isEditing, setIsEditing] = useState(false); //false por defecto, el item empieza en modo “ver”
  const [editText, setEditText] = useState(item.text); //inicializamos con el texto actual del item INPUT

  //Cuando el usuario hace click en guardar
  const handleSave = () => {
    if (!editText.trim()) return; // evita texto vacío
    onUpdate(item.id, editText); // llama a la función del padre para actualizar el estado global
    setIsEditing(false);   // vuelve al modo “ver”
  };

  //RENDERIZADO CONDICIONAL
  //SI isEditing-> aparece un input
  //guardar ->onClick -> llamamos a handlesave
  //Cancelar ->onClick-> decimos que el estado actual de editar setEditText es false

  //SINO
  //Renderizamos el item text
  //ponemos los botones editar y borrar llamamando a sus respectivas funciones
  return (
     <li>
    {isEditing ? (
      <>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={() => setIsEditing(false)}>Cancelar</button>
      </>
    ) : (
      <>
        <span>{item.text}</span>
        <button onClick={() => onDelete(item.id)}>Borrar</button>
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    )}
  </li>
  );
};


export default Item;
