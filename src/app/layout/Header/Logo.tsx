import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
    style: ["normal", "italic"],
});

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
      />

      <span className={`${playfair.className} text-[30px] font-semibold italic text-[#474747]`}>
        Bistro Bliss
      </span>
    </Link>
  );
}