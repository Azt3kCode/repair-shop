"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const getLinkClass = (href: string) => {
    const baseClass =
      "group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-full border overflow-hidden transition-all";

    if (isActive(href)) {
      return `${baseClass} bg-purple-600 border-purple-400 shadow-lg shadow-purple-500/50`;
    }

    if (href === "/customers") {
      return `${baseClass} bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10`;
    }

    if (href === "/tickets") {
      return `${baseClass} bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10`;
    }

    return `${baseClass} bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10`;
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/90 border-b border-white/10 shadow-lg shadow-purple-900/20">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-bold text-lg">R</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Repair Shop
          </h1>
        </div>

        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className={getLinkClass("/")}>
                <span className="relative z-10 group-hover:text-purple-200 transition-colors">
                  Home
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-purple-500/10 to-transparent transition-transform duration-500 ease-in-out" />
              </Link>
            </li>

            <li>
              <Link href="/customers" className={getLinkClass("/customers")}>
                <span className="relative z-10 group-hover:text-pink-200 transition-colors">
                  Customers
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-pink-500/10 to-transparent transition-transform duration-500 ease-in-out" />
              </Link>
            </li>

            <li>
              <Link href="/tickets" className={getLinkClass("/tickets")}>
                <span className="relative z-10 group-hover:text-purple-200 transition-colors">
                  Tickets
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-purple-500/10 to-transparent transition-transform duration-500 ease-in-out" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </header>
  );
}

export default Header;
