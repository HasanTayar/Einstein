import { LucideIcon } from "lucide-react";

export interface HeadingProps{
    title:string,
    description:string,
    icon:LucideIcon
    iconColor?:string,
    bgColor?:string
}
export interface EmptyProps{
    label:string,
    
}
export interface SideBarProps{
    apiLimitCount:number
    isPro:boolean
}
export interface FreeCounterProps{
    apiLimitCount:number
    isPro:boolean
}
export interface useProModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}
export interface MobileSideBarProps{
    apiLimitCount:number
    isPro: boolean
}
export interface SubscriptionButtonProps{
    isPro : boolean
}