import React from 'react';
import bs from '../../../assets/images/bs6.png';
import youtube_icon from '../../../assets/images/youtube_icon.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import Counter from './Counter';
import { FaBars } from 'react-icons/fa';

const StefanBoris2 = ({ startCounter, fullpageApi }) => {
  return (
    <div className="section relative overflow-x-hidden bg-[#A49E90]">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="w-[1200px] mx-auto p-5 flex justify-between items-center">
          <img
            className="w-[60px] h-[40px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
          <FaBars className="text-3xl mr-5" />
        </div>
      </div>
      <div className="top-0 absolute h-screen w-screen overflow-hidden">
        <div className="relative w-screen h-screen overflow-hidden">
          <img className="w-full" src={bs} alt="handOpen" />
          <div className="absolute flex items-start h-[30%] bottom-0 z-[1]">
            <div className="flex justify-between w-[50%] mx-auto">
              <p className="w-[70%] text-xl text-shadow-p text-white">
                OUR CRIME-FIGHTING FOUNDERS, BORIS & STEFAN, WANT TO MAKE BUYING
                AND EXCHANGING IN-GAME ITEMS AS SAFE & SECURE AS TRADING COMPANY
                SHARES.
              </p>
              <div className="w-30%">
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
