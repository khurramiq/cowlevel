import React from 'react';
import invest_slide1 from '../../../assets/images/invest/invest_slide1.png';
import invest_mobile1 from '../../../assets/images/invest/invest_mobile1.png';
import Header from './Header';

const Slide1 = ({ open, setOpen }) => {
  return (
    <div className="section relative  bg-[#3D6FB2]">
      <Header open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <div className="relative flex align-items w-screen h-full overflow-hidden">
          <img
            className="absolute picture xs:block sm:hidden"
            src={invest_mobile1}
            alt="invest_mobile1"
          />
          <img
            className="md:w-[70%] sm:w-auto picture m-auto sm:block xs:hidden"
            src={invest_slide1}
            alt="invest_slide1"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
