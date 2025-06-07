import React from 'react';
import './Header.css'

function Header() {
    return (
        <>
            <header className='w-[100vw] h-12 fixed top-0 z-[100]'>
                <nav className='bg-[#D8232A] w-[100vw] h-12 montserrat-font flex flex-row items-center justify-between px-2 md:px-8 xl:px-30 text-white gap-40'>

                    <ul className='flex gap-15 w-[100vw] px-3 lg:w-[20vw] items-center justify-evenly'>
                        <li className='text-xl lg:text-3xl montserrat-font-appName'>magicbricks</li>
                        <li className='flex md:hidden w-[60vw] cursor-pointer h-9 bg-white py-1 px-2  text-black rounded-4xl  items-center'>
                            <a href="https://post.magicbricks.com/" target='_blank' className='flex flex-row gap-2 h-8 items-center justify-center w-full'>
                                <p className='text-[13px]'>Post Property</p>
                                <p className='bg-yellow-500 rounded-3xl text-[11px] h-6 py-1 px-2'>FREE</p>
                            </a>
                        </li>
                    </ul>

                    <ul className='hidden md:flex md:gap-10 lg:gap-15 items-center '>
                        <li className='w-20 cursor-pointer'>login <span><i className="fa-solid fa-angle-down"></i></span></li>
                        <li className='hidden md:flex cursor-pointer h-8 bg-white py-1 px-4 w-55 text-black rounded-4xl items-center'>
                            <a href="https://post.magicbricks.com/" target='_blank' className='flex items-center gap-3 h-8'>
                                <p>Post Property </p>
                                <p className='bg-yellow-500 h-6 rounded-3xl text-[11px] py-1 px-2'>FREE</p>
                            </a>
                        </li>
                    </ul>

                </nav>
            </header>
        </>
    );
}

export default Header;
