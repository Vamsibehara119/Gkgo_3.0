import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import ProductIcons from '@/components/home/ProductIcons';
import RecentNotifications from '@/components/home/RecentNotifications';
import Promotions from '@/components/home/Promotions';
import TrackApplications from '@/components/home/TrackApplications';
import DashBoardCards from '@/components/home/DashBoardCards';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-10">
        <HeroBanner />
        <ProductIcons />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Promotions (Desktop left) */}
          <div className="space-y-10">
            <Promotions />
            {/* On Desktop, Notifications stay here. On mobile, we hide them here */}
            <div className="hidden lg:block">
              <RecentNotifications />
            </div>
          </div>

          {/* Column 2: Track Applications */}
          <div className="space-y-10">
            <TrackApplications />
            {/* MOBILE ONLY: Notifications appear here, below Track Applications */}
            <div className="lg:hidden">
              <RecentNotifications />
            </div>
          </div>

          {/* Column 3: Payments */}
          <DashBoardCards />
          
        </div>
      </main>

      <Footer />
    </div>
  );
}