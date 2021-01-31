import React from "react";
import style from "./PlanItem.module.scss";
import image_check from "../../images/gl_correct.png";

type ItemProps={
  nombre:string,
  price:string,
}

const PlanItem: React.FC<ItemProps>= (props) => {
	return (
		<div className={style.item}>
			<div className={style.item__img}>
				<img className={style.icono} src={image_check} alt="check"/>
			</div>
			<div className={style.item__resume}>
				<label>{props.nombre}</label>
				<label className={style.item__resume__price}>
					<label className={style.item__resume__price_sol}>S/</label>{props.price}</label>
				<label>mensual</label>
			</div>
		</div>
	);
};

export default PlanItem;
