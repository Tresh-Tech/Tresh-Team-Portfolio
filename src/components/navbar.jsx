import React from "react";
import Logo from "../assets/icons/LOGO.png";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavDashboardDropdown = () => (
  <span>
    <NavigationMenuTrigger className="text-xl p-0 capitalize hover:text-[#1D4ED8]">
      dashboard
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid bg-treshBlack gap-3 md:w-[200px]">
        <li>
          <NavigationMenuLink asChild>
            <NavLink
              className="flex h-full w-full rounded-md p-2 text-white capitalize"
              to="/dashboard"
            >
              dashboard
            </NavLink>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </span>
);

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <section className="flex px-[50px] py-[20px] items-center justify-between z-50 fixed w-full">
        <img
          src={Logo}
          alt="Tresh Tech's Team Logo"
          className="lg:w-[200px] max-lg:w-[180px]"
        />

        <div className="flex relative justify-center items-center">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {["home", "about", "contact"].map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavLink
                    key={link}
                    to={`/${
                      link === "home" && link !== "dashboard" ? "" : link
                    }`}
                    className={`relative text-xl capitalize ${({
                      isActive,
                    }) => {
                      return isActive ? "active" : "";
                    }}`}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="hover:text-[#1D4ED8]">
                      {link}
                    </NavigationMenuLink>
                  </NavLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavDashboardDropdown />
              </NavigationMenuItem>
              {/*
              <NavigationMenuItem>
                <NavLink className="text-xl" to="/" legacyBehavior passHref>
                  <NavigationMenuLink className="">Home</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  className="text-xl"
                  to="/about"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="">About</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  className="text-xl "
                  to="/contact"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl p-0">
                  Dashboard
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid bg-treshBlack gap-3 md:w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink
                          className="flex h-full w-full rounded-md p-2 text-white"
                          to="/dashboard"
                        >
                          Dashboard
                        </NavLink>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>*/}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex max-tablet:hidden items-center gap-x-3.5 mr-2">
          <button className="font-semibold text-xl text-center border border-black rounded-xl p-2.5">
            Log in
          </button>
          <button className="bg-treshBlue text-xl text-center p-2.5 font-semibold rounded-xl text-white">
            Sign up
          </button>
        </div>
      </section>
    </>
  );
};

export default NavBar;
