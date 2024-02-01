
"use client";




import dynamic from 'next/dynamic';
import {BrowserRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import Header from '../UserGuide/components/Header';
import Section1 from '../UserGuide/components/Section1';
import Section2 from '../UserGuide/components/Section2';
import Section3 from '../UserGuide/components/Section3';
import Section4 from '../UserGuide/components/Section4';
import Devider from '../UserGuide/components/Devider';

export default function Layout() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId:any) => {
    setActiveButton(buttonId);
  };

  
  return (
  
   
    <div className='bg-white h-full'>
      <BrowserRouter>
        <Header />
        <br />
        <br />
        <Devider />
        <div className=' w-full  h-32 flex justify-center items-center'>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <Link to='#section1' smooth className={`text-black  px-3 rounded-md scroll-smooth  hover:bg-blue-900  hover:text-white duration-300 ${activeButton === 1 ? 'bg-rose-800 text-white hover:bg-black' :''}`} onClick={() => handleButtonClick(1)} >Registration</Link>

            <Link to="#section2" smooth className={`text-black  px-3 rounded-md scroll-smooth  hover:bg-blue-900  hover:text-white duration-300 ${activeButton === 2 ? 'bg-rose-800 text-white hover:bg-black' :''}`} onClick={() => handleButtonClick(2)}>Account Management</Link>

            <Link to="#section3" smooth className={`text-black  px-3 rounded-md scroll-smooth  hover:bg-blue-900 hover:text-white duration-300 ${activeButton === 3 ? 'bg-rose-800 text-white hover:bg-black' :''}`} onClick={() => handleButtonClick(3)}> Calendar</Link>

            <Link to="#section4" smooth className={`text-black  px-3 rounded-md scroll-smooth  hover:bg-blue-900  hover:text-white duration-300 ${activeButton === 4 ? 'bg-rose-800 text-white hover:bg-black ' :''}`} onClick={() => handleButtonClick(4)}> Desk Map and Bookings</Link>
            
          </div>
        </div>
        
        <Devider />

        {/* section 1 */}
        <Section1 />

        <br />
        <Devider />
         
        {/* Section 2 */}
        <Section2 />

        <br />
        <Devider />

        {/* Section 3 */}
        <Section3 />

        <br />
        <Devider />

        {/* Section 4 */}
        <Section4 />
        <br />
        <br />
        <br />
      </BrowserRouter>
    </div>
    
  )
}
