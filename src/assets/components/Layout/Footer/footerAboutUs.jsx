import { NavLink } from "react-router-dom";

export default function AboutUs() {
  const aboutUs = [
    { id: 1, name: "About Us", src: "/" },
    { id: 1, name: "How it Works", src: "/" },
    { id: 1, name: "NFT Blog", src: "/" },
    { id: 1, name: "Privacy Policy", src: "/" },
  ];
  return (
    <div className="item2 space-y-5">
      <h2 className="text-xl font-bold">About Us</h2>
      <div>
        <ul className="flex flex-col gap-4 text-white/50">
        {
          aboutUs.map((aItem)=>{
            return(
              <li key={aItem.id}>
                <NavLink to={aItem.src}>{aItem.name}</NavLink>
              </li>
            )
          })
        }
          
        </ul>
      </div>
    </div>
  );
}
