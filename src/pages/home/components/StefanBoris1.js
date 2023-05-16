import React from 'react';
import bs3 from '../../../assets/images/bs3.png';
import youtube_icon from '../../../assets/images/youtube_icon.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const StefanBoris1 = () => {
  return (
    <div className="section relative overflow-hidden bg-[#D6D0C4]">
      <CowLevelHeader />
      <div className="absolute h-screen w-screen overflow-hidden">
        <img className="relative w-full" src={bs3} alt="handOpen" />
      </div>
      <div className="absolute flex items-start h-[30%] bottom-0 z-[1]">
        <div className="flex justify-between w-[50%] mx-auto">
          <p className="w-[70%] text-xl text-shadow-p text-white">
            OUR CRIME-FIGHTING FOUNDERS, BORIS & STEFAN, WANT TO MAKE BUYING AND
            EXCHANGING IN-GAME ITEMS AS SAFE & SECURE AS TRADING COMPANY SHARES.
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
  );
};

export default StefanBoris1;
