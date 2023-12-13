import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react";

export const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
    },
    {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      color: "text-violet-500",
    },
    {
      label: "Image Genration",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-700",
    },
    {
      label: "Viedo Genration",
      icon: VideoIcon,
      href: "/viedo",
      color: "text-orange-700",
    },
    {
      label: "Music Genration",
      icon: Music,
      href: "/music",
      color: "text-emerald-500",
    },
    {
      label: "Code Genration",
      icon: Code,
      href: "/code",
      color: "text-green-700",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];
  export const tools= [ 
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "text-violet-500/10"
      },
      {
        label: "Music Genration",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
        bgColor: "text-emerald-500/10"

      },
      {
        label: "Image Genration",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        bgColor: "text-pink-700/10"

      },
      {
        label: "Viedo Genration",
        icon: VideoIcon,
        href: "/viedo",
        color: "text-orange-700",
        bgColor: "text-orange-700/10"

      },
      {
        label: "Code Genration",
        icon: Code,
        href: "/code",
        color: "text-green-700",
        bgColor: "text-green-700/10"

      },
  ]