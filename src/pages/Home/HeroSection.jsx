import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-heroSection w-full h-screen p-4 flex item-center justify-center">
      <div className="max-w-3xl flex flex-col items-center justify-center gap-4">
        <h2 className="text-sm sm:text-3xl md:text-6xl font-raleway text-black text-center font-bold">
          Awesome UI Dark Template for Webflow Agency
        </h2>
        <Link
          to=""
          className="text-sm text-white bg-[#252432] px-18 py-3 rounded-2xl"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
