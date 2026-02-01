"use client"
import { useRouter } from "next/navigation"; 
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Button size="icon" variant="link"
      className="border text-muted-foreground hover:text-foreground transition"
      onClick={handleBack}
    >
      <ArrowLeft size={20} />
    </Button>
  );
};

export default BackButton;
