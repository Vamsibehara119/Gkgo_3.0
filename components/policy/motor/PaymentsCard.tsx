export default function PaymentsCard() {
  const transactions = [
    { date: 'Today', id: '#223-401-224', type: 'FGB Visa', amount: 'J$20,000.00' },
    { date: 'Jun 23 2025', id: '#223-401-224', type: 'GK One Visa', amount: 'J$8,000.00' },
  ];

  return (
    <div className="bg-white p-5 lg:p-8 rounded-2xl lg:rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-6 lg:mb-8">
        <div>
          <h3 className="font-bold text-gray-800 text-lg lg:text-xl">Payments</h3>
          <p className="text-xs text-gray-400">View your latest payments here.</p>
        </div>
        <button className="lg:hidden bg-zinc-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">
          Pay Premium
        </button>
      </div>

      <div className="hidden lg:block mb-8">
        <h4 className="text-sm font-bold text-gray-800 mb-4">Last Transactions</h4>
        <table className="w-full text-left text-xs">
          <thead className="text-gray-400 font-bold border-b border-gray-50 uppercase tracking-tighter">
            <tr>
              <th className="pb-3">Dates</th>
              <th className="pb-3">Transaction #</th>
              <th className="pb-3">Payment type</th>
              <th className="pb-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {transactions.map((t, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-4 text-gray-500">{t.date}</td>
                <td className="py-4 font-medium">{t.id}</td>
                <td className="py-4 font-medium">{t.type}</td>
                <td className="py-4 text-right font-bold text-green-600">{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 lg:flex-[2] bg-red-600 text-white py-3 rounded-xl lg:rounded-lg font-bold text-sm uppercase lg:normal-case">
          Make payment
        </button>
        <button className="flex-1 bg-gray-100 text-blue-600 lg:text-blue-500 py-3 rounded-xl lg:rounded-lg font-bold text-sm">
          View More
        </button>
      </div>
    </div>
  );
}