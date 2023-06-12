import React, { useEffect, useState } from 'react';
import invest_slide1 from '../../../assets/images/invest/invest_slide1.png';
import invest_slide2 from '../../../assets/images/invest/invest_slide2.png';
import invest_mobile1 from '../../../assets/images/invest/invest_mobile1.png';
import invest_mobile2 from '../../../assets/images/invest/invest_mobile2.png';
import Header from './Header';

const Slide1 = ({ elementRef, open, setOpen }) => {
  const [change, setChange] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prev) => !prev);
    }, 1700);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="section relative  bg-[#3D6FB2] overflow-hidden overflow-x-hidden">
      <Header elementRef={elementRef} open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <div className="relative flex align-items w-full h-full overflow-hidden">
          <img
            className={`absolute picture w-[90%] xs:block sm:hidden
            ${change ? 'fadein' : 'fadeout'}
            `}
            src={invest_mobile1}
            alt="invest_mobile1"
          />
          {/* ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            } */}
          <img
            className={`absolute w-[90%] picture xs:block sm:hidden
            ${!change ? 'fadein' : 'fadeout'}
            `}
            src={invest_mobile2}
            alt="invest_mobile2"
          />
          <img
            className={`md:w-[70%] sm:w-auto picture m-auto sm:block xs:hidden
            ${change ? 'fadein' : 'fadeout'}
            `}
            src={invest_slide1}
            alt="invest_slide1"
          />
          <img
            className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden            
            ${!change ? 'fadein' : 'fadeout'}
            `}
            src={invest_slide2}
            alt="invest_slide2"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
