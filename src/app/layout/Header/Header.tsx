import Logo from "./Logo";
import Navbar from "./Navbar";
import { Phone, MailIcon } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
     
      <div className="bg-[#474747] text-white px-22">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between">
         
          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>(414) 857-0107</span>
            </div>

            <div className="flex items-center gap-1">
              <MailIcon className="h-3 w-3" />
              <span>yummy@bistrobliss</span>
            </div>
          </div>

          
          <SocialLinks />
        </div>
      </div>

     
      <div className="bg-[#F9F9F7] px-22">
        <div className="mx-auto flex h-17 max-w-7xl items-center justify-between">
          <Logo />

          <Navbar />

          <button className="rounded-full border border-[#2C2F24] px-4 py-1 text-[11px] font-DM_sans duration-300 hover:bg-black hover:text-white">
            Book A Table
          </button>
        </div>
      </div>
    </header>
  );
}