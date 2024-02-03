"use client"

import Link from "next/link";
import MainMenu from "./MainMenu"
import Image from "next/image";

function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
            <Link href="/"><Image src="/img/icons/home-icon.png" width={55} height={100} alt="Home Logo"/></Link>
            </div>
            <div className="main-menu-toggle"  onClick={() => document.getElementById("main-nav").classList.toggle("show")}></div>
            <MainMenu />            
        </header>
        </>
    )
};

export default Header;