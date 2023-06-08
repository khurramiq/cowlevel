import React from 'react';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import whitethan from '../../../assets/images/moos/red_than.png';
import fipme from '../../../assets/images/moos/fipme.png';
import card1 from '../../../assets/images/moos/card1.jpeg';
import card2 from '../../../assets/images/moos/card2.jpeg';
import card3 from '../../../assets/images/moos/card3.png';
import card4 from '../../../assets/images/moos/card4.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';
import Footer from './Footer';

const Slide5 = ({ open, setOpen, fullpageApi, state }) => {
  return (
    <div className="section relative bg-[#FFFBE8]  overflow-x-hidden scrollbar-hidden">
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
      <div
        className={`md:absolute md:top-0 w-screen xs:h-auto md:h-full flex flex-col justify-center items-center bg-[#FFFBE8] overflow-x-hidden
        ${
          state?.destination?.index === 4 && state?.direction === 'down'
            ? 'fadein'
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
      <div
        className={`md:absolute md:top-[100%] w-screen xs:h-auto md:h-[120%] flex flex-col justify-center items-center bg-[#FFFBE8] overflow-x-hidden
        ${
          state?.destination?.index === 4 && state?.direction === 'down'
            ? 'fadein'
            : 'z-[1]'
        }
        `}
      >
        <h3 className="text-3xl font-[500] text-center">NEWS</h3>
        <img src={whitethan} alt="whitethan" />
        <div className="md:w-[60%] sm:w-[70%] xs:w-[90%] mt-10">
          <div className="md:w-[100%] xs:w-[100%] xs:block sm:flex">
            <div className="mr-[20px] sm:w-[40%] xs:w-[100%]">
              <div className="relative overflow-hidden group">
                <img className="w-full" src={card3} alt="card3" />
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
                    ADVISORY BOARD
                  </h4>
                  <p className="text-sm font-[300]">News</p>
                </div>
              </div>
            </div>
            <div className="mr-[10px] sm:w-[60%] xs:w-[100%] xs:mt-10 sm:mt-0">
              <h3 className="text-lg">ADVISORY BOARD</h3>
              <p className="text-sm mt-7">
                Unlocking the Potential! Fintech Startup Cow Level AG increases
                Advisory Board Cow Level has expanded its Advisory Board by four
                experts at the end of the year. The top-class advisory board is
                to provide Cow Level AG with important input and impetus for the
                coming growth phase. The advisory board, [...]
              </p>
            </div>
          </div>
          <p
            className="text-start mt-5"
            style={{
              border: '1px solid #ccc',
              borderLeft: 'none',
              borderRight: 'none',
            }}
          >
            April 3, 2023
          </p>
        </div>
        <div className="md:w-[60%] sm:w-[70%] xs:w-[90%] mt-10">
          <div className="md:w-[100%] xs:w-[100%] xs:block sm:flex">
            <div className="mr-[20px] sm:w-[40%] xs:w-[100%]">
              <div className="relative overflow-hidden group">
                <img className="w-full" src={card4} alt="card4" />
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
                    ADVISORY BOARD
                  </h4>
                  <p className="text-sm font-[300]">News</p>
                </div>
              </div>
            </div>
            <div className="mr-[10px] sm:w-[60%] xs:w-[100%] xs:mt-10 sm:mt-0">
              <h3 className="text-lg">ANNUAL REPORT</h3>
              <p className="text-sm mt-7">
                Dear all, Our annual report is out. We are happy to share it
                with you! You can read what 21/22 was all about, you get all the
                facts and numbers and we tell you what’s coming up next. “We
                would like to take this opportunity to thank all those [...]
              </p>
            </div>
          </div>
          <p
            className="text-start mt-5 mb-10"
            style={{
              border: '1px solid #ccc',
              borderLeft: 'none',
              borderRight: 'none',
            }}
          >
            March 15, 2023
          </p>
        </div>
      </div>
      {state?.destination?.index === 4 && state?.direction === 'down' && (
        <div
          className={`absolute top-0 w-screen h-full bg-[#FFFBE8] flex flex-col justify-center items-center text-white overflow-x-hidden
      ${
        state?.destination?.index === 4 && state?.direction === 'down'
          ? 'fadeout'
          : 'z-[1]'
      }
      `}
        >
          <h3 className="text-3xl font-[500]">MOOS</h3>
          <img src={whitethan} alt="whitethan" />
          <h4 className="text-base font-[500] mt-4 text-center">
            STUFF WE SAY AND DO
          </h4>
          <p className="xs:w-[90%] sm:w-[40%] text-center text-base mt-3">
            Steak out this section to learn all the latest goings on at Cow
            Level. And don’t forget to sign up for our Mooseletter.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Slide5;
