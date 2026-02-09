import BackButton from "@/components/shared/BackButton";

const FormHeader = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex items-center gap-4 border-b pb-4 sm:px-4 mb-4">
      <BackButton />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default FormHeader;
