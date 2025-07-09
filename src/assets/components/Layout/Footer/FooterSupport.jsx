import { NavLink } from "react-router-dom";
import { linksSupport } from "../../../../constants/FooterLinkx";

export default function FooterSupport() {

  return (
    <div className="item2 space-y-5">
      <h2 className="text-xl font-bold">Support</h2>
      <div>
        <ul className="flex flex-col gap-4 text-white/50">
        {
          linksSupport.map((aItem)=>{
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
