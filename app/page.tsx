"use client";
import { useState } from "react";
import LinkBar from "../components/createLink";
import { Toaster } from 'sonner';
import { toast } from "sonner";

const createShortLink = async (targetUrl: string) => {
  try {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: targetUrl }),
    });

    const data = await response.json();
    
    if (!response.ok) throw new Error(data.error);

    console.log('Generated code:', data.code);
    toast.success("Success", { description: "Your link has been created" });
    return data.code;
  } catch (error) {
    toast.error("Error", { description: "Failed to generate link: " + String(error) });
  }
};

export default function Home() {
  const [isFading, setIsFading] = useState(false);
  const [shortLink, setShortLink] = useState<string | null>(null);

  return (
    <>
      {/* Container forces the dissapearing div and the appearing div to stack on top of eachother */}
      <div className="grid grid-cols-1 grid-rows-1 place-items-center w-full">
        
        {/* DISSAPPEARS AFTER ENTERING A LINK */}

        <div className={`col-start-1 row-start-1 w-full flex flex-col items-center transition-all duration-300 ease-out ${
            isFading ? "opacity-0 pointer-events-none blur-xs" : "opacity-100 blur-none"
          }`}>
          <h1 className="font-fredoka font-bold text-9xl text-amber-600 pt-8">SMOL</h1>

          <LinkBar onEnter={async (url: string) => {
            setIsFading(true);
            const code = await createShortLink(url);
            setShortLink(code);
          }} />
        </div>

        {/* APPEARS AFTER ENTERING A LINK */}

        <div className={`col-start-1 row-start-1 w-full flex flex-col items-center transition-all duration-300 delay-300 ease-out ${
            isFading ? "opacity-100 blur-none" : "pointer-events-none opacity-0 blur-xs"
          }`}>
          <h1 className="font-sans font-bold text-4xl text-amber-600 pt-8">Your link is ready</h1>
          <h1 className="font-sans font-bold text-2xl text-amber-600 pt-16">urlsmol.vercel.app/{shortLink}</h1>
        </div>

      </div>
      <Toaster/>
    </>
  );
}