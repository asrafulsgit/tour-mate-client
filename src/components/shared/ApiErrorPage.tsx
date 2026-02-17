"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const ApiErrorPage = ({ name }: { name: string }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="grow flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-destructive sm:text-2xl font-bold mb-4">
          Failed to fetch {name}
        </h1>
        <Button onClick={handleBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ApiErrorPage;
