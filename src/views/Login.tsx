import React from "react"
import Description from "../components/Description";

function Login(){

  
  return(
    <div style={{ display:"flex"}}>
      <Description children={"hola"}/>
      <div style={{display:"flex",flexDirection:"column"}}>
        <h2>Obtén tu seguro ahora</h2>
        <p>Ingresa los datos para comenzar</p>
        <input placeholder="Dni"></input>
        <input placeholder="Fecha de nacimiento"></input>
        <input placeholder="Celular"></input>
        <p>Acepto la Politica de Datos Personales y los Términos y Condiciones</p>
        <p>Acepto la Politica de Envio de Comunicaciones Comerciales</p>
        <button>COMENCEMOS</button>
      </div>
    </div>
  )
}

export default Login;