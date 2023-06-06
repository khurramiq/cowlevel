import React from 'react';
import slide1 from '../../../assets/images/fipme/slide1.png';
import slide2 from '../../../assets/images/fipme/slide2.png';
import slideMobile1 from '../../../assets/images/fipme/slideMobile1.png';
import slideMobile2 from '../../../assets/images/fipme/slideMobile2.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide2 = ({ open, setOpen, state }) => {
  return (
    <div className={'section relative  bg-[#F93A3F]'}>
      <CowLevelHeader open={open} setOpen={setOpen} white />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <div className="relative parent w-screen h-full overflow-hidden">
          <img
            className={`absolute picture xs:inline-block sm:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={slideMobile1}
            alt="slideMobile1"
          />
          {state?.destination?.index === 1 && state?.direction === 'up' && (
            <img
              className={`absolute picture xs:inline-block sm:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={slideMobile2}
              alt="slideMobile2"
            />
          )}
          <img
            className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={slide1}
            alt="slide1"
          />
          {state?.destination?.index === 1 && state?.direction === 'up' && (
            <img
              className={`absolute md:w-[70%] sm:w-auto picture sm:inline-block xs:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={slide2}
              alt="slide2"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide2;
