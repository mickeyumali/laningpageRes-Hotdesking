
"use client";



import Image from 'next/image'
import login from '../../../../../public/img/Section1/login.png'
import verification from '../../../../../public/img/Section1/verification.png'
import settingPass from '../../../../../public/img/Section1/SettingPass.png'
import dynamic from 'next/dynamic';




export default function Section1() {

  
  
  return (
    
    <div className=' pt-10 mx-14 scroll-smooth max-[1000px]:mx-4' id='section1'>
      <div className=' mx-14 max-[1000px]:mx-4 ' >
        <div>
         <h1 className=" text-black text-xl	font-medium max-[1000px]:text-center">Section 1. Registration</h1>
        </div>
        <div className='flex flex-row mt-8 max-[1000px]:flex-col max-[1000px]:gap-10  '>
         <div className='flex flex-col basis-3/4 gap-8 mt-10 max-[1000px]:basis-0 max-[1000px]:mx-4'>
          <h3 className=" text-blue-900 text-base ml-20 font-medium max-[1000px]:ml-0 max-[1000px]:text-center">A. Getting Started</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center max-[1000px]:ml-0 max-[1000px]:text-center">
          Users who are new to this hotdesk software should first register in order to book a desk and use the other features. To begin, the system will request personal information such as your complete name, company email, and phone number. 
          <br />
          <br />
          <br />
          If you have already registered an account, simply click the Sign In option below the Continue button to sign in. If not, after entering all of the required information, you only need to click the Continue option to authenticate your account.
          </p>
         </div>
         <div className="flex basis-1/4 justify-center items-center max-[1000px]:flex-col max-[1000px]:basis-0">
          <Image
              className=""
              src={login}
              alt=""
              width={250}
              height={350}
            />
        </div>
        </div>
      </div>


      <div className=' mx-14 max-[1000px]:mx-4 '>
        <div className='flex flex-row mt-10 max-[1000px]:flex-col-reverse max-[1000px]:gap-8'>
         <div className="flex basis-1/4 justify-center items-center ax-[1000px]:basis-0">
          <Image
              className=""
              src={verification}
              alt=""
              width={250}
              height={350}
            />
        </div>
        <div className='flex flex-col basis-3/4 gap-8 mt-10 max-[1000px]:basis-0 max-[1000px]:mx-4 '>
          <h3 className=" text-blue-900 text-base ml-20 font-medium max-[1000px]:ml-0 max-[1000px]:text-center">B. Verification and Confirmation</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center max-[1000px]:ml-0 max-[1000px]:text-center">
          After you enter all of the required information, a verification code will be emailed to the email address you provided. To verify, simply check your email and enter the verification code. 
          <br />
          <br />
          <br />
          If you still haven't received a verification code, you can resend one by clicking the "Click to Resend" link. After that, simply click the Verify email box to confirm and proceed to the next stage.
          </p>
         </div>
        </div>
      </div>


      <div className=' mx-14 max-[1000px]:mx-4 '>
        <div className='flex flex-row mt-8 max-[1000px]:flex-col max-[1000px]:gap-8 '>
          <div className='flex flex-col basis-3/4 gap-8 mt-10 max-[1000px]:mx-4'>
            <h3 className=" text-blue-900 text-base ml-20 font-medium max-[1000px]:ml-0 max-[1000px]:text-center">C. Setting Password</h3>
            <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center max-[1000px]:ml-0 max-[1000px]:text-center">
            You can modify your password now that you have an account. It is important to note that the password must be at least 8 characters long and contain one special character; otherwise, an error will occur. 
            <br />
            <br />
            <br />
            You can now edit your personal information in your account after you've created your password.
            </p>
          </div>
          <div className="flex basis-1/4 justify-center items-center max-[1000px]:basis-0">
            <Image
                className=""
                src={settingPass}
                alt=""
                width={250}
                height={350}
              />
          </div>
        </div>
      </div>
      
    </div>
  )
}
