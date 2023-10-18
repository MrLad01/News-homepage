import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import menu from './assets/images/icon-menu.svg';
import close from './assets/images/icon-menu-close.svg';

import desktopWeb3 from './assets/images/image-web-3-desktop.jpg';
import mobileWeb3 from './assets/images/image-web-3-mobile.jpg';

import retro from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';
 


function App() {
  const [open, setOpen] = useState(false)

  return (
    <main className = 'w-full h-screen xs:max-md:p-5 md:max-2xl:px-40 md:max-2xl:py-16'>
        {/* <h1> Hello World! </h1> */}

        <nav className = 'flex justify-between items-center' >
          <img src = { logo }  alt = "logo" />
          
          <div className = 'xs:max-md:hidden md:max-2xl:flex justify-around gap-10' >
            <NavLink to = " "> Home </NavLink>
            <NavLink to = " " > New </NavLink>
            <NavLink to = " " > Popular </NavLink>
            <NavLink to = " " > Trending </NavLink>
            <NavLink to = " " > Categories </NavLink>
          </div>

          <img src = { menu } alt = " "  className = 'xs:max-md:block md:max-2xl:hidden cursor-pointer' onClick = { () => setOpen(true) }  />
        </nav>

        { open && 
          <div>
            <div className = 'w-full h-full absolute top-0 left-0 bg-slate-500 opacity-50' ></div>
            <div className = 'xs:max-md:block md:max-2xl:hidden h-screen w-3/4 bg-white absolute top-0 right-0 z-10 px-4 py-8 ' onMouseLeave = {() => setOpen(false) }>
                <img src = { close } alt = ""  className = 'absolute right-4 cursor-pointer'  onClick = { () => setOpen(false) } />
                <div className="grid  mt-20 ">
                  <NavLink to = " " > Home </NavLink>
                  <NavLink to = " " > New </NavLink>
                  <NavLink to = " " > Popular </NavLink>
                  <NavLink to = " " > Trending </NavLink>
                  <NavLink to = " " > Categories </NavLink>
                </div>
            </div>
          </div>  
        }

        <div className = 'flex md:max-2xl:h-2/3 xs:max-md:flex-col my-8 md:max-2xl:justify-between md:max-2xl:gap-10 '>
          
          <article className = 'w-2/3 xs:max-md:w-full  h-full flex flex-col gap-y-2 '>           
            
            <img src = { desktopWeb3 }  alt = "an image of web3"  className = 'xs:max-md:hidden md:max-2xl:block md:max-2xl:h-2/3 w-full object-fill'  />
            <img src = { mobileWeb3 } alt = "an image of web3" className = 'xs:max-md:block md:max-2xl:hidden' />
            
            <div className = ' h-full w-full flex xs:max-md:grid md:max-2xl:justify-between md:max-2xl:gap-32 '>
              <h1 className = 'text-4xl font-extrabold ' > The Bright Future of Web 3.0? </h1>
              <div className = 'md:max-2xl:px-3' >
                <p className = 'text-xs' >                                   
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </p>
                <button className = 'px-4 py-2 hover:bg-slate-800 bg-orange-600 text-white outline-0 rounded-sm '> READ MORE </button>
              </div>

            </div>

          </article>
          
          <aside className = 'md:max-2xl:w-1/3 h-full bg-slate-700 grid p-4' >
            <h2> New </h2>
            
            <div>
              <h3> Hydrogen VS Electric Cars </h3>
              <h4> Will hydrogen-fueled cars ever catch up to EVs? </h4>
            </div>

            <div>
              <h3> The Downsides of AI Artistry </h3>
              <h4> What are the possible adverse effects of on-demand AI image generation? </h4>
            </div>
            
            <div>
              <h3> Is VC Funding Drying Up? </h3>
              <h4> Private funding by VC firms is down 50% YOY. We take a look at what that means. </h4>
            </div>
          </aside>

        </div>

        <div className = 'md:max-2xl:h-1/5 flex justify-between xs:max-md:flex-col '>
          
          <div className = 'flex gap-4'>
            <img src = { retro } alt=""  className = 'h-full object-contain' />
           
            <div className="grid">
              <h2> 01 </h2>
              <h4> Reviving Retro PCs </h4>
              <p> What happens when old PCs are given modern upgrades? </p>
            </div>
          
          </div>

          <div className = 'flex gap-4'>
            <img src = { laptop } alt=""  className = 'h-full object-contain' />
          
            <div className="grid">
              <h2> 02 </h2>
              <h4> Top 10 Laptops of 2022 </h4>
              <p> Our best picks for various needs and budgets. </p>
            </div>
          
          </div>

          <div className = 'flex gap-4'>
            <img src = { gaming } alt=""  className = 'h-full object-contain' />
          
            <div className="grid">
              <h2> 03 </h2>
              <h4> The Growth of Gaming </h4>
              <p> How the pandemic has sparked fresh opportunities. </p>
            </div>
          
          </div>
        </div>

    </main>
  )
}

export default App
