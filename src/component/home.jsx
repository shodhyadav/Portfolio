
import { Outlet } from "react-router-dom";
import bgImage from "../assets/bg4.jpg";
import Landing from "./landing";

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

     <Outlet/>
    </div>
  );
}
