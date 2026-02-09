import FormHeader from "../../../FormHeader";
import UpdatetourForm from "@/components/admin/tour-management/UpdateTourForm";

const page = () => {
  return (
    <section className="px-2 py-4">
      <div className="bg-background border rounded-xl p-4 w-full max-w-5xl mx-auto">
        <FormHeader title="Update Tour" />
        <UpdatetourForm />
      </div>
    </section>
  );
};

export default page;
