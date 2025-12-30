import { ShieldCheck } from 'lucide-react';

export default function PolicyCoverageCard({ coverage }: { coverage: any[] }) {
  return (
    <div className="bg-white p-5 lg:p-8 rounded-2xl lg:rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-1 lg:mb-4">
        <div className="flex items-center gap-2">
          <div className="hidden lg:block p-2 bg-red-50 rounded-full">
            <ShieldCheck className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg lg:text-xl">
              <span className="lg:hidden">Coverage Features</span>
              <span className="hidden lg:inline">Policy Coverage</span>
            </h3>
            <p className="hidden lg:block text-xs text-gray-400">See your policy coverage below.</p>
          </div>
        </div>
        {/* Mobile Header Button */}
        <button className="lg:hidden bg-zinc-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold">
          Manage
        </button>
      </div>
      <p className="lg:hidden text-[10px] text-gray-400 mb-6">View your policy coverage details.</p>

      <div className="space-y-4 lg:space-y-5 mb-8 lg:mb-6">
        {coverage.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <span className="text-gray-400 lg:text-gray-500 font-medium">
              {item.label}
            </span>
            <span className="text-gray-800 font-bold lg:font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop Footer Button */}
      <button className="hidden lg:block w-full bg-red-600 text-white py-3 rounded-lg font-bold text-sm transition-colors hover:bg-red-700">
        Download all
      </button>
    </div>
  );
}