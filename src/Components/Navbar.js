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
import Rectangle5 from "../../src/assets/Rectangle5.png";
import Rectangle8 from "../../src/assets/Rectangle8.png";
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
    <div className="px-4 md:px-9 lg:px-12 mx-auto py-[20px]">
      <div className="flex items-center  justify-around">
        <div>
          <img src={Logo} alt="" className=" w-[100px] md:w-[155px]" />
        </div>
        <div className=" hidden md:inline-block ">
          <ul className="flex gap-5 items-center font-semibold ">
            <li>Stay Connected</li>
            <li>Education</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
        </div>
        <button className=" px-[13px] py-[9px] bg-black font-semibold md:text-[20px] text-white drop-shadow-xl md:px-[30px] md:py-[14px] rounded-[15px] border border-[#000000]">
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

      <section className="h-[300px] md:h-[400px] -z-10 relative my-10 p-5">
        <img
          src={chart3}
          alt=""
          className=" h-[300px] md:h-[400px] absolute right-0 -z-10 top-0   w-full"
        />
        <p className="text-[25px]    text-white font-bold md:text-[60px] leading-tight">
          Unveiling the <br /> Wonders of <br /> the Universe
        </p>
        <div className="absolute top-16 md:top-0 right-10">
          <div className="relative">
            <img src={space} alt="" />

            <img
              src={chart2}
              alt=""
              className="max-w-[180px] md:min-w-[296px] absolute top-[240px] -left-9 "
            />

            <img
              src={chart1}
              alt=""
              className="max-w-[180px] md:min-w-[296px]  absolute top-[200px] -right-9"
            />

            <img
              src={code}
              alt=""
              className="max-w-[180px] md:min-w-[296px] -bottom-12 left-28 absolute"
            />
          </div>
        </div>
      </section>
      <section className="mt-64 md:mt-20 px-5">
        <div className="w-full md:w-[50%]">
          <p className="  text-[20px]">
            At odissey, our mission is to inspire, educate, and ignite your
            passion for the cosmos. We are your premier destination for all
            things related to space exploration, astronomy, and the mysteries of
            the universe. Whether you're a seasoned astronomer or a curious
            novice, join us on a journey to the furthest reaches of the cosmos.{" "}
          </p>
          <div className="flex items-center gap-10 mt-5">
            <button className="bg-black text-white  drop-shadow-xl px-[30px] py-[14px] rounded-[15px] border border-[#000000]">
              Get Started
            </button>
            <div className="flex items-center gap-2">
              <p className="text-[17px] font-semibold">Watch the Video</p>
              <MdSlowMotionVideo />
            </div>
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
        <div className="text-[25px] md:text-[50px] font-extrabold">
          <p>Join our vibrant community of space enthusiasts where you can</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <div className="flex flex-col  items-start">
            <img
              src={physics}
              alt=""
              className="bg-[#A9C2CB] px-2 py-2 rounded-md"
            />
            <p className="font-bold">Astronomy 101</p>
            <p className="text-left text-[13px] md:text-[15px]">
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
            <p className="text-left  text-[13px] md:text-[15px]">
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
            <p className="text-left text-[13px] md:text-[15px]">
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
            <p className="text-left text-[13px] md:text-[15px]">
              Delve into the cutting-edge technology powering space exploration,
              from spacecraft and telescopes to propulsion systems and space
              habitats.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className=" relative z-10 rounded-lg w-full h-[360px] md:h-[420px]  xl:h-[500px] ">
          <img
            src={Rectangle8}
            alt=""
            className="min-h-[400px] object-cover md:object-contain w-full "
          />
          {/* <p className="font-bold text-white text-[50px] absolute top-10 left-0 right-0 text-center max-w-[600px]">
            We are committed to making space science accessible to all. Explore
            our educational resources, including.
          </p> */}
          <div class="absolute items-center rounded-xl inset-0 flex md:items-start py-7 justify-center  ">
            <h1 class="text-[20px] text-white md:text-[45px] font-bold text-center max-w-[700px]">
              {" "}
              We are committed to making space science accessible to all.
              Explore our educational resources, including.
            </h1>
          </div>
          <div className=" grid grid-cols-1 top-[330px]  inset-x-10 drop-shadow-xl  md:bottom-[-120px]  md:grid-cols-3 gap-7 absolute md:left-[100px]  md:inset-x-5">
            <div className="md:w-[300px] md:h-[250px] bg-white rounded-xl">
              <div className="px-5 py-3">
                <h1 className="text-[#A9C2CB]  font-bold md:text-[40px]">
                  01.
                </h1>
                <p className="font-bold">Online free courses and tutorials</p>
                <p>
                  Dive into the basics of astronomy. Learn about stars, planets,
                  galaxies, and the tools astronomers use to explore the
                  universe.
                </p>
              </div>
            </div>
            <div className="md:w-[300px] md:h-[250px] bg-white rounded-xl">
              <div className="px-5 py-3">
                <h1 className="text-[#A9C2CB] font-bold md:text-[40px]">02.</h1>
                <p className="font-bold">
                  Resources for teachers and educators
                </p>
                <p>
                  Delve into the cutting-edge technology powering space
                  exploration, from spacecraft and telescopes to propulsion
                  systems and space habitats.
                </p>
              </div>
            </div>
            <div className="md:w-[300px] md:h-[250px] bg-white rounded-xl">
              <div className="px-5 py-3">
                <h1 className="text-[#A9C2CB]  font-bold md:text-[40px]">
                  03.
                </h1>
                <p className="font-bold">Book recommendations and reviews</p>
                <p>
                  Dive into the basics of astronomy. Learn about stars, planets,
                  galaxies, and the tools astronomers use to explore the
                  universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[750px] md:[200px] lg:mt-[120px] mx-auto ">
        <div className="relative w-full rounded-[20px] h-[360px] md:h-[420px] xl:h-[500px] overflow-hidden py-[28px] md:py-[34px] lg:py-[42px] px-[20px] md:px-[28px]">
          <img
            src={Rectangle5}
            alt=""
            className="-z-10 absolute left-0 top-0 w-full h-full object-cover"
          />
          <div className=" flex flex-col gap-7 justify-start md:gap-9  md:px-[100px] md:py-[50px]">
            <div>
              <p className="text-white text-[25px]  md:text-[60px] font-extrabold ">
                Join our community
              </p>
              <p className="text-white text-[12px]  font-thin md:text-[15px] w-full">
                of stargazers, explorers, and cosmic enthusiasts as we embark on
                a journey through the <br /> cosmos like never before.
              </p>
            </div>
            <div className=" gap-3 flex-col  flex md:flex-row items-center ">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="max-w-[500px] w-[350px] p-5  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value=""
                />
              </div>

              <button className="bg-[#A9C2CB] p-5 w-full md:w-[200px] rounded-lg text-[#fff]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section >
      <footer className="mt-10 flex gap-3 justify-start flex-col md:flex-row  md:items-center md:justify-between font-semibold">
        <div className="flex  items-center  ">
          <p className="text-[30px]">&copy; </p>
          <img src={Logo} alt="" className="object-contain h-[50px] w-[100px] md:h-[30px] md:w-[80px]"  />
        </div>
        <div className=" flex flex-col items-start md:flex-row gap-5 ">
          <p>Stay Connected</p>
          <p>Education</p>
          <p>Community</p>
          <p>About Us</p>
        </div>
        <div className="flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms & Agreements</p>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
