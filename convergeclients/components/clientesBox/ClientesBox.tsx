import styles from "./Clientes.module.scss";

export function ClientesBox() {
  return (
    <div className={styles.Container}>
      <input type="text" placeholder="Pesquisar cliente" />
      <p>Clientes cadastrados</p>
    </div>
  );
}
