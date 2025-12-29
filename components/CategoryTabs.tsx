export default function CategoryTabs() {
  return (
    <div className="w-full flex justify-center gap-10 mt-14 text-lg font-semibold text-gray-700">
      <span className="border-b-4 border-orange-500 pb-1 cursor-pointer">
        Top Dishes
      </span>
      <span className="hover:text-orange-500 cursor-pointer">New Arrivals</span>
      <span className="hover:text-orange-500 cursor-pointer">Best Offers</span>
    </div>
  );
}
