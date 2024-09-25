import { useState } from "react";
import styles from "../styles/form.module.css"
export default function Form(){
    const[input,setInput]= useState('')

    const [tarefas, setTarefas]= useState([
        'ir pra casa',
        'estudar para prova de amanhã'
    ])

    function handleclick(e){
        e.preventDefault()
        setTarefas([...tarefas, input])
        setInput('')
    }
    return(
        <div className={styles.head}>
            <strong className={styles.titulo}> tarefas </strong>

            <form onSubmit={handleclick} className={styles.form}>
                <p className={styles.subtitulo}>escreva as tarefas</p>
                <input
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="tarefas"
                ></input>
                <button type="submit" className={styles.button}> +</button>
            </form>
            <ul>
                {tarefas.map((tarefa)=>(
                    <li key={tarefa} className={styles.lista}>{tarefa}
                    </li>
                ))}
            </ul>
           
        </div>
    );
}