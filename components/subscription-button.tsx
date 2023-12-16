"use client";
import { SubscriptionButtonProps } from "@/constants/interfaces";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log("[BILLING_ERROR]",error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button variant={isPro ? "default" : "premium"} disabled={loading} onClick={onClick}>
      {isPro ? "Mange Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
