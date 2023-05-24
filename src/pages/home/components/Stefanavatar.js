import React from 'react';
import oure from '../../../assets/images/oure.png';
import stef from '../../../assets/images/stef.png';
import closedElevator from '../../../assets/images/closedElevator.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import MovingText from './MovingText';
import { FaAngleUp, FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const Stefanavatar = ({ fullpageApi, open, setOpen }) => {
  return (
    <div className="section relative overflow-x-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto p-5 flex justify-between items-center">
          <img
            className="w-[60px] h-[40px]"
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
                className="text-3xl cursor-pointer rotate-animationR"
                onClick={() => setOpen(true)}
              />
            )}
            {open && <MobileLinks />}
          </div>
        </div>
      </div>
      <div className="top-0 absolute xs:flex xs:items-center h-screen w-screen overflow-hidden bg-[#CAD5CC]">
        <div className="relative top-0 w-full h-full">
          <img
            className="absolute top-0 w-full xs:inline-block sm:hidden"
            src={closedElevator}
            alt="closedElevator"
          />
          <img
            className="absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]"
            src={stef}
            alt="elevatorscene"
          />
          <img
            className="relative w-full sm:inline-block xs:hidden"
            src={oure}
            alt="elevatorscene"
          />
        </div>
      </div>
      <MovingText />
      <div className="absolute xs:flex xs:items-center top-[200%] w-screen h-full overflow-hidden bg-[#CAD5CC]">
        <div className="relative top-0 w-full h-full">
          <img
            className="absolute top-0 w-full xs:inline-block sm:hidden"
            src={closedElevator}
            alt="closedElevator"
          />
          <img
            className="absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]"
            src={stef}
            alt="elevatorscene"
          />
          <img
            className="relative w-full sm:inline-block xs:hidden"
            src={oure}
            alt="elevatorscene"
          />
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
