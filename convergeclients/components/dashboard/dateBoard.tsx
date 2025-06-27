"use client";

import styles from "./dateBoard.module.scss";
import { DateClientesProps } from "@/types/types";

export function DateDashboard({ clientes }: DateClientesProps) {
  const t: number = clientes.reduce((total, cliente) => {
    return total + Number(cliente.valorAtualDoContrato);
  }, 0);

  const totalClientes = clientes.length;

  return (
    <div className={styles.container}>
      <p>Faturamento bruto mensal </p>
      <span>
        {t.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>

      <p>Total de clientes cadastrados atualmente = {totalClientes}</p>
    </div>
  );
}
