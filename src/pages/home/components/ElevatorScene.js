import React from 'react';
import elevatorscene from '../../../assets/images/av1.png';
import oure from '../../../assets/images/oure.png';
import withoutstef from '../../../assets/images/withoutstef.png';
import closedElevator from '../../../assets/images/closedElevator.png';
import stef from '../../../assets/images/stef.png';
import CowLevelHeader from '../../../components/CowLevelHeader';
import { FaAngleUp } from 'react-icons/fa';

const ElevatorScene = ({ fullpageApi, open, setOpen, state }) => {
  return (
    <div className="section relative overflow-hidden">
      <CowLevelHeader open={open} setOpen={setOpen} />
      <div className="absolute xs:flex xs:items-center justify-center w-screen h-full overflow-hidden z-[1] bg-[#CAD5CC]">
        <div className="relative w-full h-full">
          <img
            className={`absolute w-full top-0 xs:inline-block sm:hidden
            ${
              state?.destination?.index === 4 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }            
            `}
            src={withoutstef}
            alt="elevatorscene"
          />
          {state?.destination?.index === 4 && state?.direction === 'up' && (
            <img
              className={`absolute w-full top-0 xs:inline-block sm:hidden
            ${
              state?.destination?.index === 4 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }            
            `}
              src={closedElevator}
              alt="closedElevator"
            />
          )}
          <img
            className="absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]"
            src={stef}
            alt="elevatorscene"
          />
        </div>
        <img
          className={`absolute top-0 sm:w-full sm:h-full  md:w-auto md:h-full sm:inline-block  xs:hidden 
          ${
            state?.destination?.index === 4 && state?.direction === 'up'
              ? 'fadein'
              : 'z-[1]'
          }
          `}
          src={elevatorscene}
          alt="elevatorscene"
        />
        <img
          className={`absolute top-0 sm:w-full sm:h-full md:w-auto md:h-full sm:inline-block  xs:hidden 
          ${
            state?.destination?.index === 4 && state?.direction === 'up'
              ? 'fadeout'
              : 'z-[0]'
          }
          `}
          src={oure}
          alt="elevatorscene"
        />
      </div>
      <button
        className="scrollToTopButton z-[10]"
        onClick={() => {
          fullpageApi.moveTo(1);
        }}
      >
        <FaAngleUp size="large" />
      </button>
    </div>
  );
};

export default ElevatorScene;
