import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full text-center mt-10">

      <h1 className="text-5xl font-extrabold leading-tight">
        Savor the Flavor <br />
        <span className="text-gray-700">Your Ultimate Food</span> <br />
        Destination
      </h1>

      <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
        Discover the best dishes from around the world, prepared with love.
      </p>

      <div className="mt-6 flex justify-center gap-5">
        <button className="px-8 py-3 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition">
          Order Now
        </button>
        <button className="px-8 py-3 bg-gray-200 text-gray-900 rounded-full shadow hover:bg-gray-300 transition">
          View Menu
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/hero.png"
          width={300}
          height={300}
          alt="Hero"
          className="rounded-full shadow-xl"
        />
      </div>
    </section>
  );
}
