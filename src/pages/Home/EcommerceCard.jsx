import Ecommersce from "../../assets/components/Icon/Ecommersce";
import item4 from "/public/assets/images/item4-wedo.webp";

export default function EcommerceCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:border hover:border-blue-500 w-full md:w-[300px] shrink-0">
      <div className="bg-[#F5F8FF] rounded-[12px] inline-flex size-10 flex items-center justify-center">
        <Ecommersce />
      </div>

      <div className="space-y-1">
        <h2 className="text-[#252432] font-bold text-lg">E-commerce Solutions:</h2>
        <p className="text-[#8987A1] text-sm leading-normal">
          From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
        </p>
        <div className="mt-2">
          <img
            src={item4}
            alt="E-commerce preview"
            className="w-full rounded-lg aspect-video object-cover"
          />
        </div>
      </div>
    </div>
  );
}
