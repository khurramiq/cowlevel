import React from 'react';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import whitethan from '../../../assets/images/moos/red_than.png';
import slideMobile2 from '../../../assets/images/moos/moos_mobile2.png';
import slide2 from '../../../assets/images/moos/slide2.png';
import fipme from '../../../assets/images/moos/fipme.png';
import card1 from '../../../assets/images/moos/card1.jpeg';
import card2 from '../../../assets/images/moos/card2.jpeg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const Slide4 = ({ open, setOpen, fullpageApi, state }) => {
  return (
    <div className="section relative  bg-[#FFFBE8] overflow-x-hidden scrollbar-hidden">
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
              className={`picture xs:block sm:hidden
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
              className={`sm:w-auto picture m-auto sm:inline-block xs:hidden
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
        >
          <h3 className="text-3xl font-[500] text-center">BLOG</h3>
          <img src={whitethan} alt="whitethan" />
          <div className="md:w-[60%] sm:w-[70%] xs:w-[90%] md:flex sm:block mt-10">
            <div className="md:w-[66%] xs:w-[100%] xs:block sm:flex">
              <div className="mr-[10px] sm:w-[50%] xs:w-[100%]">
                <div className="relative overflow-hidden group">
                  <img className="w-full" src={fipme} alt="fipme" />
                  <div
                    className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                    }}
                  >
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                        <i className="fal fa-link text-white"></i>
                      </div>
                      <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                        <i className="fal fa-search text-white"></i>
                      </div>
                    </div>
                    <h4 className="text-center font-[500] mt-3 text-sm">
                      {' '}
                      All Virtual An Economy of Goods <br /> & Services Exchange
                    </h4>
                    <p className="text-sm font-[300]">Blog</p>
                  </div>
                </div>
                <p className="text-center mt-5">
                  All Virtual An Economy of <br /> Goods & Services <br />{' '}
                  Exchange
                </p>
              </div>
              <div className="mr-[10px] sm:w-[50%] xs:w-[100%] xs:mt-10 sm:mt-0">
                <div className="relative overflow-hidden group">
                  <img src={card1} alt="card1" />
                  <div
                    className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                    }}
                  >
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                        <i className="fal fa-link text-white"></i>
                      </div>
                      <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                        <i className="fal fa-search text-white"></i>
                      </div>
                    </div>
                    <h4 className="text-center font-[500] mt-3 text-sm">
                      IFZ FinTech Study 2023
                    </h4>
                    <p className="text-sm font-[300]">Blog</p>
                  </div>
                </div>
                <p className="text-center mt-5">IFZ FinTech Study 2023</p>
              </div>
            </div>
            <div className="md:w-[33%] sm:w-[50%] md:mt-0 xs:pb-10 md:pb-0 xs:mt-10">
              <div className="relative overflow-hidden group">
                <img src={card2} alt="card2" />
                <div
                  className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                  }}
                >
                  <div className="flex justify-center">
                    <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                      <i className="fal fa-link text-white"></i>
                    </div>
                    <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                      <i className="fal fa-search text-white"></i>
                    </div>
                  </div>
                  <h4 className="text-center font-[500] mt-3 text-sm">
                    Qatar Economic Forum, powered by Bloomberg
                  </h4>
                  <p className="text-sm font-[300]">Blog</p>
                </div>
              </div>
              <p className="text-center mt-5">
                Qatar Economic Forum, <br /> powered by Bloomberg
              </p>
            </div>
          </div>
        </div>
      )}
      <div
        className={`absolute top-0 w-screen h-full flex flex-col justify-center items-center overflow-x-hidden
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
      >
        <h3 className="text-3xl font-[500]">
          <Link to={'/blogs'}>MOOS</Link>
        </h3>
        <Link to={'/blogs'}>
          <img src={whitethan} alt="whitethan" />
        </Link>
        <h4 className="text-base font-[500] mt-4 text-center">
          STUFF WE SAY AND DO
        </h4>
        <p className="xs:w-[90%] sm:w-[40%] text-center text-base mt-3">
          Steak out this section to learn all the latest goings on at Cow Level.
          And don’t forget to sign up for our Mooseletter.
        </p>
      </div>
    </div>
  );
};

export default Slide4;
