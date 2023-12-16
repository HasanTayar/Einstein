"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { MobileSideBarProps } from "@/constants/interfaces";

const MobileSidebar = ({apiLimitCount=0 , isPro=false}:MobileSideBarProps) => {
    const [isMounted , setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true)
    },[]);
    if(!isMounted) {return null;}
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
