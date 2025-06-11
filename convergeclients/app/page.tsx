import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Container/app-sidebar";
import { ContainerBox } from "@/components/containerBox/containerBox";

import ConteudoBox from "../styles/conteudoBox.module.scss";
import ContainerSideBar from "../styles/sidebar.module.scss";
import { ClientesBox } from "@/components/clientesBox/ClientesBox";

interface ClientesProps {
  id: number;
  ClientNome: String;
  titulo: string;
  descrição: string;
  modeloDeNegocio: string;
  valorAtualDoContrato: string;
  dataInicio: string;
}

export default async function Home() {
  let getAllClients = await fetch("http://localhost:3000/api/users/getUsers");
  let clients = await getAllClients.json();

  return (
    <SidebarProvider>
      <main className={ContainerSideBar.Container}>
        <div className={ConteudoBox.Container}>
          <ContainerBox />
          <ClientesBox AllClients={clients} />
        </div>
      </main>
    </SidebarProvider>
  );
}
