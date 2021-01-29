import React, {FunctionComponent,ReactNode} from "react";
import styles from './Description.module.scss';

const Description:FunctionComponent<{children:ReactNode}>=({children})=>{

  return <div className={styles.Description}>{children}</div>;
};


// function Description(){
//   return(
//   <div style={{backgroundImage:"url(images/Base.png)"}}>

// {/* <img src="images/Base.png"/> */}
//     <h1>Seguro de Salud</h1>
//     <ul>
//       <li><img src="images/gl_shield-20x20.png"/>Cómpralo de maner fácil y rápida</li>
//       <li><img src="images/gl_mobile-20x20.png"/>Cotiza y compra tu seguro 100% digital</li>
//       <li><img src="images/gl_shield-20x20.png"/>Hasta S/.12 millones de cobertura anual</li>
//       <li><img src="images/gl_shield-20x20.png"/>Más de 300 clínicas en todo el Perú</li>
//     </ul>
//     <div>
//       c 2020 RIMAC Seguros y Reaseguros.
//     </div>
//   </div>)
// }

export default Description;