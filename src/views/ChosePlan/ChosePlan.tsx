import React from "react"
import style from "./ChosePlan.module.scss";
import PlanCollection from "../../components/PlanCollection/PlanCollection";
import BenefitsChart from "../../components/BenefitsChart/BenefitsChart";

function ChosePlan(){
  return(
  <div className={style.container}>
    <div className={style.container__left}></div>
    <div className={style.container__right}>
    <div className={style.container__right_title}>
      Elige <span className={style.container__right_title_blue}>tu protección</span>
    </div>
      <label>Selecciona tu plan de salud ideal</label>
    <PlanCollection/>   
    <BenefitsChart />
      <p>Revisa nuestros</p>
      <a href="#">servicios y exclusiones</a>
      <div>Servicios brindados</div>
      <div>Exclusiones</div>
      <div className={style.footer}>
        <div className={style.footer__link}><a className={style.footer__link_route} href="#">
          ENVIAR COTIZACION POR CORREO
          </a></div>
        <button className={style.footer__button}>COMPRAR PLAN</button>
      </div>
    </div>
  </div>
  )
}

export default ChosePlan;