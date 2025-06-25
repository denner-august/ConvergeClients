import ConteudoBox from "../styles/conteudoBox.module.scss";
import ContainerSideBar from "../styles/sidebar.module.scss";

import { ClientesBox } from "@/components/clientesBox/ClientesBox";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ContainerBox } from "@/components/containerBox/containerBox";

export default async function Home() {
  const url = process.env.URL ?? "https://localhost:3000";

  console.log(url);

  const getAllClients = await fetch(`${url}/api/users/getUsers`, {
    cache: "no-store",
  });

  const clients = await getAllClients.json();

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
