import React from 'react';
import runlookingbehind from '../../../assets/images/runlookingbehind.png';
import mrunlookingbehind from '../../../assets/images/mrunlookingbehind.png';
import oph from '../../../assets/images/oph.png';
import moph from '../../../assets/images/moph.png';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import { FaBars } from 'react-icons/fa';
import MovingIcons from './MovingIcons';

const HandOpen = ({ fullpageApi }) => {
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
      <div className="top-0 absolute xs:flex xs:items-center h-screen w-screen overflow-hidden bg-[#CAD5CC]">
        <img
          className="relative w-full xs:inline-block sm:hidden"
          src={mrunlookingbehind}
          alt="elevatorscene"
        />
        <img
          className="relative w-full sm:inline-block xs:hidden"
          src={runlookingbehind}
          alt="elevatorscene"
        />
      </div>
      <MovingIcons />
      <div className="absolute xs:flex xs:items-center top-[200%] h-screen overflow-hidden bg-[#CAD5CC]">
        <img
          className="relative w-full xs:inline-block sm:hidden"
          src={moph}
          alt="runninglookingbehind"
        />
        <img
          className="relative w-full sm:inline-block xs:hidden"
          src={oph}
          alt="runninglookingbehind"
        />
        <button
          className="scrollToTopButton"
          onClick={() => {
            fullpageApi.moveTo(1);
          }}
        >
          <i className="fal fa-angle-up text-4xl"></i>
        </button>
      </div>
    </div>
  );
};

export default HandOpen;
