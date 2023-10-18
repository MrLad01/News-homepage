import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import menu from './assets/images/icon-menu.svg';
import close from './assets/images/icon-menu-close.svg';

import desktopWeb3 from './assets/images/image-web-3-desktop.jpg';
import mobileWeb3 from './assets/images/image-web-3-mobile.jpg';

import retro from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';

import { motion } from "framer-motion";

 

function App() {
  const [open, setOpen] = useState(false);


  return (
    <main className = 'w-full h-screen xs:max-md:p-5 md:max-2xl:px-40 md:max-2xl:py-10 bg-off-white '>
        {/* <h1> Hello World! </h1> */}

        <nav className = 'flex justify-between items-center' >
          <img src = { logo }  alt = "logo" />
          
          <div className = 'xs:max-md:hidden md:max-2xl:flex justify-around gap-10' >
            <a href = " / " className = "hover:text-soft-red" > Home </a>
            <a href = " / " className = "hover:text-soft-red" > New </a>
            <a href = " / " className = "hover:text-soft-red" > Popular </a>
            <a href = " / " className = "hover:text-soft-red" > Trending </a>
            <a href = " / " className = "hover:text-soft-red" > Categories </a>
          </div>

          <img src = { menu } alt = " "  className = 'xs:max-md:block md:max-2xl:hidden cursor-pointer' onClick = { () => setOpen(true) }  />
        </nav>

        { open && 
          <div>
            <div className = 'w-full h-full absolute top-0 left-0 bg-vdark-blue opacity-30' ></div>
            <motion.div 
                className = 'xs:max-md:block md:max-2xl:hidden h-screen w-3/4 bg-white absolute top-0 right-0 z-10 px-4 py-8 side' 
                onMouseLeave = {() => setOpen(false) }
                initial = {{ opacity: 0, x:100 }}
                whileInView = {{ opacity: 1, x:0 }}
                transition = {{ duration: 0.25, delay: 0.25 }}
            >
                <img src = { close } alt = ""  className = 'absolute right-4 cursor-pointer'  onClick = { () => setOpen(false) } />

                <div className="grid  mt-20 ">
                  <motion.a 
                      href = " / " 
                      className = "hover:text-soft-red text-md font-normal my-2 sidebar" 
                      initial = {{ opacity: 0, x:100 }}
                      whileInView = {{ opacity: 1, x:0 }}
                      transition = {{ duration: 0.3, delay: 0.3 }}
                  >
                       Home 
                  </motion.a>
                  <motion.a 
                      href = " / " 
                      className = "hover:text-soft-red text-md font-normal my-2 sidebar" 
                      initial = {{ opacity: 0, x:100 }}
                      whileInView = {{ opacity: 1, x:0 }}
                      transition = {{ duration: 0.32, delay: 0.32 }}
                  >
                       New 
                  </motion.a>
                  <motion.a 
                      href = " / " 
                      className = "hover:text-soft-red text-md font-normal my-2 sidebar" 
                      initial = {{ opacity: 0, x:100 }}
                      whileInView = {{ opacity: 1, x:0 }}
                      transition = {{ duration: 0.34, delay: 0.34 }}
                  > 
                      Popular 
                  </motion.a>
                  <motion.a 
                      href = " / " 
                      className = "hover:text-soft-red text-md font-normal my-2 sidebar" 
                      initial = {{ opacity: 0, x:100 }}
                      whileInView = {{ opacity: 1, x:0 }}
                      transition = {{ duration: 0.36, delay: 0.36 }}
                  > 
                      Trending 
                  </motion.a>
                  <motion.a 
                      href = " / " 
                      className = "hover:text-soft-red text-md font-normal my-2 sidebar"
                      initial = {{ opacity: 0, x:100 }}
                      whileInView = {{ opacity: 1, x:0 }}
                      transition = {{ duration: 0.38, delay: 0.38 }}
                  > 
                      Categories 
                  </motion.a>
                </div>
            </motion.div>
          </div>  
        }

        <div className = 'flex md:max-2xl:h-2/3 xs:max-md:flex-col my-8 md:max-2xl:justify-between md:max-2xl:gap-10 '>
          
          <article className = 'w-2/3 xs:max-md:w-full  h-full flex flex-col gap-y-4 '>           
            
            <img src = { desktopWeb3 }  alt = "an image of web3"  className = 'xs:max-md:hidden md:max-2xl:block md:max-2xl:h-2/3 w-full object-fill'  />
            <img src = { mobileWeb3 } alt = "an image of web3" className = 'xs:max-md:block md:max-2xl:hidden' />
            
            <div className = ' h-full w-full flex xs:max-md:grid xs:max-md:my-4  '>
              <h1 className = 'text-[40px] font-extrabold tracking-wide pr-12 leading-[2.4rem]' > The Bright Future of Web 3.0? </h1>
              <div className = 'md:max-2xl:px-3' >
                <p className = 'text-xs text-left leading-5 mb-5 xs:max-md:mt-2 ' >                                   
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </p>
                <button className = 'px-6 py-2.5 hover:bg-vdark-blue bg-soft-red text-white outline-0 rounded-sm tracking-[0.3em] text-xs'> READ MORE </button>
              </div>

            </div>

          </article>
          
          <aside className = 'md:max-2xl:w-1/3 h-full bg-vdark-blue grid p-4' >
            <h2 className = 'text-soft-orange text-3xl font-semibold' > New </h2>
            
            <div className = ' pt-1 xs:max-md:pt-5 xs:max-md:pb-5 '>
              <h3 className = 'text-white hover:text-soft-orange font-semibold cursor-pointer'> Hydrogen VS Electric Cars </h3>
              <h4 className = 'text-white opacity-50 text-xs mt-2'> Will hydrogen-fueled cars ever catch up to EVs? </h4>
            </div>

            <div className = ' border-t pt-5 xs:max-md:pb-5 border-opacity-40 border-white'>
              <h3 className = 'text-white hover:text-soft-orange font-semibold cursor-pointer'> The Downsides of AI Artistry </h3>
              <h4 className = 'text-white opacity-50 text-xs mt-2'> What are the possible adverse effects of on-demand AI image generation? </h4>
            </div>
            
            <div className = ' border-t pt-5 xs:max-md:pb-5 border-opacity-40 border-white'>
              <h3 className = 'text-white hover:text-soft-orange font-semibold cursor-pointer'> Is VC Funding Drying Up? </h3>
              <h4 className = 'text-white opacity-50 text-xs mt-2'> Private funding by VC firms is down 50% YOY. We take a look at what that means. </h4>
            </div>
          </aside>

        </div>

        <div className = 'md:max-2xl:h-1/6 flex justify-between xs:max-md:flex-col gap-10 '>
          
          <div className = 'flex gap-4'>
            <img src = { retro } alt=""  className = 'h-full object-contain xs:max-md:w-1/3' />
           
            <div className="grid">
              <h2 className = 'text-2xl font-extrabold opacity-30 '> 01 </h2>
              <h3 className = 'text-sm font-extrabold hover:text-soft-red cursor-pointer xs:max-md:text-base' > Reviving Retro PCs </h3>
              <p className = 'text-xs opacity-70 xs:max-md:text-base'> What happens when old PCs are given modern upgrades? </p>
            </div>
          
          </div>

          <div className = 'flex gap-4'>
            <img src = { laptop } alt=""  className = 'h-full object-contain xs:max-md:w-1/3' />
          
            <div className="grid">
              <h2 className = 'text-2xl font-extrabold opacity-30 '> 02 </h2>
              <h3 className = 'text-sm font-extrabold hover:text-soft-red cursor-pointer xs:max-md:text-base' > Top 10 Laptops of 2022 </h3>
              <p className = 'text-xs opacity-70 xs:max-md:text-base'> Our best picks for various needs and budgets. </p>
            </div>
          
          </div>

          <div className = 'flex gap-4'>
            <img src = { gaming } alt=""  className = 'h-full object-contain xs:max-md:w-1/3' />
          
            <div className="grid">
              <h2 className = 'text-2xl font-extrabold opacity-30 '> 03 </h2>
              <h3 className = 'text-sm font-extrabold hover:text-soft-red cursor-pointer xs:max-md:text-base' > The Growth of Gaming </h3>
              <p className = 'text-xs opacity-70 xs:max-md:text-base'> How the pandemic has sparked fresh opportunities. </p>
            </div>
          
          </div>
        </div>

    </main>
  )
}

export default App
