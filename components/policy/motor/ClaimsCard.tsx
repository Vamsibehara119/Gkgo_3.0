export default function ClaimsCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 text-lg mb-1">Claims</h3>
      <p className="text-xs text-gray-400 mb-6">Manage your quotes here.</p>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-gray-800">#9827 Claims Report</span>
          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">Reviewing</span>
        </div>
        <p className="text-xs text-gray-500 mb-2">Your claims report is being reviewed.</p>
        <p className="text-xs font-semibold text-gray-700 mb-2">Step 3/14 complete</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
        </div>
        
        <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-tighter">
          <span>Submit</span>
          <span>Processing</span>
          <span className="font-bold text-gray-600">Review</span>
          <span>Processed</span>
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
        <div className="bg-blue-600 rounded-full p-1 mb-2">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="text-sm font-bold text-gray-800">Ready to start a claim</p>
        <p className="text-xs text-gray-500">
          Select <span className="text-blue-600 cursor-pointer">Here</span> or <span className="text-blue-600 cursor-pointer">start a claim</span> to get started.
        </p>
      </div>
    </div>
  );
}