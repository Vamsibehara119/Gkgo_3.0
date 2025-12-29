import Image from "next/image";

interface Item {
  title: string;
  price: string;
  img: string;
}

export default function FoodSection({
  title,
  items
}: {
  title: string;
  items: Item[];
}) {
  return (
    <section className="mt-16 px-10">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">

        {items.map((food, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition"
          >
            <Image
              src={food.img}
              width={160}
              height={160}
              alt={food.title}
              className="rounded-xl mx-auto"
            />

            <h3 className="mt-4 font-semibold text-lg text-center">{food.title}</h3>

            <p className="text-orange-500 font-bold text-center mt-2">
              ${food.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
