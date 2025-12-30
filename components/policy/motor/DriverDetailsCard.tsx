export default function DriverDetailsCard({ drivers }: { drivers: any[] }) {
  return (
    <div className="bg-white p-5 lg:p-8 rounded-2xl lg:rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-bold text-gray-800 text-lg lg:text-xl">Driver Details</h3>
          <p className="text-xs text-gray-400">Manage your drivers here.</p>
        </div>
        <button className="hidden lg:block bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm">
          Add driver
        </button>
        <button className="lg:hidden bg-zinc-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold">
          Add Driver
        </button>
      </div>

      <div className="space-y-8 lg:space-y-6 mb-8">
        {drivers.map((driver, idx) => (
          <div key={idx} className="relative">
            <p className="text-[11px] lg:text-sm font-bold text-gray-800 lg:text-gray-400 mb-2 lg:mb-3">
              Driver {idx + 1} {idx === 0 && <span className="lg:hidden text-gray-400 font-medium ml-1">(Main Driver)</span>}
            </p>
            <div className="flex justify-between items-start mb-1 lg:mb-2">
              <span className="text-gray-400 font-medium text-sm">Name</span>
              <span className="text-gray-800 font-bold lg:font-semibold text-right w-2/3">{driver.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium text-sm">TRN</span>
              <span className="text-gray-800 font-bold lg:font-semibold">{driver.trn}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="flex-1 lg:flex-none lg:w-32 bg-gray-100 lg:bg-transparent text-blue-600 lg:text-blue-500 py-2.5 rounded-xl lg:rounded-none font-bold text-sm">
          View all
        </button>
        <button className="lg:hidden flex-1 bg-red-600 text-white py-2.5 rounded-xl font-bold text-sm">
          Add driver
        </button>
      </div>
    </div>
  );
}