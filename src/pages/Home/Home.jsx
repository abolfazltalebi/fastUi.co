import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="space-y-4 mt-24">
        <div>
          <h2 className="text-sm sm:text-2xl font-raleway text-black font-bold">
           What We do
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div>
              <WebDesign />
            </div>
        
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">Service 2</h3>
            <p className="text-sm">Description of Service 2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">Service 3</h3>
            <p className="text-sm">Description of Service 3</p>
          </div>
        </div>
      </section>
    </>
  );
}
