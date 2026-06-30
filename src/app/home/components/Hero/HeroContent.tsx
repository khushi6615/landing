import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center    text-center">
      <h1
        className={`${playfair.className} mb-7 text-[65px] leading-[65px] font-normal text-black`}
      >
        Best food for
        <br />
        your taste
      </h1>

      <p className="max-w-xl text-[14px] leading-5 text-black">
        Discover delectable cuisine and unforgettable moments
        <br />
        in our welcoming, culinary haven.
      </p>
    </div>
  );
}