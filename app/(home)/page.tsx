import { Input } from "@/src/shared/ui/input";
import ChatHeader from "@/src/widgets/ChatHeader/ui/ChatHeader";
import ChatList from "@/src/widgets/ChatList/ui/ChatList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="shrink-0">
        <ChatHeader />
      </div>
      <div className="overflow-y-auto thin-scrollbar">
        <ChatList />
      </div>
    </div>
  );
}
