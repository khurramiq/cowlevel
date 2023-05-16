import React from 'react';
import oure from '../../../assets/images/oure.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import MovingText from './MovingText';
import { FaBars } from 'react-icons/fa';

const Stefanavatar = () => {
  return (
    <div className="section relative overflow-x-hidden">
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
        <img className="relative w-full" src={oure} alt="elevatorscene" />
      </div>
      <MovingText />
      <div className="absolute top-[200%] h-screen w-screen overflow-hidden">
        <img className="relative w-full" src={oure} alt="elevatorscene" />
      </div>
    </div>
  );
};

export default Stefanavatar;
