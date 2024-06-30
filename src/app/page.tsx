import Image from "next/image";
import Hero from "@/Components/Hero";
import Biography from "@/Components/Biography";
import Gallery from "@/Components/Gallery";

export default function Home() {
  return (
    <main className="flex flex-col gap-[40px]">
      <h1 className="font-playfairDisplaySC text-slate-50 text-center text-8xl uppercase">
        Dorothea <br /> Lange
      </h1>
      <Hero />
      <Biography />
      <Gallery />
    </main>
  );
}
