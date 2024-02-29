import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg">
      <div className="flex col-span-1" >
        <img
        onClick={()=> toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        ></img>
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        ></img>
      </div>
      <div className="col-span-10 tpx-10 mx-8">
        <input className="w-1/2 border border-gray-100 p-2 rounded-2xl" type="text"></input>
        <button className="border border-gray-400 p-2 rounded-2xl">search</button>
      </div>
      <div className="col-span-1">
        <img className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
