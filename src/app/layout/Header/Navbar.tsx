import Link from "next/link";
import { navLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex items-center gap-10">
        {navLinks.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="px-4 py-1.5 rounded-full text-black text-[11px] transition-all duration-200 hover:bg-[#DBDFD0]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}