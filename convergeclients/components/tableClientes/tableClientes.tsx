"use client";

import { UserRoundX } from "lucide-react";
import { removeClients } from "@/conection/removeClient";

import styles from "../clientContainer/Clientes.module.scss";
import tableStyles from "../tableClientes/tableClients.module.scss";

import { ClientesProps } from "@/types/types";

export function TableClientes(props: {
  clients: ClientesProps[];
  selectClient: (arg: ClientesProps) => void;
}) {
  return (
    <table className={tableStyles.Container}>
      <thead>
        <tr>
          <th>Nome do cliente</th>
          <th>Descrição</th>
          <th>Nome do negocio</th>
          <th>Modelo de Negócio</th>
          <th>Valor do Contrato</th>
          <th>Data de Início</th>
          <th>deletar</th>
        </tr>
      </thead>
      <tbody className={tableStyles.tableBody}>
        {props.clients.map((cliente: ClientesProps) => (
          <tr key={cliente.id} onClick={() => props.selectClient(cliente)}>
            <td>{cliente.ClientNome}</td>
            <td>{cliente.descrição}</td>
            <td>{cliente.titulo}</td>
            <td>{cliente.modeloDeNegocio}</td>
            <td>
              {Number(cliente.valorAtualDoContrato).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td>
              {cliente.dataInicio
                ? new Date(cliente.dataInicio).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "Data não informada"}
            </td>
            <td>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  removeClients(cliente.id);
                }}
              >
                <UserRoundX />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function TableClientesMobile(props: {
  clients: ClientesProps[];
  selectClient: (arg: ClientesProps) => void;
}) {
  return (
    <table className={tableStyles.Container}>
      <thead>
        <tr>
          <th>Nome</th>

          <th>Modelo de Negócio</th>
          <th>Valor do Contrato</th>

          <th>deletar</th>
        </tr>
      </thead>
      <tbody className={tableStyles.tableBody}>
        {props.clients.map((cliente: ClientesProps) => (
          <tr key={cliente.id} onClick={() => props.selectClient(cliente)}>
            <td>{cliente.ClientNome}</td>

            <td>{cliente.modeloDeNegocio}</td>
            <td>
              {Number(cliente.valorAtualDoContrato).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>

            <td>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  removeClients(cliente.id);
                }}
              >
                <UserRoundX />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
