"use client";
import { ChevronRight } from 'lucide-react';

export default function TrackApplications() {
  const steps = ["Application", "Quotes", "Submit", "Payment"];

  return (
    <div className="space-y-4">
      <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Track applications</h3>
      
      {/* 1. Continue Application Card */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[10px] font-bold text-orange-500 uppercase italic">Continue Application</span>
            <h4 className="font-black text-gray-800 text-sm">Private Commercial Comprehensive</h4>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </div>
        <p className="text-[10px] font-bold text-gray-400 mb-3">Step 1/4 Complete</p>
        <div className="relative flex items-center justify-between">
          <div className="absolute top-1.5 left-0 w-full h-[2px] bg-gray-100 -z-0" />
          <div className="absolute top-1.5 left-0 w-1/4 h-[2px] bg-green-500 -z-0" />
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className={`w-3 h-3 rounded-full z-10 ${i === 0 ? 'bg-green-500' : 'bg-gray-200'}`} />
              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Reviewing Card (Found here in the middle) */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-100 transition-colors">
        <div>
          <span className="bg-blue-50 text-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-1 inline-block">
            Reviewing
          </span>
          <h4 className="font-black text-gray-800 text-sm">#9827 Claims Application</h4>
          <p className="text-[11px] text-gray-400">We're reviewing your details.</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-300" />
      </div>

      {/* 3. Ready For Purchase Card */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm flex justify-between items-center">
        <div>
          <span className="text-[10px] font-bold text-green-500 uppercase mb-1 inline-block">Ready For Purchase</span>
          <h4 className="font-black text-gray-800 text-sm">Third Party Quote</h4>
          <p className="text-[11px] text-gray-400">Your quote is ready for purchase.</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-300" />
      </div>
    </div>
  );
}