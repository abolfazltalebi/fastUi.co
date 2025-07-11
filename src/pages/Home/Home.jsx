import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import WebDesign from "../../assets/components/Icon/WebDesign";
import UiDesign from "../../assets/components/Icon/UiDesign";
import Responsive from "../../assets/components/Icon/Responsive";
import Ecommersce from "../../assets/components/Icon/Ecommersce";
import WebFlow from "../../assets/components/Icon/WebFlow";
import Costume from "../../assets/components/Icon/Costume";
import item4 from '/public/assets/images/item4-wedo.webp'
export default function Home() {
  const itemWhatWeDo = [
    {
      id: 1,
      name: "Web Design",
      caption:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      icon: <WebDesign />,
    },
    {
      id: 2,
      name: "UI/UX Design",
      caption:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      icon: <UiDesign />,
    },
    {
      id: 3,
      name: "Responsive Design",
      caption:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      icon: <Responsive />,
    },
    {
      id: 4,
      name: "E-commerce Solutions:",
      caption:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      icon: <Ecommersce />,
    },
    {
      id: 5,
      name: "Webflow",
      caption:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      icon: <WebFlow />,
    },
    {
      id: 6,
      name: "Custom Development",
      caption:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      icon: <Costume />,
    },
  ];
  return (
    <>
      <HeroSection />
      <section className="space-y-4 mt-24">
        <div>
          <h2 className="text-sm sm:text-2xl font-raleway text-black font-bold">
            What We do
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itemWhatWeDo.map((iWeDo) => {
            return (
              <div className={`bg-white p-4 rounded-lg shadow space-y-4 row-span-1 ${iWeDo==4? "row-span-2":"row-span-0"}`} key={iWeDo.id}>
                <div className="bg-[#F5F8FF] rounded-[12px] inline-flex size-10 flex items-center justify-center">
                  {iWeDo.icon}
                </div>
                <div className="space-y-1">
                  <h2 className="text-[#252432] font-bold text-lg">
                    {iWeDo.name}
                  </h2>
                  <p class="text-[#8987A1] text-sm leading-normal">
                    {iWeDo.caption}
                  </p>
                  {
                    iWeDo.id==4&&(
                      <div>
                        <img src={item4} alt="" />
                      </div>
                    )
                  }
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
