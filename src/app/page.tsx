
"use client";



import Image from 'next/image'
import dynamic from 'next/dynamic';
import NavBar from  '../app/UI/NavBar';
import MainContent from  '../app/UI/maincontent';
import Tutorial from '../app/UI/tutoria';
import Activity from '../app/UI/activity';
import Forfaqs from '../app/UI/faqs';
import Footer from '../app/UI/footer';



export default function Example() {

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
    <Forfaqs />

    {/* Footer */}
     <Footer />

    </div>
  )
}