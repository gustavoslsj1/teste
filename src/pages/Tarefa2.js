import { useState } from "react"
import styles from "../styles/tarefa2.module.css"
export default function Tarefa2(){
    const [nome,setNome] = useState('')
    const [idade,setIdade] = useState('')
    const [user, setUser] = useState({})

    function handleclick(e){
        e.preventDefault()
        setUser({
            nome:nome,
            idade:idade
        })
    }
    return(
        <div>

            <form onSubmit={handleclick}>
                <input
                placeholder='nome'
                value={nome}
                onChange={(e)=>setNome(e.target.value)}>
                </input>
                <input
                placeholder='idade'
                value={idade}
                onChange={(e)=>setIdade(e.target.value)}>
                </input>
                <button className={styles.button} type="submit"> submit</button>
            </form>
            <span>nome {user.nome}</span>
            <br></br>
            <span>idade {user.idade}</span>

          
        </div>
    )
}