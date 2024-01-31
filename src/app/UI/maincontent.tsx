"use client";
import company from "../img/Company-amico.png"
import Image from 'next/image'





export default function Tutorial (){
  

  return(
    <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-white h-screen">
        <div className=" h-screen flex items-center justify-between mx-20 max-[1000px]:mx-5  max-[1000px]:flex-none" >
          <div className="max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:items-center max-[1000px]:w-full">
             <h1 className="text-6xl font-semibold	text-blue-900 max-[1000px]:text-center " >
               Flexible Workspace <br />
               solution,simplified
             </h1>
             <div className="mb-8 mt-5 max-[1000px]:text-center ">
                <p className="text-zinc-500 text-sm">Helps in the process of reserving or locating available desks <br />or work spaces in shared office settings, enabling you to work <br /> flexibly without having a dedicated desk. </p>
             </div>
             <div className="max-[1000px]:w-full max-[1000px]:flex max-[1000px]:justify-center">
                <a href="http://" className=" px-3 py-3 text-sm bg-blue-400 text-slate-200 rounded-xl hover:bg-white hover:text-black hover:drop-shadow-lg">Learn more</a>
             </div>
          </div>
          <div className=" max-[1226px]:hidden ">
            <Image
                  className=" pt-24"
                  src={company}
                  alt=""
                  width={500}
                  height={500}
                />
          </div>
        </div>
      </div>

  )

}