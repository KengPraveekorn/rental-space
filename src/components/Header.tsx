// import React from 'react'
import Logo from "../assets/img/logo1.svg";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="grid gap-4 grid-cols-3 items-center mx-auto max-w-screen-2xl">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="EAT Logo" />
          <h1 className="text-center dark:text-white text-xl">ข้อมูลสาขา</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
