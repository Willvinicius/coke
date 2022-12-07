import { useContext, useState } from "react"
import { ManagamentNamesContext } from "../context/ManagamentNamesContext";
import styles from "../styles/components/Input.module.css"




export function Input() {

    const [name, setName] = useState("");
    const {list, removeName, handleAdd} =useContext(ManagamentNamesContext);


    function changeNameState(evento:any) {
        setName(evento.target.value)
    }


    return(

        <div className={styles.inputcontainer}>
            <div className={styles.addusercontainer}>
                <input onChange={changeNameState} placeholder="Nome"/>
                <button onClick={()=>handleAdd(name)}>+</button>
            
                
            </div>
            {list.map((nome,index) => (
                <div className={styles.userlistcontainer}>
                <p>{nome}</p>
                <button onClick={()=>removeName(index)}>X</button>
            </div>

            ))}
            
        </div>
    )
}