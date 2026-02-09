import CreateDivisionForm from "@/components/admin/division-management/CreateDivisionForm";
import FormHeader from "../../FormHeader";

const page = () => {
  return (
    <section className="px-2 py-4">
      <div className="bg-background border rounded-xl p-4 w-full max-w-5xl mx-auto">
        <FormHeader title="Create Division" />
        <CreateDivisionForm />
      </div>
    </section>
  );
};

export default page;
