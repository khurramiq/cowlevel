import React from 'react';
import slide1 from '../../../assets/images/moos/slide1.png';
import slideMobile1 from '../../../assets/images/moos/moos_mobile1.png';
import Header from './Header';

const Slide1 = ({ open, setOpen }) => {
  return (
    <div className="section relative  bg-[#FFFBE8]">
      <Header open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <div className="relative flex align-items w-screen h-full overflow-hidden">
          <img
            className="absolute picture xs:block sm:hidden"
            src={slideMobile1}
            alt="slideMobile1"
          />
          <img
            className="picture m-auto sm:block xs:hidden"
            src={slide1}
            alt="slide1"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
