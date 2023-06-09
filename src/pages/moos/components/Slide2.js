import React from 'react';
import slide1 from '../../../assets/images/moos/slide1.png';
import slide2 from '../../../assets/images/moos/slide2.png';
import slideMobile1 from '../../../assets/images/moos/moos_mobile1.png';
import slideMobile2 from '../../../assets/images/moos/moos_mobile2.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide2 = ({ open, setOpen, state }) => {
  return (
    <div className={'section relative  bg-[#FFFBE8]'}>
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
            className={`sm:w-auto picture m-auto sm:inline-block xs:hidden
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
              className={`sm:w-auto picture sm:inline-block xs:hidden
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
