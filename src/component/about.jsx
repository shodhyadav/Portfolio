import img from "../assets/shodh.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="flex justify-center w-900">
          <img
            src={img}
            alt="shodh"
            className="h-130 w-130 rounded-[60vw] mt-10"
          />
        </div>
        <div className="place-content-center w-900">
          <h1 className="font-bold">SHODH YADAV</h1>
          <p className="mt-1">A bit about me</p>
          <p className="mt-1">
            I am a passionate Full Stack Developer at Infinite Computer
            Solutions, crafting seamless digital experiences with cutting-edge
            technologies. Beyond the world of coding, I have an insatiable
            curiosity for exploring the world and unraveling the mysteries of
            history. When I'm not building robust applications, you’ll find me
            immersed in books, diving into new realms of knowledge, or on the
            cricket field, channeling my energy into the game. And, of course,
            there's the rhythmic symphony of my keyboard as I bring ideas to
            life—because for me, coding isn’t just work; it’s an art.
          </p>
          <Link to="/">
            <button className="mt-6  w-140 text-white">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default About;
