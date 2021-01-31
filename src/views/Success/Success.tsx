import React from "react"
import style from "./Success.module.scss";

function Success() {

  return (
    <div className={style.container}>
      <div className={style.container__blue}/>
      <div className={style.message}>
        <div className={style.message__title}>¡Gracias por <span className={style.message__blue}>
          confiar en nosotros!
          </span>
        </div>
          <p className={style.message__p}>Queremos conocer mejor la salud de los asegurados.
          Un asesor se pondrá en contacto contigo en las siguientes 48 horas</p>
        
        <button className={style.message__button}>IR A SALUD</button>
      </div>
    </div>);
}

export default Success;