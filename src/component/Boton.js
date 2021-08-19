import React from 'react';

const Boton = ({botonDisplayName, handleClick}) =>(

    <button onClick={handleClick}>{botonDisplayName}</button>

);

export default Boton;