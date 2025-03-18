import Link from "next/link";

const GoogleMapComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-44">
      <h2 className="relative text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
        Find Us Here
      </h2>
      <div className="relative w-full rounded-md overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="400px"
          loading="lazy"
          allowFullScreen
          className="w-full h-[400px] rounded-xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6553.2173003644175!2d77.66616189493728!3d11.415111240410225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9699755561a47%3A0xb8c3c353be0ad19b!2sGovernment%20College%20of%20Engineering%2C%20Erode%20(IRTT%20%2FGCE-E)!5e1!3m2!1sen!2sus!4v1742314976686!5m2!1sen!2sus"
        ></iframe>
      </div>
      <div className="relative flex items-center justify-center gap-4 top-10 text-center text-sm text-gray-600 dark:text-gray-400">
        <Link href="/faq" className="underline">
          Available bus routes?
        </Link>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
