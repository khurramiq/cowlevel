/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import bs from '../../../assets/images/bs6.png';
import mbs from '../../../assets/images/mbs61.png';
import bs3 from '../../../assets/images/bs3.png';
import mbs3 from '../../../assets/images/mbs31.png';
import youtube_icon from '../../../assets/images/youtube_icon.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const StefanBoris1 = ({ open, setOpen, state }) => {
  return (
    <div className="section relative overflow-hidden bg-[#D6D0C4]">
      <CowLevelHeader open={open} setOpen={setOpen} />
      <div className="absolute w-screen h-full overflow-hidden">
        <div className="relative w-screen h-full overflow-hidden">
          <img
            className={`absolute top-0 w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={mbs3}
            alt="handOpen"
          />
          <img
            className={`absolute top-0 w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
            src={mbs}
            alt="handOpen"
          />
          <img
            className={`absolute top-0 w-full sm:h-full sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
            src={bs}
            alt="handOpen"
          />
          <img
            className={`absolute top-0 w-full sm:h-full sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={bs3}
            alt="handOpen"
          />
        </div>
      </div>
      <div className="absolute md:flex md:items-start md:h-[30%] sm:h-[60%] xs:h-[50%] bottom-0 z-[1]">
        <div className="md:flex md:justify-between md:items-start md:w-[50%] xs:block xs:w-[90%] mx-auto">
          <p
            className="md:w-[70%] md:text-xl xs:text-lg text-shadow-p text-white
          xs:w-[100%] md:text-left xs:text-center 
          "
          >
            OUR CRIME-FIGHTING FOUNDERS, BORIS & STEFAN, WANT TO MAKE BUYING AND
            EXCHANGING IN-GAME ITEMS AS SAFE & SECURE AS TRADING COMPANY SHARES.
          </p>
          <div className="md:w-[30%] xs:w-[100%] md:items-center md:justify-start md:mt-0 xs:flex xs:flex-col sm:flex-row md:flex-col xs:justify-center xs:items-center xs:mt-2">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/garage-388416.appspot.com/o/uploads%2FCow-Level-Elevator-Pitch.mp4?alt=media&token=71d101b7-55d0-4879-8533-a99edb883e4a&_gl=1*1wpx4h1*_ga*MTk1MzM5NDg2LjE2MzU1NDgwMTE.*_ga_CW55HF8NVT*MTY4NjQ0ODU5My4xOS4xLjE2ODY0NDkwMzAuMC4wLjA."
              target="_blank"
            >
              <img
                className="md:max-w-[120px] sm:max-w-[80px] xs:max-w-[80px]"
                src={youtube_icon}
                alt="youtube_icon"
              />
              <p className="text-white sm:text-sm xs:text-sm sm:mt-0 xs:mt-2 md:text-center xs:text-center sm:text-left sm:ml-2 text-shadow-p">
                WATCH THE
                <br />
                ELEVATOR PITCH
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StefanBoris1;
