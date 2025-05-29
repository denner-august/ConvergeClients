"use client";
import { Users, Home, Settings, CreditCard } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Clientes",
    url: "#",
    icon: Users,
  },
  {
    title: "Faturamento",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  function closeSidebar() {
    toggleSidebar();
  }

  return (
    <Sidebar side="left">
      <SidebarHeader className="px-6 py-4, bg-[#DFD5C9] ">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl text-center text-traffic-blue-800">
            Gestão de clientes <br /> para tráfego pago
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#DFD5C9]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <button key={item.title} onClick={closeSidebar}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </button>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
