
"use client";



import Image from 'next/image'
import dynamic from 'next/dynamic';




export default function Example() {

  const NavBar = dynamic(() => import('../app/UI/NavBar'), {
    ssr: true,
  });

  const MainContent = dynamic(() => import('../app/UI/maincontent'), {
    ssr: true,
  });

  const Tutorial = dynamic(() => import('../app/UI/tutoria'), {
    ssr: true,
  });

  const Activity = dynamic(() => import('../app/UI/activity'), {
    ssr: true,
  });

  const Faqs = dynamic(() => import('../app/UI/faqs'), {
    ssr: true,
  });

  const Footer = dynamic(() => import('../app/UI/footer'), {
    ssr: true,
  });
  return (
    
    <div className=''>
      
    {/* Navbar*/}
      <NavBar />

    {/* Maincontent */}
    <MainContent />
      
   
    {/* fOR tutorial */}
    <Tutorial />


    {/* Activity */}
    <Activity />

    {/* fOR FOOTER */}
    <Faqs />

    {/* Footer */}
     <Footer />

    </div>
  )
}