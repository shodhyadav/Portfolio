import { Link } from "react-router-dom";
import { FcExpand } from "react-icons/fc";
import { useState } from "react";
import bgImage from "../assets/bg4.jpg";
const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReact, setReact] = useState(false);
  const [isAngular, setAngular] = useState(false);
  return (
    <>
      <h2 className="flex justify-center font-bold mt-8 text-3xl">
        Skill Pack
      </h2>
      <div className="flex ">
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 bg-blue-500 hover:bg-blue-600 w-70 text-white"
        >
          <span className="flex justify-center gap-x-6">
            Java{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 flex flex-col bg-opacity-50"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {" "}
            <div className="mt-20 ml-30">
              <p className="font-bold">
                Java is one of the most popular and widely used programming
                languages :{" "}
              </p>
              <br />
              <p>
                -{">"} Used to develop mobile apps, desktop apps, web apps,web
                servers, games, and enterprise-level systems.{" "}
              </p>
              <p>
                -{">"} Java wasinvented by James Gosling and Oracle currently
                owns it.JDK 23 is the latest version of Java.{" "}
              </p>
              <p>-{">"} Java's syntax is similar to C/C++.</p>
              <p>
                -{">"} Popular platforms like LinkedIn, Amazon, and Netflix rely
                on Java for their back-end architecture, showcasing its
                stability and scalability across different environments.{" "}
              </p>
              <p>
                -{">"} Popularity is so high that 3 Billion+ devices use Java
                across the world.
              </p>{" "}
              <br />
              <br />
              <p>
                Java is an object-oriented programming language which is known
                for its simplicity, portability, and robustness.
              </p>
              <p>
                The syntax of Java programming language is very closely aligned
                with C and C++ which makes it easier to understand.{" "}
              </p>
              <p>
                Java Syntax refers to a set of rules that defines how Java
                programs are written and interpreted by the compiler. These
                rules ensure that your code is readable, logically correct, and
                error-free as well.
              </p>
              <br />
              <br />
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/*  */}
        <button
          onClick={() => setReact(true)}
          className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white"
        >
          <span className="flex justify-center gap-x-6">
            React
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        {isReact && (
          <div
            className="fixed inset-0 flex flex-col bg-opacity-50"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {" "}
            <div className="mt-20 ml-30">
              <p className="font-bold">
                React, sometimes referred to as a frontend JavaScript framework,
                is a JavaScript library created by Facebook :{" "}
              </p>
              <br />
              <p>
                -{">"} React is a JavaScript library for building user
                interfaces.{" "}
              </p>
              <p>-{">"} React is used to build single-page applications. </p>
              <p>-{">"} React allows us to create reusable UI components.</p>
              <p>-{">"} React creates a VIRTUAL DOM in memory. </p>
              <p>-{">"} React only changes what needs to be changed!</p> <br />
              <br />
              <p>
                Instead of manipulating the browser's DOM directly, React
                creates a virtual DOM in memory, where it does all the necessary
                manipulating, before making the changes in the browser DOM.
              </p>
              <p>
                React finds out what changes have been made, and changes only
                what needs to be changed.
              </p>
              <br />
              <br />
              <button
                onClick={() => setReact(false)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/*  */}

        <button
          onClick={() => setAngular(true)}
          className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white"
        >
          <span className="flex justify-center gap-x-6">
            {" "}
            Angular{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        {isAngular && (
          <div
            className="fixed inset-0 flex flex-col bg-opacity-50"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {" "}
            <div className="mt-20 ml-30">
              <p className="font-bold">
                AngularJS is a JavaScript framework :{" "}
              </p>
              <br />
              <p>
                -{">"} AngularJS is a JavaScript framework written in
                JavaScript.{" "}
              </p>
              <p>
                -{">"} AngularJS is distributed as a JavaScript file, and can be
                added to a web page with a script tag.{" "}
              </p>
              <p>-{">"} AngularJS extends HTML with ng-directives.</p>
              <p>
                -{">"} The ng-app directive defines an AngularJS application.{" "}
              </p>
              <p>
                -{">"} The ng-model directive binds the value of HTML controls
                (input, select, textarea) to application data.
              </p>{" "}
              <br />
              <br />
              <p>
                As a platform, Angular includes: <br />
                A component-based framework for building scalable web
                applications <br />
                A collection of well-integrated libraries that cover a wide
                variety of features, including routing, forms management,
                client-server communication, and more <br />A suite of developer
                tools to help you develop, build, test, and update your code
              </p>
              <br />
              <br />
              <button
                onClick={() => setAngular(false)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/*  */}

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            Spring Boot{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Express{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            MySQL{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
      </div>

      {/*  */}

      <div className="flex ">
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            MongoDB{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Node.js
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            JavaScript{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            TypeScript{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            HTML{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            CSS{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
      </div>

      {/*  */}
      <div className="flex">
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Bootstrap{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Tailwind
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            C{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            C++{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            C#{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Groovy{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
      </div>
      {/*  */}
      <div className="flex ">
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Git{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            Github
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            AWS{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            {" "}
            Azure{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            MuleSoft{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>

        <button className="mt-6 ml-2 bg-blue-500 hover:bg-blue-600 w-70 text-white">
          <span className="flex justify-center gap-x-6">
            jQuery{" "}
            <span className="mt-1">
              <FcExpand />
            </span>
          </span>
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/">
      <button className="mt-6  w-140 text-white">
        Home
      </button></Link></div>
    </>
  );
};
export default Skills;

{
  /* <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Open Pop-up
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center  bg-opacity-50"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <p>This is a simple pop-up.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div> */
}
