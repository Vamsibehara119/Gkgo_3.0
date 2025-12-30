import SideImage from "@/components/ui/SideImage";
import LoginCard from "@/components/ui/LoginCard";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-[1fr_1fr] items-center justify-around px-10">
      {/* Left Image (Hidden on mobile) */}
      <div className="hidden md:block">
        <SideImage />
      </div>
        
      {/* Right Login Section */}
      <div className="flex items-center justify-center">
        <LoginCard />
      </div>
    </div>
  );
}
