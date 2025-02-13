import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16 px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  );
};
