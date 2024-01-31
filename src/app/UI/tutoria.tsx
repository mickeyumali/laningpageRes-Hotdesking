"use client";
import elips from "../img/Ellipse.png"
import demo from "../img/demo.png"
import Image from 'next/image'





export default function Tutorial (){
  

  return(
    <div>
        <div className="bg-white h-screen relative max-[1000px]:hidden">
          
          <div className= "h-screen relative flex justify-center items-center ">
          <Image
            className="absolute top-10 right-40 "
            src={elips}
            alt=""
            width={500}
            height={500}
          />
          <div className=" z-10">
            <h1 className="text-5xl	font-semibold	text-blue-900 text-center mb-8">How it works</h1>
            <Image
                className=""
                src={demo}
                alt=""
                width={500}
                height={500}
              />
          </div>
          </div>
          
          <div className="z-10 w-56 h-36 text-center flex flex-col items-center  px-1 py-1 rounded-md bg-white drop-shadow-md absolute bottom-5 left-56 ">
          <p className="text-blue-900 text-base	">Book a Desk</p>
          <hr  className=" w-40 mt-3 mb-2 bg-slate-900 "/>
          <p className="text-slate-800	 text-xs px-2">Employees can reserve a desk in accordance with their preferred schedule and select the most suitable desk for their needs.  </p>
          </div>
          <div className="z-10 w-56 h-36 text-center flex flex-col items-center  px-1 py-1 rounded-md bg-white drop-shadow-md absolute top-52 right-56 ">
          <p className="text-blue-900 text-base	">Available Desk</p>
          <hr  className=" w-40 mt-3 mb-2 bg-slate-900 "/>
          <p className="text-slate-800	 text-xs mt-3 px-2">Users can reserve their preferred desk by checking which desks are available.  </p>
          </div>
        </div>

        {/* for hidden */}
      <div className="h-screen bg-white min-[1000px]:hidden">
       
        <div className= "h-screen relative flex justify-center items-center gap-5 mx-5 ">
          
            <Image
              className="absolute top-28 right-40 "
              src={elips}
              alt=""
              width={500}
              height={500}
            />
            <div className=" z-10">
              <h1 className="text-5xl	font-semibold	text-blue-900 text-center mb-4">How it works</h1>
              <Image
                  className=""
                  src={demo}
                  alt=""
                  width={500}
                  height={500}
                />
            </div>
            <div className="flex flex-col gap-10 justify-center items-center mt-20" >
              <div className="z-10 w-56 h-36 text-center flex flex-col items-center px-1 py-1 rounded-md bg-white drop-shadow-md ">
                <p className="text-blue-900 text-base	">Book a Desk</p>
                <hr  className=" w-40 mt-3 mb-2 bg-slate-900 "/>
                <p className="text-slate-800	 text-xs px-2">Employees can reserve a desk in accordance with their preferred schedule and select the most suitable desk for their needs.  </p>
              </div>
              <div className="z-10 w-56 h-36 text-center flex flex-col items-center  px-1 py-1 rounded-md bg-white drop-shadow-md ">
                <p className="text-blue-900 text-base	">Available Desk</p>
                <hr  className=" w-40 mt-3 mb-2 bg-slate-900 "/>
                <p className="text-slate-800	 text-xs mt-3 px-2">Users can reserve their preferred desk by checking which desks are available.  </p>
              </div>

            </div>
            </div>
            
      </div>
    </div>

  )

}