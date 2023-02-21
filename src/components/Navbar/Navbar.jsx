import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import logo from "../../images/Icon.png";
import { NavbarData } from "./NavbarData";
import exit from '../../images/exit.png'

const Navbar = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  return (
    <div
      className={`bg-[#FFC248] bg-opacity-20 w-16  h-[110vh] pt-8  `}
    >
      <div className="inline-flex">
        <img
          src={logo}
          className={`cursor-pointer block float-left  w-12`}
        />
      </div>
      <ul className="pt-16 ">
        {NavbarData.map((data) => (
          <li
            key={data.id}
            className={`mt-4 hover:bg-[#FFC248]  hover:rounded-full h-12 w-12   ${selectedItemId === data.id ? " bg-[#FFC248] rounded-full" : ""
              }`}
            onClick={() => handleItemClick(data.id)}
          >
            <img src={data.logo} className="p-4" />
          </li>
        ))}
      </ul>
      <div>
        <img src={exit} alt="" className="w-16 p-2 pt-16" />
      </div>
    </div>
  );
};

export default Navbar;
