import React from 'react';
import invest_slide1 from '../../../assets/images/invest/invest_slide1.png';
import invest_slide2 from '../../../assets/images/invest/invest_slide2.png';
import invest_mobile1 from '../../../assets/images/invest/invest_mobile1.png';
import invest_mobile2 from '../../../assets/images/invest/invest_mobile2.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide3 = ({ open, setOpen, state }) => {
  console.log('state', state);
  return (
    <div className={'section relative  bg-[#3D6FB2]'}>
      <CowLevelHeader open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-full h-full overflow-hidden">
        <div className="relative parent w-screen h-full overflow-hidden">
          <img
            className={`absolute picture xs:block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={invest_mobile2}
            alt="invest_mobile2"
          />
          {state?.destination?.index === 2 && state?.direction === 'down' && (
            <img
              className={`absolute picture xs:block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={invest_mobile1}
              alt="invest_mobile1"
            />
          )}
          <img
            className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={invest_slide2}
            alt="invest_slide2"
          />
          {state?.destination?.index === 2 && state?.direction === 'down' && (
            <img
              className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={invest_slide1}
              alt="invest_slide1"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide3;
