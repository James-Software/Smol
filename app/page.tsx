"use client"
import { useState } from "react";
import LinkBar from "../components/createLink";

export default function Home() {
  const [isFading, setIsFading] = useState(false);

  return (
    <div 
      className={`w-full flex flex-col items-center transition-opacity duration-200 ease-out ${
        isFading ? "opacity-0 pointer-events-none blur-xs" : "opacity-100 blur-none"
      }`}
    >
      <h1 className="font-fredoka font-bold text-9xl text-amber-600 pt-8">SMOL</h1>
      <LinkBar onEnter={() => setIsFading(true)} />
    </div>
  );
}