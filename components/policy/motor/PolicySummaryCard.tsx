import { Info, CheckCircle2, Car } from 'lucide-react';

export default function PolicySummaryCard({ data }: { data: any }) {
  return (
    <div className="bg-white p-5 lg:p-8 rounded-2xl lg:rounded-xl shadow-sm border border-gray-100 h-full">
      <div className="flex items-center gap-2 mb-1 lg:mb-4">
        <div className="hidden lg:block p-2 bg-red-50 rounded-full">
          <Car className="w-5 h-5 text-red-600" />
        </div>
        <h3 className="font-bold text-gray-800 text-lg lg:text-xl">
          <span className="lg:hidden">{data.mobileTitle}</span>
          <span className="hidden lg:inline">{data.title}</span>
        </h3>
      </div>
      
      {/* Mobile Expiry Info */}
      <div className="lg:hidden flex items-center gap-1.5 mb-4 text-red-500">
        <Info className="w-4 h-4" />
        <span className="text-[11px] font-bold">Policy expires in {data.daysLeft} days</span>
      </div>

      {/* Desktop Active Info */}
      <div className="hidden lg:flex items-center gap-2 mb-6">
        <span className="flex items-center gap-1 text-green-600 text-sm font-bold">
          <CheckCircle2 className="w-4 h-4 fill-green-600 text-white" />
          Active policy
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-700 font-medium text-sm">{data.vehicle}</span>
      </div>

      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-2xl lg:text-4xl font-black text-blue-600 lg:text-red-600">{data.premium}</span>
        <span className="text-gray-400 text-xs lg:text-sm font-medium">Premium</span>
      </div>

      <div className="space-y-3 lg:space-y-4 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Policy Number</span>
          <span className="font-bold lg:font-semibold text-gray-800">{data.number}</span>
        </div>
        <div className="flex justify-between items-center lg:hidden">
          <span className="text-gray-500">Vehicle</span>
          <span className="font-bold text-gray-800">{data.vehicle}</span>
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <span className="text-gray-500">Licence Plate</span>
          <span className="font-semibold text-gray-800">{data.licencePlate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Insured until</span>
          <span className="font-bold lg:font-semibold text-gray-800">
            <span className="lg:hidden">{data.mobileExpiry}</span>
            <span className="hidden lg:inline">{data.expiryDate}</span>
          </span>
        </div>
      </div>
    </div>
  );
}