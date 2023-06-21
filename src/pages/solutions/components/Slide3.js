import React from 'react';
import slide1 from '../../../assets/images/solutions/solutionSlide1.png';
import slide2 from '../../../assets/images/solutions/solutionSlide2.png';
import slideMobile1 from '../../../assets/images/solutions/solution_mobile1.png';
import slideMobile2 from '../../../assets/images/solutions/solution_mobile2.png';
import whitethan from '../../../assets/images/invest/whitethan.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide3 = ({ open, setOpen, state }) => {
  console.log('state', state);
  return (
    <div className={'section relative  bg-[#3D6FB2]'}>
      <CowLevelHeader open={open} setOpen={setOpen} white />
      <div className="absolute top-0 flex justify-center items-center w-full h-full overflow-hidden">
        <div className="relative parent w-screen h-full overflow-hidden">
          <img
            className={`absolute picture xs:block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            ${
              state?.destination?.index === 2 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={slideMobile2}
            alt="slideMobile2"
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
              src={slideMobile1}
              alt="slideMobile1"
            />
          )}
          <img
            className={`sm:w-auto picture m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            ${
              state?.destination?.index === 2 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={slide2}
            alt="slide2"
          />
          {state?.destination?.index === 2 && state?.direction === 'down' && (
            <img
              className={`sm:w-auto picture m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={slide1}
              alt="slide1"
            />
          )}
        </div>
      </div>
      {state?.destination?.index === 2 && state?.direction === 'up' && (
        <div
          className={`absolute top-0 w-screen h-full flex flex-col justify-center items-center text-white overflow-x-hidden
      ${
        state?.destination?.index === 2 && state?.direction === 'up'
          ? 'fadeout'
          : 'z-[1]'
      }
      `}
        >
          <h3 className="text-3xl font-[500]">SOLUTIONS</h3>
          <img src={whitethan} alt="whitethan" />
          <h4 className="text-base font-[500] mt-4 text-center">
            FOR GAME PUBLISHERS AND PARTNERS
          </h4>
          <p className="xs:w-[90%] sm:w-[40%] text-center text-base mt-3">
            As FiPME grows, gamers will transition away from grey markets and
            into a trusted environment where they can safely buy and exchange
            virtual assets at a fair price and in real-time. This will allow
            game publishers to become the “central bank” for their own in-game
            items, which will enhance their primary market and prevent abuse in
            the secondary market. Contact us for more information.
          </p>
          <p className="w-[40%] text-center mt-3">
            FiPME Is fully approved by PolyReg, which is supervised by the Swiss
            Financial Market Supervisory Authority (FINMA).
          </p>
        </div>
      )}
    </div>
  );
};

export default Slide3;
