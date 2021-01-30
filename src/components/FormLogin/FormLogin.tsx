import React from "react"
import style from "./FormLogin.module.scss";

function FormLogin(){

  return(
    <div className={style.user__info}>
        <h2>Obtén tu seguro ahora</h2>
        <p>Ingresa los datos para comenzar</p>
        <div>
          <select name="document" id="document">
            <option value="dni">DNI</option>
            <option value="passport">PASSPORT</option>
            <option value="other">OTHER</option>
          </select>
          <input placeholder="Nro de documento"></input>
        </div>
        <input placeholder="Fecha de nacimiento"></input>
        <div className={style.wrapper}>
          <div className={style.wrapper__group}>
            <input className={style.wrapper__input} required/>
            <label className={style.wrapper__label}>Celular</label>
          </div>
        </div>
        <div>
          <input type="checkbox" id="terminos" name="terminos" value="terminos"/>
          <label>Acepto la Politica de Datos Personales y los Términos y Condiciones</label>
        </div>
        <div>
          <input type="checkbox" id="comunicaciones" name="comunicaciones" value="comunicaciones"/>
          <label>Acepto la Politica de Envio de Comunicaciones Comerciales</label>
        </div>
        <button>COMENCEMOS</button>
      </div>
  )
}

export default FormLogin;