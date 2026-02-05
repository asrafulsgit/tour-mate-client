import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react"; 

const NotFoundApplication = () => {
  return (
    <Card className="p-4 sm:p-8 text-center gap-0 sm:gap-6">
      <FileText
        size={48}
        className="mx-auto mb-4 text-muted-foreground opacity-50"
      />
      <h3 className="text-lg font-semibold text-foreground mb-2">
        No Application Found
      </h3>
      <p className="text-muted-foreground mb-6">
        You haven't submitted a guide application yet. Submit your application
        to get started.
      </p>
      <Button
      //   onClick={() => setActiveTab("new")}
      >
        Submit Application
      </Button>
    </Card>
  );
};

export default NotFoundApplication;
