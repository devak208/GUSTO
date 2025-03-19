import Link from "next/link";

const GoogleMapComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-44">
      <h2 className="relative text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 text-center">
        Find Us Here
      </h2>
      <div className="relative w-full rounded-md overflow-hidden shadow-lg aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6]">
        <iframe
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6553.2173003644175!2d77.66616189493728!3d11.415111240410225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9699755561a47%3A0xb8c3c353be0ad19b!2sGovernment%20College%20of%20Engineering%2C%20Erode%20(IRTT%20%2FGCE-E)!5e1!3m2!1sen!2sus!4v1742314976686!5m2!1sen!2sus"
        ></iframe>
      </div>
      <div className="relative flex items-center justify-center gap-1 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
        Looking for bus routes & timings?
        <Link href="/faq" className="text-blue-500 underline">
          Click here
        </Link>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
