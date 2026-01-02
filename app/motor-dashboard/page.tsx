import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotorDashboard from "@/components/home/MotorDashboard";

export default function MotorDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
        <MotorDashboard />
      </main>

      <Footer />
    </div>
  );
}
