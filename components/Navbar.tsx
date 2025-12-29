export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-orange-500">TheFood</h1>

      <ul className="flex gap-10 text-gray-700 font-medium">
        <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 cursor-pointer">Menu</li>
        <li className="hover:text-orange-500 cursor-pointer">Offers</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact</li>
      </ul>

      <button className="px-5 py-2 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition">
        Sign In
      </button>
    </nav>
  );
}
