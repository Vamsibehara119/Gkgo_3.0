"use client";

export default function Promotions() {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Promotions</h3>
      <div className="bg-gradient-to-br from-[#FF2B5E] to-[#EE1C25] rounded-[24px] p-6 text-white relative overflow-hidden h-[180px] flex flex-col justify-between shadow-lg shadow-red-100">
        <div className="relative z-10 max-w-[60%]">
          <h3 className="text-lg font-bold leading-tight mb-2">Rewards That Go Far</h3>
          <p className="text-[11px] text-white/90 mb-4">Earn points with every GKGI renewal. Click to learn more.</p>
          <button className="bg-white text-red-600 px-5 py-2 rounded-full text-[11px] font-bold shadow-md">
            Learn more
          </button>
        </div>

        {/* Gift Box Graphic */}
        <div className="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-90 rotate-12">
            <div className="text-8xl">🎁</div>
        </div>

        {/* Carousel Dots */}
        <div className="flex gap-1.5 mt-2">
          <div className="h-1.5 w-4 bg-white rounded-full"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-1.5 w-1.5 bg-white/30 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}