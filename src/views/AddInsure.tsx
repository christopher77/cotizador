import React from "react"

function AddInsure(){

  return(<div>
    <div>Hola Max</div>
    <p>Valida que los datos sean correctos.</p>
    <p>Datos personales del titular</p>
    <input placeholder="DNI"></input>
    <input placeholder="Nombres"></input>
    <input placeholder="Apellido Paterno"></input>
    <input placeholder="Apellido Materno"></input>
    <input placeholder="Fecha de Nacimiento"></input>
    <span>Genero</span>
    <span>¿A quíen vamos a asegurar?</span>
    <button>CONTINUAR</button>
  </div>)
}

export default AddInsure;