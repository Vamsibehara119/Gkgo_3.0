import Image from "next/image";

export default function ChefSection() {
  return (
    <section className="mt-20 px-10">
      <div className="bg-white rounded-2xl shadow-xl flex p-10 gap-10 max-w-5xl mx-auto">

        <Image
          src="/images.jpg"
          width={220}
          height={220}
          alt="Chef"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Dishes?</h2>

          <ul className="text-gray-700 space-y-3">
            <li>• Fresh & Organic Ingredients</li>
            <li>• Skilled Professional Chefs</li>
            <li>• Affordable & Tasty Meals</li>
            <li>• Fast Delivery & Easy Ordering</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
