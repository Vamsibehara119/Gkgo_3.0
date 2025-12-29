"use client";

const transactions = [
  { date: 'Today', ref: '#223-401-224', type: 'FGB Visa', amount: 'J$20,000.00' },
  { date: 'Jun 23 2025', ref: '#223-401-224', type: 'GK One Visa', amount: 'J$8,000.00' },
  { date: 'May 21 2025', ref: '#223-401-224', type: 'GK One Visa', amount: 'J$40,000.00' },
  { date: 'Apr 11 2025', ref: '#223-401-224', type: 'Scotia MC', amount: 'J$35,000.00' },
  { date: 'Mar 01 2025', ref: '#223-401-224', type: 'Salary Deduct', amount: 'J$9,000.00' },
];

export default function DashBoardCards() {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Payments</h3>
      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <h4 className="font-black text-gray-800 text-sm mb-6">Last Transactions</h4>
        
        <div className="space-y-5">
          {transactions.map((tx, i) => (
            <div key={i} className="grid grid-cols-3 md:grid-cols-4 items-center">
              <span className="text-[12px] font-bold text-gray-800">{tx.date}</span>
              <span className="hidden md:block text-[10px] text-gray-400 font-medium uppercase text-center">{tx.ref}</span>
              <span className="text-[11px] text-gray-400 font-medium text-center">{tx.type}</span>
              <span className="text-[12px] font-black text-green-600 italic text-right">{tx.amount}</span>
            </div>
          ))}
        </div>

        {/* Buttons: hidden on mobile, visible on desktop (lg) */}
        <div className="mt-8 hidden lg:flex justify-between items-center">
          <button className="text-[11px] font-bold text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            View More
          </button>
          <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-[11px] font-bold">
            Make a payment
          </button>
        </div>
      </div>
    </div>
  );
}