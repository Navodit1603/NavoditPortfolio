import bg1 from "../assets/backgrounds/bg1.png";
"use client";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <ShootingStars className="pointer-events-none z-0" />
      <StarsBackground starDensity={0.001} className="pointer-events-none z-0" />

      <div className="flex items-center justify-center h-screen px-4 text-center relative z-10">
        <h1 className="text-[#F8FCFA] text-[8vw] font-bold">
          Navodit Maheshwari's Portfolio
        </h1>
      </div>
    </div>
  );
}
