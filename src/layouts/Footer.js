import React from 'react';
import SocialMediaBar from '../components/SocialMediaBar.js';

const Footer = () => {
  return (
    <footer className='footer h-20 flex justify-center items-center flex-wrap flex-col text-center p-0 px-[4%] mx-0 xl:px-[9%] bg-white dark:bg-slate-900 shadow-inner shadow-slate-300 dark:shadow-slate-700 z-10'>
        <p className='text-lg lg:text-xl'>Copyright &copy; 2023 by AviKashyup | All Rights Reserved.</p>
        <SocialMediaBar />
    </footer>
  )
}

export default Footer