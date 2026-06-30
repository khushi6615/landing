import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/image.png')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center mt-16">
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
}