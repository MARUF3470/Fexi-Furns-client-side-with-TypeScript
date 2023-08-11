import React from 'react'
import { motion } from 'framer-motion'
import { IoMdClose } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
type ToggleDrawerType = {
    toggleDrawer2 : ()=> void
}
const SearchDrawer = ({toggleDrawer2}:ToggleDrawerType) => {
  return (
      <div>
        <div className="flex rounded-full bg-white mx-auto w-1/2 shadow-md">
          <input
            type="text"
            placeholder="Enter Your Search Keyword..."
            className="input text-xs input-bordered w-full py-2 px-4 rounded-l-full mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          />
          <button className="bg-violet-600 mt-3 hover:bg-violet-700 text-white py-2 px-4 rounded-r-full">
            <BsSearch className='text-2xl'/>
          </button>
        </div>
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 text-base-content">
            <div className='absolute bottom-10 right-1/2'>
                <motion.label onClick={toggleDrawer2} whileHover={{ rotate: 60 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                  }} htmlFor="my-drawer-4" className="drawer-button">
                  <IoMdClose className='w-8 h-8'></IoMdClose>
              </motion.label>
            </div>
        </ul>
    </div>
  )
}

export default SearchDrawer