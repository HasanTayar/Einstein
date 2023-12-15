"use client";

import { useEffect, useState } from "react";
import { ProModal } from "@/components/pro-modal";

export const ModalProvider = () => {
  const [mounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return(
    <>
    <ProModal/>
    </>
  )
};
