import React from 'react';
import bg from '../../../assets/images/hallWithClosedElevator.png';
import stefanavatar from '../../../assets/images/stefanavatar.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Stefanavatar = () => {
  return (
    <div className="section relative">
      <CowLevelHeader />
      <img
        src={bg}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        alt="handOpen"
      />
      <img
        src={stefanavatar}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        alt="handOpen"
      />
    </div>
  );
};

export default Stefanavatar;
