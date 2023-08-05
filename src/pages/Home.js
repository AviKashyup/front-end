import React, { useEffect } from "react";
import profile_pic from "../assets/images/profile-pic.jpg";
import notes_img from "../assets/images/notes-app.png";
import todo_placeholder from "../assets/images/to-do-placeholder.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.getElementById("navTitle").innerHTML = "AviKashyup";
  }, []);
  return (
    <>
      <section id="about" className="hero min-h-screen flex p-2 pt-20 flex-col lg:flex-row max-lg:justify-center items-center before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-slate-900 before:-z-[1] before:dark:z-[1]"
      >
        <img
          src={profile_pic}
          className="rounded-xl w-[270px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px] lg:mr-5 lg:ml-auto drop-shadow-2xl z-10 ring-8 ring-slate-100 dark:grayscale transition-all duration-300"
          alt="Profile"
        />

        <div className="w-[90vw] lg:w-[630px] xl:w-[720px] 2xl:w-[900px] max-lg:mt-5 lg:ml-5 lg:mr-auto z-10 px-4 py-6 max-lg:text-center">
          <p className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl my-4 font-semibold">
            Hi, my name is
          </p>
          <h1 className="text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl my-4 font-extrabold">
            Abhishek Sharma
          </h1>
          <p className="text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold my-4">
            I have an unwavering passion for building things for the web
          </p>
          <p className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl my-8 lg:mb-14 font-semibold">
          I'm constantly exploring the vast and ever-evolving world of web development. My love for coding fuels my creativity, and I am always excited to experiment with the latest technologies and industry best practices. Constantly seeking to enhance my skills, I stay abreast of emerging trends and techniques to deliver innovative and cutting-edge solutions.
          </p>
          <a
            href="#projects"
            className="drop-shadow-lg py-2 px-5 my-7 text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-white bg-orange-400 hover:bg-inherit hover:text-inherit text-center rounded-3xl border-2 border-orange-400"
          >
            View My Work
          </a>
        </div>
      </section >

      <section id="projects" className="projects h-full pt-20 justify-center items-center">
        <h1 className="text-5xl mb-9 font-bold tracking-wider text-center">PROJECTS</h1>
        <div className="projects-container w-full flex flex-col flex-wrap justify-center">
          <div className="project w-fit mb-20 mx-auto lg:mb-32 flex flex-col-reverse lg:flex-row max-lg:items-center lg:justify-center">
            <div className="project-info w-[360px] md:w-[400px] lg:mr-6 max-lg:mt-5 p-2 flex flex-col shadow-2xl bg-white dark:bg-inherit rounded-lg dark:border dark:border-slate-800 hover:scale-105 duration-300">
              <h3 className="text-3xl m-2 font-bold">Notes App</h3>
              <p className="text-xl mx-2 my-1 font-medium">A go-to notes application for seamless organization and productivity. With a clean and intuitive interface, it helps in capturing ideas.</p>
              <div className="text-xl mx-2 my-1 font-medium">
                <h4 className="font-bold">Technologies Used</h4>
                <p>Front-end: <span className="mx-2">React, Tailwind CSS</span></p>
                <p>Back-end: <span className="mx-2">Java, Spring Boot</span></p>
                <p>Database: <span className="mx-2">MySQL</span></p></div>
              <div className="action-buttons flex drop-shadow-lg">
                <Link to="/notes" className="py-2 px-5 my-5 mx-2 text-lg font-semibold text-white bg-orange-400 hover:bg-inherit hover:text-inherit text-center rounded-3xl border-2 border-orange-400">Open App</Link>
                <a href="https://github.com/AviKashyup/notes-backend" target="_blank" className="py-2 px-5 my-5 mx-2 text-lg font-semibold text-white bg-orange-400 hover:bg-inherit hover:text-inherit text-center rounded-3xl border-2 border-orange-400">See Code</a>
              </div>
            </div>
            <img src={notes_img} className="project-img w-[360px] md:w-[500px] xl:w-[630px] lg:ml-6 max-lg:mb-5 shadow-2xl rounded-md hover:scale-105 duration-300" alt="Notes App" />
          </div>
          <div className="project w-fit mb-20 mx-auto lg:mb-32 flex flex-col-reverse lg:flex-row max-lg:items-center lg:justify-center">
            <div className="project-info w-[360px] md:w-[400px] lg:mr-6 max-lg:mt-5 p-2 flex flex-col shadow-2xl bg-white dark:bg-inherit rounded-lg dark:border dark:border-slate-800 hover:scale-105 duration-300">
              <h3 className="text-3xl m-2 font-bold">To-Do App</h3>
              <p className="text-4xl mx-2 font-medium text-center my-auto">Coming Soon...</p>
            </div>
            <img src={todo_placeholder} className="project-img w-[360px] md:w-[500px] xl:w-[630px] lg:ml-6 max-lg:mb-5 shadow-2xl rounded-md hover:scale-105 duration-300" alt="To Do App" />
          </div>
        </div>
      </section>

      <section id="contact" className="contact h-full py-20 flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-900">
        <h1 className="text-5xl mb-9 font-bold tracking-wider">CONTACT ME</h1>
        <div className="w-full p-2 flex flex-wrap flex-col items-center justify-center">
          <div className="my-2 flex flex-col gap-y-4">
            <a
              href="https://www.linkedin.com/in/avikashyup"
              target="_blank"
              rel="noreferrer"
              className="my-3 mx-2 flex items-center transition-all duration-500"
            >
              <i className="fa-brands fa-linkedin fa-2xl hover:scale-105 peer/linkedin text-4xl ring-8 ring-orange-400 p-3 rounded-full z-20 bg-white dark:bg-slate-900"></i>
              <span className="absolute hidden hover:inline-flex peer-hover/linkedin:inline-flex ml-5 text-white text-2xl font-semibold bg-orange-400 pl-12 pr-4 py-2 rounded-r-full z-10">https://www.linkedin.com/in/avikashyup</span>
            </a>
            <a
              href="mailto:abhisharma7k@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="my-3 mx-2 flex items-center transition-all duration-500"
            >
              <i className="fa-solid fa-envelope fa-2xl hover:scale-105 peer/mail text-4xl ring-8 ring-orange-400 p-3 rounded-full z-20 bg-white dark:bg-slate-900"></i>
              <span className="absolute hidden hover:inline-flex peer-hover/mail:inline-flex ml-5 text-white text-2xl font-semibold bg-orange-400 pl-12 pr-4 py-2 rounded-r-full z-10">abhisharma7k@gmail.com</span>
            </a>
            <a
              href="tel:+16472192872"
              className="my-3 mx-2 flex items-center transition-all duration-500"
              alt="Call +16472192872"
            >
              <i className="fa-solid fa-phone fa-2xl hover:scale-105 peer/phone text-4xl ring-8 ring-orange-400 p-3 rounded-full z-20 bg-white dark:bg-slate-900"></i>
              <span className="absolute hidden hover:inline-flex peer-hover/phone:inline-flex ml-5 text-white text-2xl font-semibold bg-orange-400 pl-12 pr-4 py-2 rounded-r-full z-10">+16472192872</span>
            </a>
          </div>
          <h2 className="my-10 font-bold text-2xl">--- OR ---</h2>

          <form action="#" className="flex flex-col w-[360px] md:w-[540px] lg:w-[720px] space-y-8 py-3 items-center shadow-2xl bg-white dark:bg-inherit rounded-lg dark:border-2 dark:border-slate-800">
            <div className="w-[90%]">
              <label for="email" className="block mb-2 text-base lg:text-lg font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg lg:text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div className="w-[90%]">
              <label for="subject" className="block mb-2 text-base lg:text-lg font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-lg lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help u" required />
            </div>
            <div className="w-[90%]">
              <label for="message" className="block mb-2 text-base lg:text-lg font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-base lg:text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none" placeholder="Leave a comment..." required></textarea>
            </div>
            <button type="submit"
              className="drop-shadow-lg py-2 px-5 mb-5 text-xl xl:text-2xl font-semibold text-white bg-orange-400 hover:bg-inherit hover:text-inherit text-center rounded-3xl border-2 border-orange-400">
              Send
            </button>
          </form>
        </div>
      </section>
      <div className='footer-iconTop'>
        <a href='#about' className='fixed right-4 bottom-4 justify-center items-center p-4 border-2 border-slate-400 rounded-xl'><i className="fa-solid fa-arrow-up fa-2xl"></i></a>
      </div>
    </>
  );
};

export default Home;
