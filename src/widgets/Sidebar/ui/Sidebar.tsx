import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/shared/ui/sidebar"
import { Switch } from "@/src/shared/ui/switch";
import { Phone, Moon, Settings, CircleUserRound, User, UsersRound,  Megaphone } from "lucide-react"

const items = [
  {
    title: "Profile",
    url: "profile",
    icon: CircleUserRound,
  },
  {
    title: "New Group",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "New Channel",
    url: "#",
    icon: Megaphone,
  },
  {
    title: "Contacts",
    url: "#",
    icon: User,
  },
  {
    title: "Calls",
    url: "#",
    icon: Phone,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Night Mode",
    url: "#",
    icon: Moon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href={item.url}>
                        <item.icon /> 
                        <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    </Sidebar>
  )
}