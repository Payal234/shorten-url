import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
   <main className="bg-purple-100 mb-28">
  <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
    {/* Left Content */}
    <div className="bg-green-50 flex flex-col gap-6 items-center justify-center p-6 sm:p-10 text-center lg:text-left">
      <p className="text-xl sm:text-2xl font-bold max-w-lg">
        The best URL shortener in the Technical Tech.
      </p>
      <p className="text-sm sm:text-base text-gray-700 max-w-xl px-2 sm:px-10 lg:px-0">
        We are the most straightforward URL shortener in the world. Most other
        services track you or force login. We respect your privacy — no login required.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
        <Link href="/shorten">
          <button className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-6 py-2 font-bold text-white cursor-pointer">
            Try Now
          </button>
        </Link>
        <Link href="/github">
          <button className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-6 py-2 font-bold text-white cursor-pointer">
            GitHub
          </button>
        </Link>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
      <Image
        className="object-cover mix-blend-darken"
        alt="Illustration"
        src="https://t3.ftcdn.net/jpg/05/09/99/06/360_F_509990675_oIOittP28M3vTDcaV98sR1dXLYBFfgc8.webp"
        fill
        priority
      />
    </div>
  </section>
</main>

  );
}
