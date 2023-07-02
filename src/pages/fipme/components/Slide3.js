import React from 'react';
import slide1 from '../../../assets/images/fipme/slide1.png';
import slide2 from '../../../assets/images/fipme/slide2.png';
import slideMobile1 from '../../../assets/images/fipme/slideMobile1.png';
import slideMobile2 from '../../../assets/images/fipme/slideMobile2.png';
import pipme_logo from '../../../assets/images/fipme/pipme_logo.png';
import whitethan from '../../../assets/images/invest/whitethan.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide3 = ({ open, setOpen, state }) => {
  console.log('state', state);
  return (
    <div className={'section relative  bg-[#F93A3F]'}>
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
            className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden
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
              className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden
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
          style={{
            backgroundImage:
              'linear-gradient(185deg, rgb(249, 58, 63) 51%, rgb(200, 47, 50) 50%)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            borderWidth: '0px',
            borderColor: 'rgb(226, 226, 226)',
            borderStyle: 'solid',
            height: 'calc(100vh - 0px)',
          }}
        >
          <h3 className="text-3xl font-[500]">FiPME</h3>
          <img src={whitethan} alt="whitethan" />
          <h4 className="text-base font-[500] mt-4 text-center">
            FIRST INTERNATIONAL PLAY
            <br className="xs:inline sm:hidden" />
            MONEY EXCHANGE
          </h4>
          <p className="xs:w-[90%] sm:w-[50%] text-center xs:text-sm md:text-base mt-3 leading-tight">
            FiPME is an online game market exchange where buying, selling, and
            trading in-game items is as easy as trading shares on the NASDAQ or
            buying items on eBay. Trades happen safely, securely, and instantly,
            assuring the best price for buyer and seller – even between
            different games.
          </p>
          <p className="xs:text-sm md:text-base w-[90%] text-center mt-5">
            Now you can invest in an asset you know and love.
          </p>
          <div className="flex items-center mt-5">
            <p>REGISTER AT</p>
            <img className="w-[40px] ml-5" src={pipme_logo} alt="pipme_logo" />
          </div>
          <p className="xs:text-sm md:text-base xs:w-[90%] md:w-[40%] text-center mt-3">
            FiPME Is fully approved by PolyReg, which is supervised by the Swiss
            Financial Market Supervisory Authority (FINMA).
          </p>
        </div>
      )}
    </div>
  );
};

export default Slide3;
