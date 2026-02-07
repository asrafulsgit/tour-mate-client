import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
