import { navigate } from "@reach/router";
import React from "react"
import { isPropertySignature } from "typescript";
import Description from "../../components/Description/Description";
import FormLogin from "../../components/FormLogin/FormLogin";
import style from "./Login.module.scss";

function Login(){

  function goAddInsure(){
    navigate("/insure");
    console.log("hice click");
  }

  const propsInsure={
    onClick:()=>navigate("/insure"),
  }

  return(
    <div className={style.container}>
      <Description/>
      <FormLogin {...propsInsure}/>
    </div>
  )
}

export default Login;