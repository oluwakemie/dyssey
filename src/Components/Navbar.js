import React, { useState } from "react";
import Logo from "../../src/assets/Odyssey.png";
import chart3 from "../../src/assets/Chart3.png";
import code from "../../src/assets/Code.png";
import chart1 from "../../src/assets/Chart1.png";
import chart2 from "../../src/assets/Chart2.png";
import space from "../../src/assets/space.png";
import nasa from "../../src/assets/nasa.png";
import spacex from "../../src/assets/spacex.png";
import astro from "../../src/assets/astro.png";
import boeing from "../../src/assets/boeing.png";
import physics from "../../src/assets/physics.png";
import chartpie from "../../src/assets/chart-pie.png";
import clip from "../../src/assets/clipboard.png";
import combo from "../../src/assets/Combo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdSlowMotionVideo } from "react-icons/md";
import { motion as m } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  // const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div className="container mx-auto py-[20px]">
      <div className="flex items-center justify-between">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className=" hidden md:inline-block ">
          <ul className="flex gap-5 items-center font-semibold ">
            <li>Stay Connected</li>
            <li>Education</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
        </div>
        <button className="bg-black text-white drop-shadow-xl px-[30px] py-[14px] rounded-[15px] border border-[#000000]">
          Sign in
        </button>
        <button onClick={handleToggle} className=" md:inline-block lg:hidden">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {showMenu && (
        <m.div
          initial={{ x: -30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            // scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" mt-4 absolute top-[82px] flex space-x-3 bg-white h-screen   lg:hidden w-full py-[30px] px-[20px] z-10"
        >
          <ul className="flex flex-col space-y-9 text-2xl  mb-2 text-black md:text-4xl ">
            <li className="cursor-pointer  hover:text-[#000000] hover:border-b hover:border-b-lg hover:border-b-[#000000]">
              Stay Connected
            </li>

            <li className="cursor-pointer  hover:text-[#000000] hover:border-b hover:border-b-lg hover:border-b-[#000000]">
              Business
            </li>

            <li className="cursor-pointer  hover:text-[#000000] hover:border-b hover:border-b-lg hover:border-b-[#000000]">
              Education
            </li>

            <li className="cursor-pointer  hover:text-[#000000] hover:border-b hover:border-b-lg hover:border-b-[#000000]">
              Community
            </li>

            <li className="cursor-pointer  hover:text-[#000000] hover:border-b hover:border-b-lg hover:border-b-[#000000]">
              About Us
            </li>

            <li>
              {" "}
              {/* <div className="flex justify-center items-center gap-6 mt-[40px]">
                <a
                  href="https://www.google.com/url?q=https://play.google.com/store/apps/details%3Fid%3Dcom.vant.app%26hl%3Den_US%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Dvant%2Bapp&sa=U&ved=2ahUKEwixkrSIwpqBAxVgU0EAHVPRDAMQFnoECAUQAg&usg=AOvVaw3iL8zaaBsLYYudFsvEMTLY "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./image/googleplay.png"
                    alt="google play logo"
                    className="w-[135px]
            h-[40px] lg:w-[189px]
            lg:h-[56px]"
                  />
                </a>
                <a
                  href="https://apps.apple.com/ng/app/vant-app/id6464392721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./image/appstore.png"
                    alt="app store logo"
                    className="w-[120px]
            h-[40px] lg:w-[168px]
            lg:h-[56px]"
                  />
                </a>
              </div> */}
            </li>
          </ul>
        </m.div>
      )}
      {/* hero section */}
      <section className=" relative mt-10 px-5">
        <div className=" relative">
          <img
            src={chart3}
            alt=""
            className="min-h-[400px] object-cover md:object-cover w-full"
          />
          <p className="text-[25px] absolute top-5 left-10 text-white font-bold md:text-[60px] leading-normal ">
            Unveiling the <br /> Wonders of <br /> the Universe
          </p>
          <div className="">
            <img
              src={space}
              alt=""
              className="w-[400px] absolute bottom-[-50px] md:absolute md:w-[550px] md:top-[60px] right-10"
            />
          </div>
          <div className=" absolute top-[200px] right-3 md:bottom-0 md:right-5">
            <img
              src={chart1}
              alt=""
              className="max-w-[180px] md:min-w-[296px]"
            />
          </div>
          <div className="absolute bottom-[-20px] left-[50%] md:bottom-[-50px] md:left-[65%] transform -translate-x-1/2">
            <img
              src={chart2}
              alt=""
              className="max-w-[180px] md:min-w-[296px]"
            />
          </div>
          <div className="absolute bottom-[-20px] left-[70%] md:bottom-[-130px] md:left-[80%] transform -translate-x-1/2">
            <img src={code} alt="" className="max-w-[180px] md:min-w-[296px]" />
          </div>
        </div>
        <p className="mt-[50px] md:max-w-[900px] text-[20px]">
          At odissey, our mission is to inspire, educate, and ignite your
          passion for the cosmos. We are your premier destination for all things
          related to space exploration, astronomy, and the mysteries of the
          universe. Whether you're a seasoned astronomer or a curious novice,
          join us on a journey to the furthest reaches of the cosmos.{" "}
        </p>
        <div className="flex items-center gap-10 mt-5">
          <button className="bg-black text-white  drop-shadow-xl px-[30px] py-[14px] rounded-[15px] border border-[#000000]">
            Get Started
          </button>
          <div className="flex items-center gap-5">
            <p className="text-[17px] font-semibold">Watch the Video</p>
            <MdSlowMotionVideo />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className=" grid grid-cols-2 md:flex  items-center justify-between gap-5">
          <img src={spacex} alt="" className="w-[100px]" />
          <img src={nasa} alt="" className="w-[100px]" />
          <img src={boeing} alt="" className="w-[100px]" />
          <img src={astro} alt="" className="w-[100px]" />
        </div>
      </section>
      <section className="mt-[100px] px-5 flex flex-col  lg:flex-row items-center gap-10 ">
        <div className="text-[50px] font-extrabold">
          <p>Join our vibrant community of space enthusiasts where you can</p>
        </div>
        <div className="grid grid-cols-2  gap-5">
          <div className="flex flex-col items-start">
            <img
              src={physics}
              alt=""
              className="bg-[#A9C2CB] px-2 py-2 rounded-md"
            />
            <p className="font-bold">Astronomy 101</p>
            <p className="text-left text-[15px]">
              Dive into the basics of astronomy. Learn about stars, planets,
              galaxies, and the tools astronomers use to explore the universe.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src={clip}
              alt=""
              className="bg-[#A9C2CB] px-2 py-2 rounded-md"
            />
            <p className="font-bold">Latest Discoveries</p>
            <p className="text-left text-[15px]">
              Stay up-to-date with the most recent breakthroughs and discoveries
              in the field of astrophysics and space exploration.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src={combo}
              alt=""
              className="bg-[#A9C2CB] px-2 py-2 rounded-md"
            />
            <p className="font-bold">Space Exploration</p>
            <p className="text-left text-[15px]">
              Explore the latest missions, both past and present, from NASA,
              ESA, SpaceX, and other space agencies and organizations.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src={chartpie}
              alt=""
              className="bg-[#A9C2CB] px-2 py-2 rounded-md"
            />
            <p className="font-bold">Space Technology</p>
            <p className="text-left text-[15px]">
              Delve into the cutting-edge technology powering space exploration,
              from spacecraft and telescopes to propulsion systems and space
              habitats.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
