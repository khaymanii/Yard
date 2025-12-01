"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 
      bg-black
      ${isScrolled ? "shadow-md" : "shadow-none"}
    `}
    >
      <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-[#fa343a] text-2xl">Yard</h1>
        </div>

        <Link
          href="https://wa.me/2340000000000"
          target="_blank"
          className="bg-[#fa343a] text-white px-4 py-1.5 rounded-xl text-xs font-medium 
          hover:bg-[#e30a11] transition shadow-sm hover:shadow-md"
        >
          Talk To Yard
        </Link>
      </div>
    </nav>
  );
}

export default Header;
