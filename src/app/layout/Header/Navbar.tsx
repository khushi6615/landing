import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Pages", href: "/pages" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
   <nav
  className={
    mobile
      ? "flex flex-col items-start gap-5"
      : "flex items-center gap-5"
  }
>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#DBDFD0]"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}