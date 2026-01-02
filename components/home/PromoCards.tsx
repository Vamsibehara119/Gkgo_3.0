export default function PromoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="bg-red-600 rounded-xl overflow-hidden text-white shadow-sm">
        <div className="flex h-full">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-base">
                Rewards That Go Far
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Earn points with every GKC renewal. Click to learn more
              </p>
            </div>

            <div>
              <button className="mt-4 bg-white text-red-600 text-sm px-4 py-1.5 rounded-md">
                View More
              </button>

              {/* DOTS */}
              <div className="flex gap-1 mt-4">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white/40 rounded-full" />
                <span className="w-2 h-2 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-32">
            <img
              src="/images/image.png"
              alt="Rewards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-red-500 rounded-xl overflow-hidden text-white shadow-sm">
        <div className="flex h-full">

          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-base">
                Keeping You Covered
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div>
              <button className="mt-4 bg-white text-red-600 text-sm px-4 py-1.5 rounded-md">
                View More
              </button>

              <div className="flex gap-1 mt-4">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white/40 rounded-full" />
                <span className="w-2 h-2 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>

          <div className="w-32">
            <img
              src="/images/image 1.png"
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-red-600 rounded-xl overflow-hidden text-white shadow-sm">
        <div className="flex h-full">

          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-base">
                Travel With Ease
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div>
              <button className="mt-4 bg-white text-red-600 text-sm px-4 py-1.5 rounded-md">
                View More
              </button>

              <div className="flex gap-1 mt-4">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white/40 rounded-full" />
                <span className="w-2 h-2 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>

          <div className="w-32">
            <img
              src="/images/image 2.png"
              alt="Travel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
