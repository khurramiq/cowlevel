import React from 'react';
import bs from '../../../assets/images/bs6.png';
import mbs from '../../../assets/images/mbs6.png';
import youtube_icon from '../../../assets/images/youtube_icon.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import Counter from './Counter';
import { FaBars } from 'react-icons/fa';

const StefanBoris2 = ({ startCounter, fullpageApi }) => {
  return (
    <div className="section relative overflow-x-hidden bg-[#A49E90]">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto p-5 flex justify-between items-center">
          <img
            className="w-[60px] h-[40px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
          <FaBars className="text-3xl" />
        </div>
      </div>
      <div
        className="top-0 absolute w-screen overflow-hidden"
        style={{ height: 'calc(100vh - 100px)' }}
      >
        <div className="relative w-screen h-full overflow-hidden">
          <img
            className="w-full sm:hidden xs:inline-block"
            src={mbs}
            alt="handOpen"
          />
          <img
            className="w-full xs:hidden sm:inline-block"
            src={bs}
            alt="handOpen"
          />
          <div className="absolute sm:flex sm:items-start sm:h-[30%] xs:h-[60%] bottom-0 z-[1]">
            <div className="sm:flex sm:justify-between sm:items-start sm:w-[50%] xs:block xs:w-[90%] mx-auto">
              <p
                className="sm:w-[70%] text-xl text-shadow-p text-white
          xs:w-[90%] sm:text-left xs:text-center 
          "
              >
                OUR CRIME-FIGHTING FOUNDERS, BORIS & STEFAN, WANT TO MAKE BUYING
                AND EXCHANGING IN-GAME ITEMS AS SAFE & SECURE AS TRADING COMPANY
                SHARES.
              </p>
              <div className="sm:w-[30%] xs:w-[100%] sm:items-center sm:justify-start sm:mt-0 xs:flex xs:flex-col xs:justify-center xs:items-center xs:mt-10">
                <img
                  className="max-w-[120px]"
                  src={youtube_icon}
                  alt="youtube_icon"
                />
                <p className="text-white text-center text-shadow-p">
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
