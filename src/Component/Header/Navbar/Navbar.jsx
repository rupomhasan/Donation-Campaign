import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import NavList from "./NavList";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between mx-3 md:mx-5 items-center">
      <div className="hidden md:block">
        <img src={`https://i.ibb.co/smzLnLG/Logo.png`} alt="logo" />
      </div>

      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {!open ? (
          <HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
        ) : (
          <ImCancelCircle className="text-2xl"></ImCancelCircle>
        )}
      </div>

      <div
        className={`absolute md:static top-16 p-2 rounded ${
          open === true
            ? "ml-4 duration-100 "
            : "-left-[909px] duration-1000 delay-75"
        }`}
      >
        <NavList></NavList>
      </div>
      <div className=" md:hidden">
        <img src={`https://i.ibb.co/P4LpGz5/tree.png`} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
