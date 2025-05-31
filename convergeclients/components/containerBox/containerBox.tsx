import styles from "./ContainerBox.module.scss";

import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContainerBox() {
  return (
    <div className={styles.Container}>
      <div>
        <h1>Bem-vindo ao Gestão de Clientes</h1>
        <p>Gerencie seus clientes em um só lugar.</p>
      </div>

      <Button>
        novo cliente <UserPlus />
      </Button>
    </div>
  );
}
