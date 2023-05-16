import React from 'react';
import elevatorscene from '../../../assets/images/elevatorscene.jpg';
import CowLevelHeader from '../../../components/CowLevelHeader';

const ElevatorScene = () => {
  return (
    <div className="section relative">
      <CowLevelHeader />
      <img
        className="absolute z-[-1] top-0 left-0 right-0 bottom-0"
        src={elevatorscene}
        style={{ width: '100vw', height: '100vh' }}
        alt="handOpen"
      />
    </div>
  );
};

export default ElevatorScene;
