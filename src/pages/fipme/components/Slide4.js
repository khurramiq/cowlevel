import React from 'react';
import cowheaderlogo from '../../../assets/images/fipme/white_cow.png';
import whitethan from '../../../assets/images/invest/whitethan.png';
import slideMobile2 from '../../../assets/images/fipme/slideMobile2.png';
import slide2 from '../../../assets/images/fipme/slide2.png';
import fIPMEGraphics from '../../../assets/images/fipme/fIPMEGraphics.png';
import pipme_logo from '../../../assets/images/fipme/pipme_logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const Slide4 = ({ open, setOpen, fullpageApi, state }) => {
  return (
    <div className="section relative  bg-[#F93A3F] overflow-x-hidden scrollbar-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
          <Link to="/" onClick={() => fullpageApi.moveTo(1)}>
            <img
              className="md:w-[60px] xs:w-[50px]"
              src={cowheaderlogo}
              alt="cowheaderlogo"
            />
          </Link>
          <div className="relative">
            {open ? (
              <i
                className="far fa-times text-4xl cursor-pointer rotate_animation"
                onClick={() => setOpen(false)}
              ></i>
            ) : (
              <FaBars
                className="md:text-3xl xs:text-lg cursor-pointer rotate-animationR"
                onClick={() => setOpen(true)}
              />
            )}
            {open && <MobileLinks />}
          </div>
        </div>
      </div>
      {state?.destination?.index === 3 && state?.direction === 'down' && (
        <div
          className={`absolute top-0 w-screen h-full flex flex-col justify-center items-center text-white overflow-x-hidden`}
        >
          <div className="relative parent w-screen h-full overflow-hidden">
            <img
              className={`absolute picture xs:block sm:hidden
            ${
              state?.destination?.index === 3 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={slideMobile2}
              alt="slideMobile2"
            />
            <img
              className={`absolute md:w-[70%] sm:w-auto picture m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 3 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={slide2}
              alt="slide2"
            />
          </div>
        </div>
      )}
      {state?.destination?.index === 3 && state?.direction === 'up' && (
        <div
          className={`absolute top-0 w-screen h-full flex flex-col justify-center items-center text-white overflow-x-hidden
        ${
          state?.destination?.index === 3 && state?.direction === 'up'
            ? 'fadeout'
            : 'z-[1]'
        }
        `}
          style={{
            backgroundColor: 'rgb(200, 47, 50)',
            backgroundImage:
              'linear-gradient(175deg, rgb(200, 47, 50) 60%, rgb(249, 58, 63) 41%)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            borderWidth: '0px',
            borderColor: 'rgb(226, 226, 226)',
            borderStyle: 'solid',
            height: `calc(100vh - 0px)`,
          }}
        >
          <h3 className="text-3xl font-[500] text-center">
            THE NEW GAMING ECONOMY
          </h3>
          <img src={whitethan} alt="whitethan" />
          <h4 className="text-base font-[500] mt-4 text-center">
            SAFELY BUY, SELL, EXCHANGE, AND PROTECT YOUR <br /> IN-GAME ITEMS
            WITH FIPME
          </h4>
          <img
            className="xs:w-[80%] sm:w-[25%] mt-5"
            src={fIPMEGraphics}
            alt="fIPMEGraphics"
          />
        </div>
      )}
      <div
        className={`absolute top-0 w-screen h-full flex flex-col justify-center items-center text-white overflow-x-hidden
      ${
        state?.destination?.index === 3 && state?.direction === 'down'
          ? 'fadein'
          : 'z-[1]'
      }
      ${
        state?.destination?.index === 3 && state?.direction === 'up'
          ? 'fadein'
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
        <p className="xs:w-[90%] sm:w-[50%] text-center text-base mt-3 leading-tight">
          FiPME is an online game market exchange where buying, selling, and
          trading in-game items is as easy as trading shares on the NASDAQ or
          buying items on eBay. Trades happen safely, securely, and instantly,
          assuring the best price for buyer and seller – even between different
          games.
        </p>
        <p className="w-[90%] text-center mt-5">
          Now you can invest in an asset you know and love.
        </p>
        <div className="flex items-center mt-5">
          <p>REGISTER AT</p>
          <img className="w-[40px] ml-5" src={pipme_logo} alt="pipme_logo" />
        </div>
      </div>
    </div>
  );
};

export default Slide4;
