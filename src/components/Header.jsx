// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/disease", name: "Disease" },
    { to: "/treatment", name: "Treatment" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
    { to: "/subscribe", name: "Subscribe" },
  ];

  return (
    <header className="container fixed z-[99] w-full ">
      <div className="mt-0 px-6  py-2 flex justify-between items-center bg-zinc-100">
        <h1 className="">
          <Link to="/">My App</Link>
        </h1>
        <nav>
          <div className='links flex gap-10 justify-center items-center'>
            {links.map((item, i) => (
              <Link key={i} to={item.to} className={`text-lg capitalize font-light ${i === 5? "ml-32" : ""}`}>
                {item.name!== "Subscribe"? item.name : (
                  <button className="rounded-md bg-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {item.name}
                  </button>
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;