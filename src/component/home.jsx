import { useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FcVideoCall, FcSms } from "react-icons/fc";
import bgImage from "../assets/bg4.jpg";

export default function Home() {
  return (
    <div
      className=" min-h-screen text-white font-serif"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md ">
        <h1 className="text-2xl font-bold ">
          <span className="text-amber-800">My Portfolio</span>
        </h1>
        <ul className="flex gap-9">
          <li>
            <a href="#about" className="hover:text-amber-800">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-amber-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center h-118">
        <motion.h2
          className="text-5xl font-extrabold mb-4"
          animate={{ scale: [0.9, 1] }}
        >
          Hello, I'm <span className="text-blue-400">SHODH YADAV</span>
        </motion.h2>
        <p className="text-lg text-gray-300 w-5xl">
          I'm a passionate Full Stack Developer with expertise in building
          scalable, high-performance web applications. With a deep understanding
          of front-end and back-end technologies, I create seamless user
          experiences and robust server-side architectures. My goal is to craft
          efficient and innovative solutions that solve real-world problems.
        </p>
        <div className="flex justify-between gap-x-5"> 
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 w-40">
          About
        </button>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 w-40">
          View My Work
        </button></div>
      </header>

      {/* About Section */}
      {/* <section id="about" className="p-12 text-center bg-gray-800">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section> */}

      {/* Projects Section */}
      {/* <section id="projects" className="p-12">
        <h3 className="text-3xl font-semibold text-center mb-8">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-gray-800 text-center">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/shodhyadav"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>{" "}
          <RxDividerVertical />
          <a
            href="https://www.linkedin.com/in/shodh-yadav-804818140/"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <RxDividerVertical />
          <a href="tel:+918299702952" className="hover:text-blue-400">
            <FcVideoCall />
          </a>
          <RxDividerVertical />
          <a
            href="mailto:shodhyadav7@gmail.com"
            className="hover:text-blue-400"
          >
            <FcSms />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-900 text-gray-500">
        &copy; 2025 shodh_yadav. All Rights Reserved.
      </footer>
    </div>
  );
}
