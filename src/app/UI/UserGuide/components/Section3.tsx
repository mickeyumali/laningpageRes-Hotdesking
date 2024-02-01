
"use client";



import Image from 'next/image'
import Calendar from '../../../../../public/img/Section3/Calendar.png'




export default function Section3() {

  
  
  return (
    
    <div className=' pt-10 mx-14 scroll-smooth max-[1000px]:mx-4' id='section3'>
      <div className=' mx-14 max-[1000px]:mx-4' >
        <div>
         <h1 className=" text-black text-xl font-medium max-[1000px]:text-center	">Section 3. Calendar</h1>
        </div>
        <div className='flex flex-row mt-8 max-[1000px]:flex-col max-[1000px]:gap-8'>
         <div className='flex flex-col basis-1/2 gap-8 mt-10 max-[1000px]:basis-0'>
          <h3 className=" text-blue-900 text-base ml-20 font-medium max-[1000px]:ml-0 max-[1000px]:text-center">A. Users Booked Schedules</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center max-[1000px]:ml-0 max-[1000px]:text-center">
          You can also look into a user&apos;s schedule based on when they booked a desk. For example in the photo, a user has reserved a desk from 8:30 a.m. to 9:00 a.m. 
          <br />
          <br />
          <br />
          You may also see the calendar by Day, Month, or Year by clicking the button in the center.
          </p>
         </div>
         <div className="flex basis-1/2 justify-center items-center max-[1000px]:basis-0">
          <Image
              className=""
              src={Calendar}
              alt=""
              width={450}
              height={550}
            />
        </div>
        </div>
      </div>
      
      
    </div>
  )
}
