import item4 from "/public/assets/images/item4-wedo.webp";

export default function WhatWeDoItem({ item }) {
  if (!item) return null;
  const isWideCard = item.id === 5;

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow space-y-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:border hover:border-blue-500
        ${isWideCard ? "md:col-span-2" : ""}`}
    >
      <div className="bg-[#F5F8FF] rounded-[12px] inline-flex size-10 flex items-center justify-center">
        {item.icon}
      </div>

      <div className="space-y-1">
        <h2 className="text-[#252432] font-bold text-lg">{item.name}</h2>
        <p className="text-[#8987A1] text-sm leading-normal">{item.caption}</p>

        {item.id === 4 && (
          <div className="mt-2">
            <img
              src={item4}
              alt="E-commerce preview"
              className="w-full rounded-lg aspect-video object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
