import { CheckCircle2 } from "lucide-react";

const SuccessMessage = () => {
  return (
    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
      <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
      <div>
        <h3 className="font-semibold text-green-800">
          Application Submitted Successfully!
        </h3>
        <p className="text-sm text-green-700 mt-1">
          We will review your application and get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
