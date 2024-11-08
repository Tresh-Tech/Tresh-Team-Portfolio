import React from 'react'
import Logo from '../assets/icons/LOGO.png'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'
import { Button } from './ui/button'
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
} from "@/components/ui/navigation-menu"

const NavBar = () => {
    const location = useLocation()
    return (
        <>
            <section className='flex items-center justify-around py-4 border border-black'>
                <img src={Logo} alt="" className='lg:w-[200px] max-lg:w-[180px]' />
                {/* NavLinks */}
                {/* <ul className='flex flex-1 max-tablet:hidden justify-center items-center lg:gap-x-6 max-lg:gap-x-2'>
                    <li>
                        <Link
                            className={`tracking-widest relative group text-lg`}
                            to="/">Home
                            <div className={`${location.pathname === '/' ? 'bg-red-600' : ''} absolute w-full h-0.5 transition-all duration-300`} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`tracking-widest relative group text-lg`}
                            to="/about">About
                            <div className={`${location.pathname === '/about' ? 'bg-red-600' : ''} absolute w-full h-0.5 transition-all duration-300`} />
                        </Link>
                    </li>
                    <li>
                        <Link className=' tracking-widest text-lg relative group' to="/contact">Contact Us
                            <div className={`${location.pathname === '/contact' ? 'bg-red-600' : ''} absolute w-full h-0.5 transition-all duration-300`} />
                        </Link>
                    </li>
                    <li>
                        <div>
                            <h1 className='flex cursor-pointer items-center text-lg gap-1'>Dashboard <HiOutlineChevronDown /></h1>
                        </div>
                    </li>
                </ul> */}

                <div className='flex-1 flex justify-center items-center '>
                    <NavigationMenu>
                        <NavigationMenuList className='space-x-6'>
                            <NavigationMenuItem>
                                <Link className='text-2xl' href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className=''>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className='text-2xl' href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className=''>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className='text-2xl' href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-2xl p-0'>Dashboard</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {/* <ul className="grid bg-treshBlack gap-3 md:w-[200px]"> */}
                                    {/* <li> */}
                                    <NavigationMenuLink className='bg-treshBlue' asChild>
                                        {/* <Link
                                                    className="flex h-full w-full rounded-md p-2 text-white"
                                                    to="/"
                                                > */}
                                        Sign in / Sign up
                                        {/* </Link> */}
                                    </NavigationMenuLink>
                                    {/* </li> */}
                                    {/* </ul> */}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className='flex max-tablet:hidden items-center gap-x-3.5 mr-2'>
                    <button className='font-semibold border border-black rounded-xl p-2.5'>Log in</button>
                    <button className='bg-treshBlue p-2.5 font-semibold rounded-xl text-white'>Sign up</button>
                </div>
            </section >
        </>
    )
}

export default NavBar