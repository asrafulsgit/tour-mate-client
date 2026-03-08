import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const NotFoundApplication = ({onSetActiveTab} : {onSetActiveTab : (data : "new")=> void}) => {
  return (
    <Card className="p-4 sm:p-8 text-center gap-2 sm:gap-6">
      <FileText
        className="mx-auto text-muted-foreground opacity-50 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      />
      <h3 className="text-lg font-semibold text-foreground">
        No Application Found
      </h3>
      <p className="text-muted-foreground mb-4 sm:mb-6">
        You haven't submitted a guide application yet. Submit your application
        to get started.
      </p>
      <Button
        onClick={() => onSetActiveTab("new")}
      >
        Submit Application
      </Button>
    </Card>
  );
};

export default NotFoundApplication;
