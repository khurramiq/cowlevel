import React from 'react';
import runlookingbehind from '../../../assets/images/runlookingbehind.png';
import oph from '../../../assets/images/oph.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import { FaBars } from 'react-icons/fa';
import MovingIcons from './MovingIcons';

const HandOpen = () => {
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
        <img
          className="relative w-full"
          src={runlookingbehind}
          alt="elevatorscene"
        />
      </div>
      <MovingIcons />
      <div className="absolute top-[200%] h-screen w-screen overflow-hidden">
        <img className="relative w-full" src={oph} alt="runninglookingbehind" />
      </div>
    </div>
  );
};

export default HandOpen;
