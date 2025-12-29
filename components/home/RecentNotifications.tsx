"use client";

export default function RecentNotifications() {
  const items = [
    { title: 'Time to Renew Your Policy', sub: 'Due in 30 days', action: 'Renew Now' },
    { title: 'Upcoming Payment', sub: 'JMD $20,876.00 due in 30 days', action: 'Pay Now' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Recent Notifications</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 p-5 rounded-[24px] shadow-sm flex justify-between items-center">
            <div className="max-w-[60%]">
              <h4 className="font-bold text-[13px] text-gray-800 mb-1">{item.title}</h4>
              <p className="text-[11px] text-gray-400 leading-snug">{item.sub}</p>
            </div>
            <button className="bg-[#1A1A1A] text-white text-[10px] font-bold px-4 py-2 rounded-full whitespace-nowrap">
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}