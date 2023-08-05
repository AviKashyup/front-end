import React from 'react';

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar flex h-fit w-fit mt-2 text-center items-center justify-center">
      <a
        href="https://github.com/AviKashyup"
        target="_blank"
        className="hover:scale-105 mx-5"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/avikashyup"
        target="_blank"
        className="hover:scale-105 mx-5"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </a>
      <a
        href="mailto:abhisharma7k@gmail.com"
        target="_blank"
        className="hover:scale-105 mx-5"
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope fa-xl"></i>
      </a>
      <a
        href="tel:+16472192872"
        className="hover:scale-105 mx-5"
        rel="noreferrer"
        alt="Call +16472192872"
      >
        <i className="fa-solid fa-phone fa-xl"></i>
      </a>
    </div>
  )
}

export default SocialMediaBar