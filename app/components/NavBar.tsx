import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='w-full h-auto my-4 px-2 md:flex md:items-center md:justify-between md:h-12 bg-grey-50'>
        <div className='w-full h-12 flex flex-col items-start justify-between mb-4 md:w-2/5 md:m-0'>
            <form className='bg-white w-full h-12 shadow-lg rounded-md flex items-center'>
                <div className='w-auto flex items-center'>
                    <IoMdSearch className='h-12 mx-4 text-xl text-grey-950' />
                    <input type="text" className='w-full h-12 text-grey-950 flex-1 font-semibold text-sm text-left border-none outline-none' placeholder='Search for a country...' />
                </div>
            </form>
        </div>
        <div className='w-40 h-12 flex items-center justify-center my-12'>
            <Menu as='div' className={`w-full h-12 bg-white shadow-lg px-4 py-6 rounded`}>
                <MenuButton as='div' className={`text-sm text-grey-950 w-full flex items-center justify-between h-full`}>
                    <p>Filter by Region</p>
                    <IoChevronDownOutline />
                </MenuButton>
                <MenuItems anchor="bottom" className={`w-40 h-auto my-8 px-4 py-3 rounded shadow-md outline-none border-none`}>
                    <MenuItem as='div'>
                    <a className="block data-focus:bg-blue-100" href="">
                        Africa
                    </a>
                    </MenuItem>
                    <MenuItem as='div'>
                    <a className="block data-focus:bg-blue-100" href="">
                        America
                    </a>
                    </MenuItem>
                    <MenuItem as='div'> 
                    <a className="block data-focus:bg-blue-100" href="">
                        Asia
                    </a>
                    </MenuItem>
                    <MenuItem as='div'>
                    <a className="block data-focus:bg-blue-100" href="">
                        Europe
                    </a>
                    </MenuItem>
                    <MenuItem as='div'>
                    <a className="block data-focus:bg-blue-100" href="">
                        Oceania
                    </a>
                    </MenuItem>
                </MenuItems>
            </Menu>     
        </div>
    </div>
  )
}

export default NavBar