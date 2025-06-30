export interface DateClientesProps {
  clientes: {
    id: number;
    ClientNome: string;
    titulo: string;
    descrição: string;
    modeloDeNegocio: string;
    plataforma: string;
    valorAtualDoContrato: string;
    dataInicio: string;
  }[];
}

export interface ClientesProps {
  id: number;
  titulo: string;
  ClientNome: string;
  descrição: string;
  plataforma: string;
  modeloDeNegocio: string;
  valorAtualDoContrato: string;
  dataInicio: string;
}
