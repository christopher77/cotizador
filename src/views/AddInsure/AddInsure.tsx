import React from "react"
import SimpleInput from "../../components/SimpleInput/SimpleInput";
import style from "./AddInsure.module.scss";

function AddInsure(){
  const propsDNI = {
		nombre: "Nro de documento",
		tipo: "number",
		max: 8,
  };
  const propsNombres = {
		nombre: "Nombres",
		tipo: "string",
		max: 9,
	};
  const propsPaterno = {
		nombre: "Apellido Paterno",
		tipo: "string",
		max: 9,
  };
  const propsMaterno = {
		nombre: "Apellido Materno",
		tipo: "string",
		max: 9,
  };
  const propsFecha = {
		nombre: "Fecha de nacimiento",
		tipo: "string",
		max: 10,
  };
  return(
  <div className={style.container}>
    <div className={style.container__blue}></div>
    <div className={style.info__insured}>
      <div className={style.info__title}>Hola, <span className={style.info__blue}>Max</span></div>
      <p>Valida que los datos sean correctos.</p>
      <p>Datos personales del titular</p>
      <div className={style.prueba}>
				<select className={style.prueba__select} name="document" id="document">
					<option value="dni">DNI</option>
					<option value="passport">PASSPORT</option>
					<option value="other">OTHER</option>
				</select>
				<SimpleInput {...propsDNI} />
			</div>
      <SimpleInput {...propsNombres}/>
      <SimpleInput {...propsPaterno}/>
      <SimpleInput {...propsMaterno}/>
      <SimpleInput {...propsFecha}/>
      <span>Genero</span>
      <form name="gender" className={style.radios}>
        <div className={style.radios__item}>
          <input type="radio" name="male" checked/><label>Masculino</label>
        </div>
        <div className={style.radios__item}>
          <input type="radio" name="female" /><label>Femenino</label>
        </div>
      </form>
      <span>¿A quíen vamos a asegurar?</span>
      <form name="insured"  className={style.radios}>
        <div className={style.radios__item}>
          <input type="radio" name="male" checked/><label>Solo a mi</label>
        </div>
        <div className={style.radios__item}>
          <input type="radio" name="female" /><label>A mi y a mi familia</label>
        </div>
      </form>
      <button className={style.button__continue}>CONTINUAR</button>
    </div>
  </div>)
}

export default AddInsure;
