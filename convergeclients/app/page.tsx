import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Container/app-sidebar";
import { ContainerBox } from "@/components/containerBox/containerBox";

import ConteudoBox from "../styles/conteudoBox.module.scss";
import ContainerSideBar from "../styles/sidebar.module.scss";
import { ClientesBox } from "@/components/clientesBox/ClientesBox";

export default function Home() {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <main className={ContainerSideBar.Container}>
        {/* <div className={ContainerSideBar.headSideBar}>
          <SidebarTrigger size="lg" className={ContainerSideBar.Trigger} />
          <p>Gestor de tráfego</p>
        </div> */}

        <div className={ConteudoBox.Container}>
          <ContainerBox />
          <ClientesBox />
        </div>
      </main>
    </SidebarProvider>
  );
}
