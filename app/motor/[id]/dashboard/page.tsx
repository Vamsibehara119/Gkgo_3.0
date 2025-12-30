import Header from '@/components/layout/Header';
import { MOCK_DATA } from '@/data/data';
import PolicySummaryCard from '@/components/policy/motor/PolicySummaryCard';
import DriverDetailsCard from '@/components/policy/motor/DriverDetailsCard';
import PaymentsCard from '@/components/policy/motor/PaymentsCard';
import PolicyDocumentsCard from '@/components/policy/motor/PolicyDocumentsCard';
import PolicyCoverageCard from '@/components/policy/motor/PolicyCoverageCard';
import ClaimsCard from '@/components/policy/motor/ClaimsCard';

export default function MotorDashboard() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] lg:bg-white">
      <Header />
      
      <main className="p-4 lg:p-12 max-w-[1400px] mx-auto">
        <div className="mb-6 lg:mb-10">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            Policy Details - 2018 Mazda 3 Sedan - 2045JR
          </h1>
          <p className="text-sm text-gray-500">Manage all your policy needs in one place.</p>
        </div>

        {/* Action Row */}
        <div className="grid grid-cols-2 lg:flex gap-3 lg:gap-6 mb-10">
          <div className="bg-white lg:bg-[#F9FAFB] p-4 lg:px-8 lg:py-4 rounded-2xl lg:rounded-xl border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center lg:items-center gap-3 w-full lg:w-72">
            <span className="text-2xl lg:text-xl bg-green-50 lg:bg-transparent p-2 rounded-xl">💵</span>
            <div className="text-center lg:text-left">
              <p className="font-bold text-gray-800 text-xs lg:text-sm">Pay Premium</p>
              <p className="hidden lg:block text-[10px] text-gray-400">Make Quick Payments here.</p>
              <p className="lg:hidden text-[10px] text-gray-400 uppercase font-bold mt-0.5">Pay</p>
            </div>
          </div>
          <div className="bg-white lg:bg-[#F9FAFB] p-4 lg:px-8 lg:py-4 rounded-2xl lg:rounded-xl border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center lg:items-center gap-3 w-full lg:w-72">
            <span className="text-2xl lg:text-xl bg-red-50 lg:bg-transparent p-2 rounded-xl">📝</span>
            <div className="text-center lg:text-left">
              <p className="font-bold text-gray-800 text-xs lg:text-sm">Start a Claim</p>
              <p className="hidden lg:block text-[10px] text-gray-400">begin your claim process.</p>
              <p className="lg:hidden text-[10px] text-gray-400 uppercase font-bold mt-0.5">Claims</p>
            </div>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <PolicySummaryCard data={MOCK_DATA.policy} />
          <PolicyDocumentsCard documents={MOCK_DATA.documents} />
          <PolicyCoverageCard coverage={MOCK_DATA.coverage} />
          <DriverDetailsCard drivers={MOCK_DATA.drivers} />
          <ClaimsCard claims={MOCK_DATA.claims} />
          <PaymentsCard />
        </div>
      </main>
    </div>
  );
}