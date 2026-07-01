"use client";

import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: MobileMenuProps) {
  return (
    <>
    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
      >
        <Menu className="h-7 w-7" />
      </button>

      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

     
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-50 bg-[#F9F9F7] shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)}>
            <X className="h-7 w-7" />
          </button>
        </div>

       
        <div className="px-6">
          <Navbar mobile />

          <button className="mt-8 w-full rounded-full border border-[#2C2F24] py-3 hover:bg-black hover:text-white">
            Book A Table
          </button>
        </div>
      </div>
    </>
  );
}