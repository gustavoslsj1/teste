import Nome from "./Nome";
import styles from "@/styles/Home.module.css";

import { useEffect, useState } from "react";

export default function Home() {
  const [nutri,setnutri]= useState([])
  useEffect(()=>{
    function loadApi(){
      let url= 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)

      .then((r)=>r.json())
      .then((json)=>{
        setnutri(json)
      })
    }
    loadApi();
  },[])
  return(
    <div>
      <header className={styles.header}>
        <strong>artigo</strong>
      </header>

      {nutri.map((item)=>{
        return(
        <article className={styles.container} key={item.id}>
          <strong>{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} ></img>
          <p>{item.subtitulo}</p>
        </article>
        )
      })}
    </div>
  )
}
