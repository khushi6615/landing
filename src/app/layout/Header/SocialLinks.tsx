import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  const iconStyle =
    "flex h-6 w-6 items-center justify-center rounded-full bg-[#f9f9f746] text-white transition hover:bg-[#f9f9f783] ";

  return (
    <div className="flex gap-3">
         <Link href="#" className={iconStyle}>
        <FaTwitter size={12} />
      </Link>
      <Link href="#" className={iconStyle}>
        <FaFacebookF size={12} />
      </Link>

      <Link href="#" className={iconStyle}>
        <FaInstagram size={12} />
      </Link>

     

      <Link href="#" className={iconStyle}>
        <FaGithub size={12} />
      </Link>
    </div>
  );
}