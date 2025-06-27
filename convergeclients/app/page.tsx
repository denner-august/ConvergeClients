import ConteudoBox from "../styles/conteudoBox.module.scss";
import ContainerSideBar from "../styles/sidebar.module.scss";

import { ContainerBox } from "@/components/containerBox/containerBox";
import { ClientesBox } from "@/components/clientContainer/ClientesBox";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DateDashboard } from "@/components/dashboard/dateBoard";

export default async function Home() {
  const url = process.env.URL ?? "http://localhost:3000";

  const getAllClients = await fetch(`${url}/api/users/getUsers`, {
    cache: "no-store",
  });

  const clients = await getAllClients.json();

  return (
    <SidebarProvider>
      <main className={ContainerSideBar.Container}>
        <div className={ConteudoBox.Container}>
          <ContainerBox />
          <DateDashboard clientes={clients} />
          <ClientesBox AllClients={clients} />
        </div>
      </main>
    </SidebarProvider>
  );
}
