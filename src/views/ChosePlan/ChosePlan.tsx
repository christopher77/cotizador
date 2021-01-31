import React from "react"
import style from "./ChosePlan.module.scss";
import image_check from "../../images/gl_correct.png";
import logo from "../../images/Illustration.png";
import PlanCollection from "../../components/PlanCollection/PlanCollection";

function ChosePlan(){
  return(
  <div className={style.container}>
    <div className={style.container__blue}></div>
    <div className={style.info__plan}>
    <div className={style.info__title}>
      Elige <span className={style.info__blue}>tu protección</span>
    </div>
      <label>Selecciona tu plan de salud ideal</label>
    <PlanCollection/>   
    <div className={style.plan__benefits}>
      <div className={style.plan__title}>Cuentas con estos beneficios:</div>
      <div className={style.plan__coverage}>
        <div className={style.plan__coverage__price}>
          <label>Cobertura máxima</label>
          <label className={style.plan__coverage__price__value}>S/1MM</label>
          <div className={style.green_button}>PLAN BÁSICO</div>
        </div >
        <div className={style.plan__coverage__logo}>
          <img className={style.plan__coverage__logo__dimen} src={logo}></img></div>
      </div>
      <div className={style.plan__details}>
        <ul className={style.plan__list}>
          <li className={style.plan__list__item}>Lima (zona de cobertura)</li>
          <li className={style.plan__list__item}>+30 clínicas (en red afiliada)</li>
          <li className={style.plan__list__item}>Médico a domicilio</li>
          <li className={style.plan__list__item}>Chequos preventivo</li>
          <li className={style.plan__list__item}>Reembolso nacional</li>
          <li className={style.plan__list__item}>Reembolso internacional</li>
        </ul>
      </div>
    </div>


      <p>Revisa nuestros</p>
      <a href="#">servicios y exclusiones</a>
      <div>Servicios brindados</div>
      <div>Exclusiones</div>
      <div>
        <p>ENVIAR COTIZACION POR CORREO</p>
        <button>COMPRAR PLAN</button>
      </div>
    </div>
  </div>
  )
}

export default ChosePlan;