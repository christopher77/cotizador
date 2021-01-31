import React from "react";
import style from "./SimpleInput.module.scss";

type InputProps={
  nombre:string,
  tipo:string,//"number" or "string"
  max:number,
  width?:number,
}

const defaultProps={
  nombre:"Pepito",
  type:"string",
  max:9,
  width:300
}

 const SimpleInput:React.FC<InputProps>=(props)=>{
	return (
		<div className={style.wrapper}>
			<div className={style.wrapper__group}>
        {props.tipo==="string"?
        <input className={style.wrapper__input}  maxLength={props.max} type={props.tipo} required/>:
        <input className={style.wrapper__input}  max={props.max} type={props.tipo} required/>
        }
        
				<label className={style.wrapper__label}>{props.nombre}</label>
			</div>
		</div>
	);
  }

SimpleInput.defaultProps = defaultProps;

export default SimpleInput;

 