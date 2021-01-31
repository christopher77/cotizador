import React from "react";
import style from "./PlanCollection.module.scss"
import PlanItem from "./PlanItem";


const PlanCollection: React.FC = () => {

  const ItemBasico={
    nombre:"BÁSICO",
    price:"160",
  }
  const ItemAvanzado={
    nombre:"AVANZADO",
    price:"200",
  }
  const ItemPremium={
    nombre:"PREMIUM",
    price:"250",
  }
  const ItemFull={
    nombre:"FULL",
    price:"500",
  }
  return(
    <div className={style.item__colection}>
      <PlanItem {...ItemBasico}/>
      <PlanItem {...ItemAvanzado}/>
      <PlanItem {...ItemPremium}/>
      <PlanItem {...ItemFull}/>
    </div>
  )

}

export default PlanCollection;