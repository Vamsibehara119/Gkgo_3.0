export default function StartClaimCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-800 mb-2">
        Ready to start a claim
      </h3>
      <p className="text-sm text-gray-600">
        Select <strong>Here</strong> or start a claim to get started.
      </p>

      <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700">
        Start claim
      </button>
    </div>
  );
}
