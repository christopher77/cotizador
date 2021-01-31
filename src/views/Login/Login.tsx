import React from "react"
import Description from "../../components/Description/Description";
import FormLogin from "../../components/FormLogin/FormLogin";
import style from "./Login.module.scss";

function Login(){
  return(
    <div className={style.container}>
      <Description/>
      <FormLogin/>
    </div>
  )
}

export default Login;