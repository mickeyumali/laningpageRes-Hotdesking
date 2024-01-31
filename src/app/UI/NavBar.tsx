"use client";
import logo from "../img/logo.png"
import Image from 'next/image'





export default function NavBar (){
  

  return(
    <header className="absolute inset-x-0 top-0 z-50">
        
        <nav className="flex items-center justify-between border-b-2 border-blue-900 lg:px-8 drop-shadow-md h-20" aria-label="Global">
          <div className="flex lg:flex-1 max-[1000px]:ml-5">
            <a href="#" className="-m-1.5 p-1.5 flex" >
              <Image
                className="h-10 w-auto justify-center align-middle"
                src={logo}
                alt=""
              />
              <span className="not-sr-only text-blue-800 ml-2 mt-1 font-bold text-xl">Desk<span className="text-blue-600	">Flow</span></span>
            </a>
          </div>
          
          <div className=" lg:flex lg:flex-1 lg:justify-end ">
            <div className="flex gap-4 max-[1000px]:ml-5 ">
              <div>
                <a href="http://" className=" px-10 py-3  max-[816px]:px-6 max-[816px]:py-2 max-[816px]:text-xs text-sm bg-blue-900 text-slate-200 rounded-xl hover:bg-white hover:text-black hover:drop-shadow-lg">Sign In</a>
              </div>
              <div >
                <a href="http://" className="px-10 py-3 max-[816px]:px-6 max-[816px]:py-2 max-[816px]:text-xs text-sm  border	border-blue-900 text-black rounded-xl hover:bg-blue-900 hover:drop-shadow-lg hover:text-white">Sign up</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

  )

}