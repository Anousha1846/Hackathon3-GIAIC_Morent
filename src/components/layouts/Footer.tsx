import React from 'react';
import Link from 'next/link';

const footer = () => {
  return (
    <div className=''>
      <hr />
      {/* top footer */}
      <footer className="footer text-base-content p-10 md:mt-16 flex md:flex-row flex-col bg-white justify-between md:px-24 px-4 ">
 <div className=" max-w-[292px] ">
  <h1 className="font-bold text-[20px] h-[44px] size-[36px] leading-[48px] top-[80px] flex gap-[16px] left-[60px] text-[#3563E9] text-left ">
           <Link href="/"> EliteWheels </Link>
          </h1>
    <p className='font-PlusJakartaSans text-left text-[#13131399] text-[16px] '>
    Our vision is to provide convenience and help increase your sales business.
    </p>
 </div>
<div className="gird md:grid-cols-3 grid-cols-2 gap-16">
<nav className='flex flex-col gap-5'>
    <p className="footer-title text-gray-950 text-[20px] font-semibold leading-[30px] ">EliteWheels </p>
    <Link href="/" className="link link-hover  font-medium leading-[24px] text-[16px]  text-[#13131399]">Home</Link>
    <Link href="/Categories" className="link link-hover  font-medium leading-[24px] text-[16px]  text-[#13131399]">Categories</Link>
    <Link href="/lisence" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Lisence</Link>
    <Link href="/wishlist" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Wishlist</Link>
    <Link href="/adminCarRent" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Admin Page</Link>
  </nav>
  <nav  className='flex flex-col  gap-5'>
    <h6 className="footer-title  text-gray-950  text-[20px] font-semibold leading-[30px] ">Company</h6>
    <Link href="" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">About us</Link>
    <Link href="" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Contact</Link>
    <Link href="" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Jobs</Link>
    <Link href="" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Press kit</Link>
  </nav >
  <nav  className='flex flex-col  gap-5'>
    <h6 className="footer-title  text-black text-[20px] font-semibold leading-[30px] ">Contact</h6>
    <Link href="https://github.com/Anousha1846" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Github</Link>
    <Link href="https://www.linkedin.com/feed/" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">LinkedIn</Link>
    <Link href="/" className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Facebook</Link>
  </nav>
</div>
</footer>
{/* botton footer */}
<hr />
<footer className="footer hidden md:grid  bg-white text-base-content border-base-300 border-t py-4 md:px-24 px-4">
 <aside className="grid-flow-col items-center">
    <p className="leading-[24px] text-[16px] font-semibold text-[#1A202C]  ">©2022 EliteWheels . All rights reserved</p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-8 leading-[24px] text-[16px] font-semibold text-[#1A202C]">
      <Link href="">
      Privacy & Policy
      </Link>
      <Link href="">
      Terms & Condition
      </Link>
    </div>
  </nav>
</footer>
{/*  botton footer phone */}
<footer className="footer  md:hidden grid  bg-white text-base-content border-base-300 border-t py-4 md:px-24 px-4">
  
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-8 leading-[24px] text-[16px] font-semibold text-[#1A202C]">
      <Link href="">
      Privacy & Policy
      </Link>
      <Link href="">
      Terms & Condition
      </Link>
    </div>
  </nav>
  <aside className="grid-flow-col items-center">
    <p className="leading-[24px] text-[16px] font-semibold text-[#1A202C]  ">©2022 EliteWheels . All rights reserved</p>
  </aside>
</footer>
    </div>
  )
}

export default footer
