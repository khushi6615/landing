import Logo from "./Logo";
import Navbar from "./Navbar";
import { Phone,MailIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full   ">
      
      <div className="bg-[#474747] text-white  px-22">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex gap-4 text-[11px]">
             <Phone className="h-3 w-3 mt-1 " />(414) 857-0107
               
           <MailIcon className="h-3 w-3 mt-1"/>
            <span> yummy@bistrobliss</span>
          </div>

          <div className="flex gap-4">
           
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

     
      <div className="bg-[#F9F9F7]  px-22">
        <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo />

          <Navbar />

          <button className=" rounded-full border border-[#2C2F24] px-4 py-1 text-[11px] font-DM_sans duration-300 hover:bg-black hover:text-white">
            Book A Table
          </button>
        </div>
      </div>
    </header>
  );
}