import React from 'react';
import cowheaderlogo from '../../../assets/images/fipme/white_cow.png';
import whitethan from '../../../assets/images/invest/whitethan.png';
import slideMobile2 from '../../../assets/images/solutions/solution_mobile2.png';
import slide2 from '../../../assets/images/solutions/solutionSlide2.png';
import solutions_page_icon1 from '../../../assets/images/solutions/solutions_page_icon1.png';
import solutions_page_icon2 from '../../../assets/images/solutions/solutions_page_icon2.png';
import solutions_page_icon3 from '../../../assets/images/solutions/solutions_page_icon3.png';
import solutions_page_icon4 from '../../../assets/images/solutions/solutions_page_icon4.png';
import solutions_page_icon5 from '../../../assets/images/solutions/solutions_page_icon5.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const Slide4 = ({ open, setOpen, fullpageApi, state }) => {
  return (
    <div className="section relative  bg-[#3D6FB2] overflow-x-hidden scrollbar-hidden">
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
            backgroundColor: 'rgb(61, 111, 178)',
            backgroundImage:
              'linear-gradient(190deg, rgb(61, 111, 178) 55%, rgb(50, 93, 150) 45%)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            borderWidth: '0px',
            borderColor: 'rgb(226, 226, 226)',
            borderStyle: 'solid',
            height: `calc(100vh - 0px)`,
          }}
        >
          <h3 className="text-3xl font-[500] text-center">MARKET ADVANTAGES</h3>
          <img src={whitethan} alt="whitethan" />
          <h4 className="text-base font-[500] mt-4 text-center">
            OPPORTUNITIES FOR PUBLISHERS AND PARTNERS
          </h4>
          <div>
            <div className="flex mt-10">
              <div className="sm:mr-[100px] xs:mr-0">
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon1}
                  alt="solutions_page_icon1"
                />
                <div
                  style={{
                    maxWidth: '50px',
                    margin: 'auto',
                    borderBottom: 'solid 5px',
                    paddingBottom: '10px',
                    borderImage:
                      'linear-gradient(to right, rgba(108, 219, 141, 0) 25%, rgb(255, 255, 255) 25%, rgb(255, 255, 255) 75%, rgba(108, 219, 185, 141, 0) 75%)',
                    borderImageSlice: '1',
                  }}
                />
                <h4 className="font-[600] mt-5 text-center">PRICE FINDING</h4>
              </div>
              <div className="sm:mr-[100px] xs:mr-0 text-center mt-10">
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon2}
                  alt="solutions_page_icon2"
                />
                <div
                  style={{
                    maxWidth: '50px',
                    margin: 'auto',
                    borderBottom: 'solid 5px',
                    paddingBottom: '10px',
                    borderImage:
                      'linear-gradient(to right, rgba(108, 219, 141, 0) 25%, rgb(255, 255, 255) 25%, rgb(255, 255, 255) 75%, rgba(108, 219, 185, 141, 0) 75%)',
                    borderImageSlice: '1',
                  }}
                />
                <h4 className="font-[600] mt-5 text-center">COMPLIANCE</h4>
              </div>
              <div className="mt-20">
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon3}
                  alt="solutions_page_icon3"
                />
                <div
                  style={{
                    maxWidth: '50px',
                    margin: 'auto',
                    borderBottom: 'solid 5px',
                    paddingBottom: '10px',
                    borderImage:
                      'linear-gradient(to right, rgba(108, 219, 141, 0) 25%, rgb(255, 255, 255) 25%, rgb(255, 255, 255) 75%, rgba(108, 219, 185, 141, 0) 75%)',
                    borderImageSlice: '1',
                  }}
                />
                <h4 className="font-[600] mt-5 text-center">
                  GAMER EXPERIENCE
                </h4>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="sm:mr-[100px] xs:mr-0">
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon4}
                  alt="solutions_page_icon4"
                />
                <div
                  style={{
                    maxWidth: '50px',
                    margin: 'auto',
                    borderBottom: 'solid 5px',
                    paddingBottom: '10px',
                    borderImage:
                      'linear-gradient(to right, rgba(108, 219, 141, 0) 25%, rgb(255, 255, 255) 25%, rgb(255, 255, 255) 75%, rgba(108, 219, 185, 141, 0) 75%)',
                    borderImageSlice: '1',
                  }}
                />
                <h4 className="font-[600] mt-5 text-center">IN-GAME WEALTH</h4>
              </div>
              <div className="mt-10">
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon5}
                  alt="solutions_page_icon5"
                />
                <div
                  style={{
                    maxWidth: '50px',
                    margin: 'auto',
                    borderBottom: 'solid 5px',
                    paddingBottom: '10px',
                    borderImage:
                      'linear-gradient(to right, rgba(108, 219, 141, 0) 25%, rgb(255, 255, 255) 25%, rgb(255, 255, 255) 75%, rgba(108, 219, 185, 141, 0) 75%)',
                    borderImageSlice: '1',
                  }}
                />
                <h4 className="font-[600] mt-5 text-center">
                  ADDITIONAL REVENUE
                </h4>
              </div>
            </div>
          </div>
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
      >
        <h3 className="text-3xl font-[500]">SOLUTIONS</h3>
        <img src={whitethan} alt="whitethan" />
        <h4 className="text-base font-[500] mt-4 text-center">
          FOR GAME PUBLISHERS AND PARTNERS
        </h4>
        <p className="xs:w-[90%] sm:w-[40%] text-center text-base mt-3">
          As FiPME grows, gamers will transition away from grey markets and into
          a trusted environment where they can safely buy and exchange virtual
          assets at a fair price and in real-time. This will allow game
          publishers to become the “central bank” for their own in-game items,
          which will enhance their primary market and prevent abuse in the
          secondary market. Contact us for more information.
        </p>
      </div>
    </div>
  );
};

export default Slide4;
