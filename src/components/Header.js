import Link from "next/link"
import styles from "../styles/header.module.css"
export default function Hearder(){
    return(
        <header>
            <nav className={styles.nav}>
                <Link href="/" > Home</Link>
                <Link href="/Form" className={styles.form}> Form</Link>
                <Link href="/Tarefa2"> Tarefa2</Link>
            </nav>
        </header>
    )
}