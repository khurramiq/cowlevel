import React from 'react';
import elevatorscene from '../../../assets/images/av1.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const ElevatorScene = () => {
  return (
    <div className="section relative overflow-hidden bg-[#A5AAAD]">
      <CowLevelHeader />
      <div className="absolute h-screen w-screen overflow-hidden">
        <img
          className="relative w-full"
          src={elevatorscene}
          alt="elevatorscene"
        />
      </div>
    </div>
  );
};

export default ElevatorScene;
