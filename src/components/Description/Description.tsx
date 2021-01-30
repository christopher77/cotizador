import React, {FunctionComponent,ReactNode} from "react";
import styles from './Description.module.scss';
import shield from "../../images/gl_shield-20x20.png";
import mobile from "../../images/gl_mobile-20x20.png";

const Description:FunctionComponent<{children?:ReactNode}>=({children})=>{
  return (
  <div className={styles.Description}>
      <h1 className={styles.Description__title}>Seguro de <br></br><strong>Salud</strong></h1>
      
      <ul className={styles.Description__list}>
        <li className={styles.list__item}><img className={styles.icono} src={mobile} alt="uno"/>Cómpralo de maner fácil y rápida</li>
        <li className={styles.list__item}><img className={styles.icono} src={shield} alt="dos"/>Cotiza y compra tu seguro 100% digital</li>
        <li className={styles.list__item}><img className={styles.icono} src={mobile} alt="tres"/>Hasta S/.12 millones de cobertura anual</li>
        <li className={styles.list__item}><img className={styles.icono} src={shield}alt="cuatro"/>Más de 300 clínicas en todo el Perú</li>
      </ul>
      <div className={styles.footer}>
        c 2020 RIMAC Seguros y Reaseguros.
      </div>
  </div>);
};

export default Description;