import { useState } from "react";

import Form from "./Form/Form.jsx";
import ItemsList from "./ItemsList/ItemsList.jsx";

const Lista = () => {

    //ARRAY VACÍO -> Items a representar useState([])
    //items → array con todos los elementos
    //setItems → función para actualizar ese array
    const [items, setItems] = useState([]);

    //AÑADIR ELEMENTO
    const addItem = (text) => {
    setItems([...items, { id: Date.now(), text }]); //seria como un {[...items,nuevoObjeto]}
    };
    //Recibe un text (desde el formulario)
    //setItems para actualizar el array
    //Crea un nuevo array a partir del anterior (... spread operator)
    //Date.now()->Devuelve un número único basado en el tiempo actual (milisegundos).

    //BORRAR ELEMENTO
    const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    };
    //Recibe un id único (date.now())
    //actualiza estado del array -> filter (devuelve un nuevo array con todos los elementos que cumplan la condición -> es decir distinto a id (!==)), recorremos cada items del array de items

    //EDITAR ELEMENTO
    const updateItem = (id, newText) => {
    setItems( //actualiza el estado del array
      items.map(item =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
    };
    // id: el identificador del item que queremos actualizar.
    // newText: el texto nuevo que viene del input de edición en Item.jsx.
    // map recorre todo el array items.
    // Para cada item hacemos una comprobación:
    //Si coincide con el id que queremos editar → creamos un nuevo objeto:
    // { ...item } → copia todas las propiedades del item original.
    // text: newText → reemplaza solo la propiedad text por el nuevo valor.
    // Si no coincide → devolvemos el item tal cual:


  return <section>
      <h1>Lista de elementos</h1>
      <Form onAdd={addItem} />
      <ItemsList items={items} onDelete={deleteItem} onUpdate={updateItem}/>
      {/* items → array de elementos { id, text }
      onDelete(id)
      onUpdate(id, newText) (lo usaremos luego) */}
    </section>
};

export default Lista;
