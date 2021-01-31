import React from "react";
import style from "./BenefitsChart.module.scss";
import logo from "../../images/Illustration.png";

const BenefitsChart: React.FC = () => {
	return (
		<div className={style.benefits}>
			<div className={style.benefits__title}>Cuentas con estos beneficios:</div>
			<div className={style.benefits__coverage}>
				<div className={style.benefits__coverage__price}>
					<label>Cobertura máxima</label>
					<label className={style.benefits__coverage__price__value}>S/1MM</label>
					<div className={style.benefits__coverage__price__button}>PLAN BÁSICO</div>
				</div>
				<div className={style.benefits__coverage__logo}>
					<img className={style.benefits__coverage__logo__source} src={logo}></img>
				</div>
			</div>
			<div className={style.benefits__details}>
				<ul className={style.benefits__list}>
					<li className={style.benefits__list__item}>Lima (zona de cobertura)</li>
					<li className={style.benefits__list__item}>
						+30 clínicas (en red afiliada)
					</li>
					<li className={style.benefits__list__item}>Médico a domicilio</li>
					<li className={style.benefits__list__item}>Chequos preventivo</li>
					<li className={style.benefits__list__item}>Reembolso nacional</li>
					<li className={style.benefits__list__item}>Reembolso internacional</li>
				</ul>
			</div>
		</div>
	);
};

export default BenefitsChart;
