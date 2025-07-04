import styles from "./ContainerBox.module.scss";
import { FormCreate } from "../createClient/createClient";

export function ContainerBox() {
  return (
    <div className={styles.Container}>
      <div>
        <h1>Bem-vindo ao ConvegerCleintes</h1>
        <p>Gerencie seus clientes de tráfego pago em um só lugar.</p>
      </div>

      <FormCreate />
    </div>
  );
}
