import React from 'react';
import oure from '../../../assets/images/oure.png';
import runlookingbehind from '../../../assets/images/runlookingbehind.png';
import elevatorscene from '../../../assets/images/av1.png';
import stef from '../../../assets/images/stef.png';
import steffRunningOutFromCar from '../../../assets/images/steffRunningOutFromCar.png';
import closedElevator from '../../../assets/images/closedElevator.png';
import withoutstef from '../../../assets/images/withoutstef.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import MovingText from './MovingText';
import { FaAngleUp, FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const Stefanavatar = ({ fullpageApi, open, setOpen, state }) => {
  return (
    <div className="section relative overflow-x-hidden">
      {/* Header */}
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
      {/* stef outside elevator */}
      <div className="top-0 absolute xs:flex xs:items-center h-full w-full overflow-hidden bg-[#CAD5CC]">
        <div className="relative top-0 w-full h-full xs:text-left md:text-center">
          <img
            className={`absolute top-0 w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 5 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={closedElevator}
            alt="closedElevator"
          />
          <img
            className={`absolute top-0 w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 5 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
            src={withoutstef}
            alt="withoutstef"
          />
          <img
            className="absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]"
            src={stef}
            alt="elevatorscene"
          />
          <div className="relative w-full h-full flex justify-center">
            <img
              className={`absolute top-0  sm:w-full md:w-auto sm:h-auto md:h-full sm:inline-block xs:hidden ${
                state?.destination?.index === 5 && state?.direction === 'down'
                  ? 'fadein'
                  : 'z-[1]'
              }`}
              src={oure}
              alt="elevatorscene"
            />
            <img
              className={`absolute top-0 sm:w-full md:w-auto sm:h-auto md:h-full sm:inline-block xs:hidden ${
                state?.destination?.index === 5 && state?.direction === 'down'
                  ? 'fadeout'
                  : 'z-[0]'
              }`}
              src={elevatorscene}
              alt="elevatorscene"
            />
          </div>
        </div>
      </div>
      <MovingText />
      <div className="absolute xs:flex xs:items-center top-[200%] w-screen h-full overflow-hidden bg-[#CAD5CC]">
        <div className="relative top-0 w-full h-full xs:text-left md:text-center">
          <img
            className={`absolute top-0 w-full xs:inline-block sm:hidden`}
            src={closedElevator}
            alt="closedElevator"
          />
          <img
            className={`absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]
            ${
              state?.destination?.index === 5 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[2]'
            }
            `}
            src={stef}
            alt="stef"
          />
          {state?.destination?.index === 5 && state?.direction === 'up' && (
            <img
              className={`absolute w-full top-[0] xs:inline-block sm:hidden
              ${
                state?.destination?.index === 5 && state?.direction === 'up'
                  ? 'fadeout'
                  : 'z-[1]'
              }
              `}
              src={steffRunningOutFromCar}
              alt="steffRunningOutFromCar"
            />
          )}
          <div className="relative w-full h-full flex justify-center">
            <img
              className={`absolute top-0  sm:w-full md:w-auto sm:h-auto md:h-full sm:inline-block xs:hidden 
              ${
                state?.destination?.index === 5 && state?.direction === 'up'
                  ? 'fadein'
                  : 'z-[1]'
              }
              `}
              src={oure}
              alt="elevatorscene"
            />
            <img
              className={`absolute top-0 sm:w-full md:w-auto sm:h-auto md:h-full sm:inline-block xs:hidden ${
                state?.destination?.index === 5 && state?.direction === 'up'
                  ? 'fadeout'
                  : 'z-[0]'
              }`}
              src={runlookingbehind}
              alt="runlookingbehind"
            />
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
    </div>
  );
};

export default Stefanavatar;
