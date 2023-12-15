import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";

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
export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
  },
  {
    label: "Music Genration",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "text-emerald-500/10",
  },
  {
    label: "Image Genration",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "text-pink-700/10",
  },
  {
    label: "Viedo Genration",
    icon: VideoIcon,
    href: "/viedo",
    color: "text-orange-700",
    bgColor: "text-orange-700/10",
  },
  {
    label: "Code Genration",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "text-green-700/10",
  },
];

export const amountOptions = [
  {
    value: "1",
    label: "1 photo",
  },
  {
    value: "2",
    label: "2 photo",
  },
  {
    value: "3",
    label: "3 photo",
  },
  {
    value: "4",
    label: "4 photo",
  },
  {
    value: "5",
    label: "5 photo",
  },
];
export const reslutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
