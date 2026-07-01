"use client";

import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";
import { Phone, MailIcon } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
     
      <div className="bg-[#474747] px-4 text-white md:px-22">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between text-[10px] md:text-[11px]">
         
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span>(414) 857-0107</span>
          </div>

        
          <div className="flex items-center">
          
            <div className="flex items-center gap-1 md:hidden">
              <MailIcon className="h-3 w-3" />
              <span>yummy@bistrobliss</span>
            </div>

            <div className="hidden md:block">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

    
      <div className="relative bg-[#F9F9F7] px-4 md:px-22">
        <div className="mx-auto flex h-17 max-w-7xl items-center justify-between">
          <Logo />

          
          <div className="hidden items-center gap-8 md:flex">
            <Navbar />

            <button className="rounded-full border border-[#2C2F24] px-4 py-1 text-[11px] font-DM_sans duration-300 hover:bg-black hover:text-white">
              Book A Table
            </button>
          </div>

         
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </header>
  );
}