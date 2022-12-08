import { useContext } from "react";
import { Input } from "../components/Input";
import { ManagamentNamesContext } from "../context/ManagamentNamesContext";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const { list, issorted, sorteado, sortear } = useContext(
    ManagamentNamesContext
  );

  return (
    <div className={styles.homecontainer}>
      <div className={styles.listcontainer}>
        <Input />
      </div>

      <div className={styles.sorteiocontainer}>
        <img src="/coquinha.png" />
        {issorted ? <h2>{list[sorteado]}</h2> : <h2>Sortudo</h2>}
        <button onClick={sortear}>Sortear</button>
      </div>
    </div>
  );
}
