import { Input } from "@/src/shared/ui/input";
import ChatHeader from "@/src/widgets/ChatHeader/ui/ChatHeader";
import ChatList from "@/src/widgets/ChatList/ui/ChatList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <ChatHeader/>
      <ChatList/>
    </div>
  );
}
