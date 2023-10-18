# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://tailwindcss.com/) - For styles
- [Framer Motion](https://framer.com/motion/) - For animation


### What I learned

This project emphasizes responsive web design. I gained knowledge on how to create layouts that adapt to different screen sizes using CSS and media queries. This is crucial for ensuring a good user experience across various devices.  Framer Motion is a powerful library for adding animations to React applications. I learned how to use it for animating elements and creating smooth transitions.


```Importing React and images is necessary to use them within the component.
import { useState } from 'react';

import logo from './assets/images/logo.svg';
import menu from './assets/images/icon-menu.svg';
import close from './assets/images/icon-menu-close.svg';
import desktopWeb3 from './assets/images/image-web-3-desktop.jpg';
import mobileWeb3 from './assets/images/image-web-3-mobile.jpg';
import retro from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';
```


```This code represents the navigation menu with a logo, links, and a mobile menu icon.
<nav className="flex justify-between items-center">
  <img src={logo} alt="logo" />
  {/* Navigation links */}
  <img
    src={menu}
    alt="menu"
    className="xs:max-md:block md:max-2xl:hidden cursor-pointer"
    onClick={() => setOpen(true)}
  />
</nav>

```

```This part of your code uses conditional rendering to display the mobile menu when open is true.

{open && (
  // Mobile menu content
)}

```

```This snippet demonstrates the use of Framer Motion for animating the mobile menu.
<motion.div
  className="xs:max-md:block md:max-2xl:hidden h-screen w-3/4 bg-white absolute top-0 right-0 z-10 px-4 py-8 side"
  // Animation properties
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.25, delay: 0.25 }}
>
  {/* Mobile menu content */}
</motion.div>

```


### Continued development

I've started using Framer Motion for animations in this project, but I want to delve deeper into it. I aim to refine my animation skills and explore more complex animations, such as transitions between routes in a React application. While I've worked on TypeScript in this project, I want to deepen my knowledge. This includes using TypeScript for more complex scenarios, such as integrating it into larger codebases and working with third-party libraries. I'd like to refine my skills in creating responsive web designs, ensuring that websites look and function well on a variety of devices and screen sizes.


## Author

- Frontend Mentor - [@MrLad01](https://www.frontendmentor.io/profile/MrLad01)
- Twitter - [@MrLad01](https://www.twitter.com/MrLad01)

