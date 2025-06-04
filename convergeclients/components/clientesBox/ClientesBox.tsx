import styles from "./Clientes.module.scss";
import { ClientesInfo } from "./clientesInfo";

export function ClientesBox() {
  return (
    <div className={styles.Container}>
      <input type="text" placeholder="Pesquisar cliente" />
      <p>Clientes cadastrados</p>
      <div className={styles.ClientesInfo}>
        <ClientesInfo />
      </div>
    </div>
  );
}
