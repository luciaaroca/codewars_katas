import { useState } from "react";

const Form = ({ onAdd }) => {//onAdd es la función que viene de Lista
  
  //Estado del Formulario
  const [text, setText] = useState("");

  //Para cuando enviemos el formulario
  const handleSubmit = (e) => {
    e.preventDefault();//preventDefault() -> evita que el navegador recargue la página
    if (!text.trim()) return; //evita añadir elementos vacíos
    onAdd(text);//llama a addItem en Lista
    setText("");//cuando se envie el form-> se limpie
  };

  return <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={text} //estado bdel formulario
        onChange={(e) => setText(e.target.value)} //Actualiza el estado text
        placeholder="Nuevo elemento"
      />
      <button>Añadir</button>
    </form>;
};

export default Form;
