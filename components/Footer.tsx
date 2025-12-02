import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-14 border-t border-[#fa343a25]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-[#fa343a]">Yard.</h2>

            <p className="text-gray-400 mt-3 max-w-sm text-sm">
              Your AI housing agent — helping you find the nearest available
              home through WhatsApp. Simple, fast, and stress-free.
            </p>

            <div className="flex items-center gap-4 mt-5">
              {/* Twitter */}
              <Link
                href="#"
                className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#fa343a] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M21.538 7.5c.015.213.015.426.015.64 0 6.522-4.963 14.04-14.04 14.04v-.004A13.97 13.97 0 0 1 0 19.93a9.935 9.935 0 0 0 1.167.067 9.88 9.88 0 0 0 6.102-2.102 4.94 4.94 0 0 1-4.615-3.43 4.93 4.93 0 0 0 2.227-.085A4.94 4.94 0 0 1 .98 9.52v-.062a4.91 4.91 0 0 0 2.238.62A4.94 4.94 0 0 1 1.672 4.02a14.02 14.02 0 0 0 10.173 5.16 4.94 4.94 0 0 1 8.41-4.503 9.868 9.868 0 0 0 3.13-1.195 4.96 4.96 0 0 1-2.17 2.724A9.78 9.78 0 0 0 24 5.557a10.14 10.14 0 0 1-2.462 2.55z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#fa343a] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268a1.732 1.732 0 1 1 0-3.464 1.732 1.732 0 0 1 0 3.464zm14 12.268h-3v-5.5c0-3.036-3.5-2.796-3.5 0v5.5h-3v-11h3v1.688c1.396-2.586 6.5-2.777 6.5 2.476v6.836z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-white text-lg">
              Start Searching
            </h3>
            <p className="text-gray-400 text-sm mt-3 max-w-xs">
              Chat with our AI on WhatsApp and find a house near you instantly.
            </p>

            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#fa343a] text-white px-5 py-3 rounded-xl text-sm font-semibold 
              hover:bg-[#e30a11] transition shadow-sm hover:shadow-lg"
            >
              Talk To Yard on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[#fa343a25] pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Yard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
