"use client";

export default function HeroBanner() {
  return (
    <div className="relative h-[200px] md:h-[300px] w-full rounded-3xl overflow-hidden shadow-lg">
      {/* Background Image - Replace with your actual path */}
      <img 
        src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=1200" 
        alt="Aerial Coastline"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-gradient-overlay flex flex-col justify-center px-8 md:px-12 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome Back, Jane</h1>
        <p className="text-sm md:text-base opacity-90 max-w-md">
          From the everyday to the unexpected, we're here to help you stay in control.
        </p>
      </div>
    </div>
  );
}