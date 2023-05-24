import React from 'react';
import bs3 from '../../../assets/images/bs3.png';
import mbs3 from '../../../assets/images/mbs3.png';
import youtube_icon from '../../../assets/images/youtube_icon.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const StefanBoris1 = () => {
  return (
    <div className="section relative overflow-hidden bg-[#D6D0C4]">
      <CowLevelHeader />
      <div
        className="absolute w-screen overflow-hidden"
        style={{ height: '100vh' }}
      >
        <img
          className="relative w-full xs:inline-block sm:hidden"
          src={mbs3}
          alt="handOpen"
        />
        <img
          className="relative w-full sm:inline-block xs:hidden"
          src={bs3}
          alt="handOpen"
        />
      </div>
      <div className="absolute sm:flex sm:items-start sm:h-[30%] xs:h-[60%] bottom-0 z-[1]">
        <div className="sm:flex sm:justify-between sm:items-start sm:w-[50%] xs:block xs:w-[90%] mx-auto">
          <p
            className="sm:w-[70%] text-xl text-shadow-p text-white
          xs:w-[90%] sm:text-left xs:text-center 
          "
          >
            OUR CRIME-FIGHTING FOUNDERS, BORIS & STEFAN, WANT TO MAKE BUYING AND
            EXCHANGING IN-GAME ITEMS AS SAFE & SECURE AS TRADING COMPANY SHARES.
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
  );
};

export default StefanBoris1;
