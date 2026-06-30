export default function HeroButtons() {
  return (
    <div className="mt-6 flex justify-center gap-4">
      <button className="text-[11px] rounded-full border border-[#182226] px-7 py-3.5 font-bold text-[#182226] transition hover:border-transparent hover:bg-[#AD343E] hover:text-white">
        Book A Table
      </button>

      <button className="text-[11px] rounded-full border border-[#182226] px-7 py-3.5 font-bold text-[#182226] transition hover:border-transparent hover:bg-[#AD343E] hover:text-white">
        Explore Menu
      </button>
    </div>
  );
}