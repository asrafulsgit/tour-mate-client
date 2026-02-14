import ResetPasswordForm from "@/components/auth/forgot-password/ResetPasswordForm";
import BackButton from "@/components/shared/BackButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-2">
              <div className="flex gap-2 items-center">
                <BackButton />
                <CardTitle className="text-xl sm:text-2xl">
                  Reset Your Password
                </CardTitle>
              </div>
              <CardDescription>
                Create a new password for your account. Make sure it's strong
                and unique.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ResetPasswordForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default page;
