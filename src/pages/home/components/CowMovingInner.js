import React from 'react';
import movingcow from '../../../assets/images/movingcow.gif';
import twomaninbelowcow from '../../../assets/images/twomaninbelowcow.png';
import cowlinkimage from '../../../assets/images/cowlinkimage.png';
import Fade from 'react-reveal/Fade';
import { FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CowMovingInner = ({
  fullpageApi,
  state,
  destination,
  direction,
  zIndex,
  fade,
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-[#EC3E37] ${
        state?.destination?.index === destination &&
        state?.direction === direction
          ? fade
          : zIndex
      }
      ${state?.destination?.index > 8 ? 'hidden' : ''}
      ${
        state?.destination?.index === 8 && state?.direction === 'up'
          ? 'hidden'
          : ''
      }
              `}
    >
      <div
        class={`flex justify-end items-end w-[120%] md:h-[60%] xs:h-[50%] bg-[#C73431] origin-bottom-left rotate-[-7deg] translate-x-[-10px]`}
      >
        <div className="w-[110%]">
          <img
            className="md:max-w-[250px] sm:max-w-[100px] xs:max-w-[150px] moving_cow"
            src={movingcow}
            alt="movingcow"
          />
        </div>
      </div>
      <div
        className={`md:h-[40%] xs:h-[50%] xs:flex xs:items-end md:block overflow-hidden`}
      >
        <div className="relative h-full flex justify-center md:items-start  xs:items-end">
          <div className="sm:hidden xs:inline-block absolute top-[10%] left-[10px]">
            <Fade bottom>
              <div className="relative border-[3px] border-white p-[5px] text-[100%] rounded-none mb-0 sm:w-[272px] xs:w-[25%] sm:h-[94px] xs:h-auto text-white">
                <span className="sm:text-sm xs:text-[8px]">
                  An investment in cow level is an investment in the protection
                  of gamers…
                </span>
                <div className="red_speech_right_arrow" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="xs:hidden sm:inline-block relative md:top-[0px] sm:top-[-50%] sm:left-[10px] md:left-[30px] border-[3px] border-white md:p-[10px] sm:p-[5px] text-[100%] rounded-none mb-0 sm:w-[290px] xs:w-[30%] md:h-[94px] xs:h-auto text-white">
              <span className="md:text-sm sm:text-[10px] xs:text-xs">
                An investment in cow level is an investment in the protection of
                gamers…
              </span>
              <div className="red_speech_right_arrow" />
            </div>
          </Fade>
          <img
            className="md:w-[30%] sm:w-[20%] xs:w-[60%]"
            src={twomaninbelowcow}
            alt="twomaninbelowcow"
          />
          <Fade bottom>
            <div className="relative md:top-0 sm:top-[-50%] sm:left-[-10px] md:left-[-30px] xs:hidden sm:inline-block border-[3px] border-white md:p-[10px] sm:p-[5px] text-[15px] rounded-none mb-0 sm:w-[272px] xs:w-[30%] md:h-[94px] xs:h-auto text-white">
              <div className="red_speech_left_arrow" />
              <span className="md:text-sm sm:text-[10px] xs:text-xs">
                …and the creation of wealth through gaming. Thank you for your
                support.
              </span>
              <Link
                to={'/invest'}
                onClick={() => fullpageApi.moveTo(1)}
                className="hover:text-red-600"
              >
                <img
                  className="absolute right-0 md:right-[150px] md:bottom-[-100px] sm:bottom-[-50px] md:w-[80px] sm:w-[50px]"
                  src={cowlinkimage}
                  alt="cowlinkimage"
                />
              </Link>
            </div>
          </Fade>
          <div className="sm:hidden xs:inline-block absolute top-[10%] right-[-180px]">
            <Fade bottom>
              <div className="relative border-[3px] border-white p-[5px] text-[15px] rounded-none mb-0 sm:w-[272px] xs:w-[30%] sm:h-[94px] xs:h-auto text-white">
                <div className="red_speech_left_arrow" />
                <span className="sm:text-sm xs:text-[8px]">
                  …and the creation of wealth through gaming. Thank you for your
                  support.
                </span>
                <Link
                  to={'/invest'}
                  onClick={() => fullpageApi.moveTo(1)}
                  className="hover:text-red-600"
                >
                  <img
                    className="absolute right-0 bottom-[-50px] w-[50px]"
                    src={cowlinkimage}
                    alt="cowlinkimage"
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <button
        className="scrollToTopButton"
        onClick={() => {
          fullpageApi.moveTo(1);
        }}
      >
        <FaAngleUp size="large" />
      </button>
    </div>
  );
};

export default CowMovingInner;
