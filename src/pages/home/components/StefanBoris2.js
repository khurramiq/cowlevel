import React from 'react';
import svn0 from '../../../assets/images/svn.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const StefanBoris2 = () => {
  return (
    <div className="section relative">
      <CowLevelHeader />
      <img
        className="absolute z-[-1] top-0 left-0 right-0 bottom-0"
        src={svn0}
        style={{ width: '100vw', height: '100vh' }}
        alt="handOpen"
      />
    </div>
  );
};

export default StefanBoris2;
