import React from 'react';
import elevatorscene from '../../../assets/images/av1.png';
import withoutstef from '../../../assets/images/withoutstef.png';
import stef from '../../../assets/images/stef.png';
import CowLevelHeader from '../../../components/CowLevelHeader';
import { FaAngleUp } from 'react-icons/fa';

const ElevatorScene = ({ fullpageApi }) => {
  return (
    <div className="section relative overflow-hidden bg-[#A5AAAD]">
      <CowLevelHeader />
      <div
        className="absolute xs:flex xs:items-center w-screen overflow-hidden z-[1] bg-[#CAD5CC]"
        style={{ height: 'calc(100vh - 100px)' }}
      >
        <div className="relative w-full h-full">
          <img
            className="absolute w-full top-0 xs:inline-block sm:hidden"
            src={withoutstef}
            alt="elevatorscene"
          />
          <img
            className="absolute w-full top-[-50px] xs:inline-block sm:hidden z-[2]"
            src={stef}
            alt="elevatorscene"
          />
        </div>
        <img
          className="absolute top-0 w-full sm:inline-block xs:hidden"
          src={elevatorscene}
          alt="elevatorscene"
        />
        <button
          className="scrollToTopButton z-[10]"
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

export default ElevatorScene;
