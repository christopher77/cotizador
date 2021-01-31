import React from "react";
import SimpleInput from "../SimpleInput/SimpleInput";
import style from "./FormLogin.module.scss";

interface myProps {
	onClick: () => void;
}

const FormLogin: React.FC<myProps> = (props) => {
	const propsDNI = {
		nombre: "Nro de documento",
		tipo: "number",
		max: 8,
	};
	const propsFecha = {
		nombre: "Fecha de nacimiento",
		tipo: "string",
		max: 10,
	};
	const propsCelular = {
		nombre: "Celular",
		tipo: "string",
		max: 9,
	};
	return (
		<div className={style.login}>
			<div className={style.login__title}>
				<h2 className={style.login__title_normal}>
					Obtén tu{" "}
					<span className={style.login__title_darker}>seguro ahora</span>
				</h2>
				<p>Ingresa los datos para comenzar</p>
			</div>
			<div className={style.identification}>
				<select
					className={style.identification__select}
					name="document"
					id="document"
				>
					<option value="dni">DNI</option>
					<option value="passport">PASSPORT</option>
					<option value="other">OTHER</option>
				</select>
				<SimpleInput {...propsDNI} />
			</div>
			<SimpleInput {...propsFecha} />
			<SimpleInput {...propsCelular} />
			<div className={style.terms__container}>
				<input
					className={style.terms__container__check}
					type="checkbox"
					id="terminos"
					name="terminos"
					value="terminos"
				/>
				<label className={style.terms__container__label}>
					Acepto la{" "}
					<a href="#">
						Politica de Datos Personales y los Términos y Condiciones
					</a>
				</label>
			</div>
			<div className={style.terms__container}>
				<input
					className={style.terms__container__check}
					type="checkbox"
					id="comunicaciones"
					name="comunicaciones"
					value="comunicaciones"
				/>
				<label className={style.terms__container__label}>
					Acepto la{" "}
					<a href="#"> Politica de Envio de Comunicaciones Comerciales</a>
				</label>
			</div>
			<button className={style.start__button} onClick={props.onClick}>
				COMENCEMOS
			</button>
		</div>
	);
};

export default FormLogin;
