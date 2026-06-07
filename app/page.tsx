"use client";
import { useState } from "react";
import LinkBar from "../components/createLink";
import { Toaster } from 'sonner';
import { toast } from "sonner";

export default function Home() {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      {/* Container wrapper forces children to stack on top of each other */}
      <div className="grid grid-cols-1 grid-rows-1 place-items-center w-full">
        
        {/* FIRST DIV */}
        <div className={`col-start-1 row-start-1 w-full flex flex-col items-center transition-all duration-300 ease-out ${
            isFading ? "opacity-0 pointer-events-none blur-xs" : "opacity-100 blur-none"
          }`}>
          <h1 className="font-fredoka font-bold text-9xl text-amber-600 pt-8">SMOL</h1>
          <LinkBar onEnter={() => {
            setIsFading(true); 
            toast.success("Success", { description: "Your link has created" });
          }} />
        </div>

        {/* SECOND DIV */}
        <div className={`col-start-1 row-start-1 w-full flex flex-col items-center transition-all duration-300 delay-300 ease-out ${
            isFading ? "opacity-100 blur-none" : "pointer-events-none opacity-0 blur-xs"
          }`}>
          <h1 className="font-sans font-bold text-xl text-amber-600 pt-8">Your link is ready</h1>
        </div>

      </div>
      <Toaster/>
    </>
  );
}