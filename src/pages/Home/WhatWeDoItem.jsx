import WhatWeDoItem from "./WhatWeDoItem";
import EcommerceCard from "./EcommerceCard";
import { itemWhatWeDo } from "../../constants/ItemWhatWeDo";




export default function WhatWeDoSection() {
  return (
    <section className="space-y-4 mt-24">
      <div>
        <h2 className="text-sm sm:text-2xl font-raleway text-black font-bold">
          What We do
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 flex-1">
          {itemWhatWeDo.filter(Boolean).map((item) => (
            <WhatWeDoItem key={item.id} item={item} />
          ))}
        </div>

        {/* Right Card */}
        <EcommerceCard />
      </div>
    </section>
  );
}
