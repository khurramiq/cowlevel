import React from 'react';
import elevatorscene from '../../../assets/images/av1.png';
import mobileelevatorscene from '../../../assets/images/mobile_av1.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const ElevatorScene = ({ fullpageApi }) => {
  return (
    <div className="section relative overflow-hidden bg-[#A5AAAD]">
      <CowLevelHeader />
      <div className="absolute xs:flex xs:items-center h-screen w-screen overflow-hidden z-[1] bg-[#CAD5CC]">
        <img
          className="relative w-full xs:inline-block sm:hidden"
          src={mobileelevatorscene}
          alt="elevatorscene"
        />
        <img
          className="relative w-full sm:inline-block xs:hidden"
          src={elevatorscene}
          alt="elevatorscene"
        />
        <button
          className="scrollToTopButton z-[10]"
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

export default ElevatorScene;
