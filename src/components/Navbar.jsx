import {useState} from "react";
import longBurger from '../assets/long-burger.svg'
import shortBurger from '../assets/short-burger.svg'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <div className="w-full h-[100px] flex items-center justify-between px-10 sticky top-0">
        <img src={logo} alt="logo" className="w-[190px] h-[39px]" />
        <div className="flex flex-col justify-between items-end w-[44px] h-[30px]">
            <img src={longBurger} alt="menu" className="h-[6px]"/>
            <img src={shortBurger} alt="menu" className="h-[6px]"/>
            <img src={longBurger} alt="menu" className="h-[6px]"/>
        </div>

    </div>
  );
}

export default Navbar;