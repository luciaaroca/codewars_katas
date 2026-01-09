import React from "react";
import Item from './Item/Item.jsx'

const ItemsList = ({items, onDelete, onUpdate}) => {
    //Manejo de la lista vacía
    if (items.length === 0) {
    return <p>No hay elementos en la lista</p>;
    }

    //Renderizado de la lista
    return <ul> 
        {items.map(item => (
          <Item
            key={item.id} //key={item.id} obligatorio para re-renderizado eficiente.
            item={item}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
};
// map recorre cada elemento del array items.
// Por cada item crea un componente <Item />.
// Esto transforma un array de datos en un array de componentes React, que es la forma correcta de renderizar listas.

export default ItemsList;
