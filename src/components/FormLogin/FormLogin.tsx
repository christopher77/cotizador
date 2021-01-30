import React from "react";
import SimpleInput from "../SimpleInput/SimpleInput";
import style from "./FormLogin.module.scss";

const FormLogin: React.FC = () => {
	const propsDNI = {
		nombre: "Nro de documento",
		tipo: "string",
		max: 8,
		width: 300,
  };
  const propsCelular = {
		nombre: "Celular",
		tipo: "string",
		max: 9,
		width: 300,
	};
	return (
		<div className={style.info__user}>
			<div className={style.info__title}>
				<h2 className={style.title}>
					Obtén tu <span className={style.darker}>seguro ahora</span>
				</h2>
				<p>Ingresa los datos para comenzar</p>
			</div>
			<div>
				<select name="document" id="document">
					<option value="dni">DNI</option>
					<option value="passport">PASSPORT</option>
					<option value="other">OTHER</option>
				</select>
				<SimpleInput {...propsDNI} />
			</div>
			{/* <SimpleInput
      name={"Fecha de nacimiento"}
      />*/}
      <SimpleInput {...propsCelular} /> 
			<div className={style.terms__container}>
				<input type="checkbox" id="terminos" name="terminos" value="terminos" />
				<label className={style.terms}>
					Acepto la <a href="#">Politica de Datos Personales y los Términos y Condiciones</a>
				</label>
			</div>
			<div className={style.terms__container}>
				<input
					type="checkbox"
					id="comunicaciones"
					name="comunicaciones"
					value="comunicaciones"
				/>
				<label className={style.terms}>
					Acepto la	<a href="#"> Politica de Envio de Comunicaciones Comerciales</a>
				</label>
			</div>
			<button className={style.start__button}>COMENCEMOS</button>
		</div>
	);
};

export default FormLogin;
