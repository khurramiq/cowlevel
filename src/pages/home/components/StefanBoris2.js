import React from 'react';
import bs from '../../../assets/images/bs6.png';
import bs3 from '../../../assets/images/bs3.png';
import mbs3 from '../../../assets/images/mbs31.png';
import mbs from '../../../assets/images/mbs61.png';
import youtube_icon from '../../../assets/images/youtube_icon.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import Counter from './Counter';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const StefanBoris2 = ({ startCounter, fullpageApi, open, setOpen, state }) => {
  return (
    <div className="section relative overflow-x-hidden bg-[#A49E90] scrollbar-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
          <img
            className="sm:w-[60px] xs:w-[50px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
          <div className="relative">
            {open ? (
              <i
                className="far fa-times text-4xl cursor-pointer rotate_animation"
                onClick={() => setOpen(false)}
              ></i>
            ) : (
              <FaBars
                className="sm:text-3xl xs:text-lg cursor-pointer rotate-animationR"
                onClick={() => setOpen(true)}
              />
            )}
            {open && <MobileLinks />}
          </div>
        </div>
      </div>
      <div className="top-0 absolute w-screen h-full overflow-hidden">
        <div className="relative w-screen h-full overflow-hidden">
          <img
            className={`absolute top-0 w-full sm:hidden xs:inline-block
            ${
              state?.destination?.index === 3 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={mbs}
            alt="handOpen"
          />
          <img
            className={`absolute top-0 w-full sm:hidden xs:inline-block
            ${
              state?.destination?.index === 3 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
            src={mbs3}
            alt="handOpen"
          />
          <img
            className={`absolute top-0 w-full xs:hidden sm:inline-block ${
              state?.destination?.index === 3 && state?.direction === 'down'
                ? 'fadeout'
                : 'z[0]'
            }`}
            src={bs3}
            alt="handOpen"
          />
          <img
            className={`absolute top-0 w-full xs:hidden sm:inline-block ${
              state?.destination?.index === 3 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }`}
            src={bs}
            alt="handOpen"
          />
          <div className="absolute sm:flex sm:items-start sm:h-[30%] xs:h-[50%] bottom-0 z-[1]">
            <div className="sm:flex sm:justify-between sm:items-start sm:w-[50%] xs:block xs:w-[90%] mx-auto">
              <p
                className="sm:w-[70%] sm:text-xl xs:text-xs text-shadow-p text-white
          xs:w-[90%] sm:text-left xs:text-center 
          "
              >
                OUR CRIME-FIGHTING FOUNDERS, BORIS & STEFAN, WANT TO MAKE BUYING
                AND EXCHANGING IN-GAME ITEMS AS SAFE & SECURE AS TRADING COMPANY
                SHARES.
              </p>
              <div className="sm:w-[30%] xs:w-[100%] sm:items-center sm:justify-start sm:mt-0 xs:flex xs:flex-col xs:justify-center xs:items-center xs:mt-2">
                <img
                  className="sm:max-w-[120px] xs:max-w-[80px]"
                  src={youtube_icon}
                  alt="youtube_icon"
                />
                <p className="text-white sm:text-sm xs:text-xs sm:mt-0 xs:mt-2 text-center text-shadow-p">
                  WATCH THE
                  <br />
                  ELEVATOR PITCH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter fullpageApi={fullpageApi} startCounter={startCounter} />
    </div>
  );
};

export default StefanBoris2;
