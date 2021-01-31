import { navigate } from "@reach/router";
import React from "react"
import Description from "../../components/Description/Description";
import FormLogin from "../../components/FormLogin/FormLogin";
import style from "./Login.module.scss";


// const baseUrl = "https://freestyle.getsandbox.com/dummy/obtenerdatospersona";

function Login(){

  // React.useEffect(()=>{

  //   async function getPersona(){
  //     const dataPersona=await fetch(baseUrl).then((response)=>
  //     response.json());
  //     console.log(dataPersona);
  //   }
  //   getPersona();
  // })



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