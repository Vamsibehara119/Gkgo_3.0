export default function QuotesAndClaims({ type }: { type: "quote" | "claim" }) {
  const isQuote = type === "quote";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">
          {isQuote ? "Private Comprehensive" : "#9827 Claims Report"}
        </p>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            isQuote
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {isQuote ? "Continue Application" : "Reviewing"}
        </span>
      </div>

      <p className="text-xs text-gray-500">
        Step 3 / 4 complete
      </p>

      <div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              isQuote ? "bg-green-500 w-3/4" : "bg-blue-500 w-3/4"
            }`}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Submit</span>
          <span>Processing</span>
          <span>Review</span>
          <span>Processed</span>
        </div>
      </div>
    </div>
  );
}
