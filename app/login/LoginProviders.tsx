export default function LoginProviders() {
  return (
    <div className="flex flex-col gap-3">
      <button
        className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition"
      >
        Sign In with GK One
      </button>

      <button
        className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
      >
        Get a quote
      </button>
    </div>
  );
}
