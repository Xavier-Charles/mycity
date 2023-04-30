import { useState } from "react";
import city from "../assets/img/city.png";

const Nav = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="block h-8 w-auto lg:hidden"
                src={city}
                alt="My City logo"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src={city}
                alt="My City logo"
              />
            </div>
            <div className="flex space-x-4">
              <a
                href="/"
                className="rounded-md px-3 pt-2.5 text-xl font-medium text-secondary font-oleo"
              >
                My City
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
