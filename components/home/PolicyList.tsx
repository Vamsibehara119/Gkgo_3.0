export default function PolicyList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-3">
      
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
          🚗
        </div>
        <p className="font-medium text-sm text-gray-900">
          GK One Third Party Plus
        </p>
      </div>

      {/* Status + Vehicle in SAME ROW */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="flex items-center gap-1 text-green-700">
           <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-green-700 text-[10px] font-bold">
            ✓
          </span>
          Active policy
        </span>

        <span className="text-gray-300">|</span>

        <span>2018 Mazda 3 Sedan</span>
      </div>

      {/* Button BELOW, LEFT ALIGNED */}
      <button className="mt-2 inline-block bg-red-600 text-white text-xs px-4 py-1.5 rounded-md hover:bg-red-700">
        View policy details
      </button>
    </div>
  );
}
