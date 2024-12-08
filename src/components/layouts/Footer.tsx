import React from 'react'

const footer = () => {
  return (
    <div className=''>
      <hr />
      {/* top footer */}
      <footer className="footer text-base-content p-10 md:mt-16 flex md:flex-row flex-col bg-white justify-between md:px-24 px-4 ">
 <div className=" max-w-[292px] ">
  <h1 className="font-bold text-[20px] h-[44px] size-[36px] leading-[48px] top-[80px] flex gap-[16px] left-[60px] text-[#3563E9] text-left ">
            MORENT
          </h1>
    <p className='font-PlusJakartaSans text-left text-[#13131399] text-[16px] '>
    Our vision is to provide convenience and help increase your sales business.
    </p>
 </div>
<div className="gird md:grid-cols-3 grid-cols-2 gap-16">
<nav className='flex flex-col gap-5'>
    <p className="footer-title text-gray-950 text-[20px] font-semibold leading-[30px] ">About</p>
    <a className="link link-hover  font-medium leading-[24px] text-[16px]  text-[#13131399]">Branding</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Design</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Marketing</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Advertisement</a>
  </nav>
  <nav  className='flex flex-col  gap-5'>
    <h6 className="footer-title  text-gray-950  text-[20px] font-semibold leading-[30px] ">Company</h6>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">About us</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Contact</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Jobs</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Press kit</a>
  </nav >
  <nav  className='flex flex-col  gap-5'>
    <h6 className="footer-title  text-black text-[20px] font-semibold leading-[30px] ">Legal</h6>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Terms of use</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Privacy policy</a>
    <a className="link link-hover font-medium leading-[24px] text-[16px] text-[#13131399]">Cookie policy</a>
  </nav>
</div>
</footer>
{/* botton footer */}
<hr />
<footer className="footer hidden md:grid  bg-white text-base-content border-base-300 border-t py-4 md:px-24 px-4">
  <aside className="grid-flow-col items-center">
    <p className="leading-[24px] text-[16px] font-semibold text-[#1A202C]  ">©2022 MORENT. All rights reserved</p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-8 leading-[24px] text-[16px] font-semibold text-[#1A202C]">
      <a>
      Privacy & Policy
      </a>
      <a>
      Terms & Condition
      </a>
    </div>
  </nav>
</footer>
{/*  botton footer phone */}
<footer className="footer  md:hidden grid  bg-white text-base-content border-base-300 border-t py-4 md:px-24 px-4">
  
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-8 leading-[24px] text-[16px] font-semibold text-[#1A202C]">
      <a>
      Privacy & Policy
      </a>
      <a>
      Terms & Condition
      </a>
    </div>
  </nav>
  <aside className="grid-flow-col items-center">
    <p className="leading-[24px] text-[16px] font-semibold text-[#1A202C]  ">©2022 MORENT. All rights reserved</p>
  </aside>
</footer>
    </div>
  )
}

export default footer
