import React, { useState } from 'react';
import cowheaderlogo from '../../../assets/images/fipme/white_cow.png';
import whitethan from '../../../assets/images/invest/whitethan.png';
import solutions_page_icon1 from '../../../assets/images/solutions/solutions_page_icon1.png';
import solutions_page_icon2 from '../../../assets/images/solutions/solutions_page_icon2.png';
import solutions_page_icon3 from '../../../assets/images/solutions/solutions_page_icon3.png';
import solutions_page_icon4 from '../../../assets/images/solutions/solutions_page_icon4.png';
import solutions_page_icon5 from '../../../assets/images/solutions/solutions_page_icon5.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';
import Footer from './Footer';

const Slide5 = ({ open, setOpen, fullpageApi, state }) => {
  const [cow1, setCow1] = useState(true);
  const [cow2, setCow2] = useState(true);
  const [cow3, setCow3] = useState(true);
  const [cow4, setCow4] = useState(true);
  const [cow5, setCow5] = useState(true);
  //
  return (
    <div className="section relative  overflow-x-hidden scrollbar-hidden">
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
        className={`absolute top-0 w-screen h-full flex flex-col justify-center items-center text-white overflow-x-hidden
        ${
          state?.destination?.index === 4 && state?.direction === 'down'
            ? 'fadein'
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
              <div
                className="relative"
                onMouseEnter={() => setCow1(false)}
                onMouseLeave={() => setCow1(true)}
              >
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon1}
                  alt="solutions_page_icon1"
                />
                {!cow1 && (
                  <div className="absolute top-[-130px] left-[10px] md:left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#FFFBE8] fadein z-[1]">
                    <div className="arrow xs:left-[10%] xs:translate-x-[-10%] md:left-[50%] md:translate-x-[-50%] bottom-[-10px] border-t-[10px] border-t-[#FFFBE8]" />
                    <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                      PRICING
                    </h3>
                    <p className="text-black font-normal p-2 leading-tight">
                      FIPME helps determine fair market pricing through Initial
                      item Offerings (IIO) of new in-game items.
                    </p>
                  </div>
                )}
              </div>
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
              <div
                className="relative"
                onMouseEnter={() => setCow2(false)}
                onMouseLeave={() => setCow2(true)}
              >
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon2}
                  alt="solutions_page_icon2"
                />
                {!cow2 && (
                  <div className="absolute text-start top-[-200px] left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#FFFBE8] fadein z-[1]">
                    <div className="arrow xs:left-[50%] md:translate-x-[-50%] md:left-[50%] sm:translate-x-[-50%] bottom-[-10px] border-t-[10px] border-t-[#FFFBE8]" />
                    <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                      COMPLIANCE
                    </h3>
                    <p className="text-black font-normal p-2 leading-tight">
                      FIPME introduces industry-standard regulatory compliance
                      which makes it easy to meet reporting requirements, avoid
                      penalties & fines and reduce the number of defrauded gamer
                      complaints.
                    </p>
                  </div>
                )}
              </div>
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
              <div
                className="relative"
                onMouseEnter={() => setCow3(false)}
                onMouseLeave={() => setCow3(true)}
              >
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon3}
                  alt="solutions_page_icon3"
                />
                {!cow3 && (
                  <div className="absolute text-start top-[-160px] xs:left-[-160px] md:left-[-70px] w-[300px] border border-solid border-white rounded-[10px] bg-[#FFFBE8] fadein z-[1]">
                    <div className="arrow xs:left-[80%] xs:translate-x-[-80%] md:left-[50%] md:translate-x-[-50%] bottom-[-10px] border-t-[10px] border-t-[#FFFBE8]" />
                    <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                      GAMER EXPERIENCE
                    </h3>
                    <p className="text-black font-normal p-2 leading-tight">
                      Gamers stay more engaged and earn income using FIPME,
                      while item values are preserved and appreciate through the
                      elimination of the grey market.
                    </p>
                  </div>
                )}
              </div>
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
              <h4 className="font-[600] mt-5 text-center">GAMER EXPERIENCE</h4>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="sm:mr-[100px] xs:mr-0">
              <div
                className="relative"
                onMouseEnter={() => setCow4(false)}
                onMouseLeave={() => setCow4(true)}
              >
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon4}
                  alt="solutions_page_icon4"
                />
                {!cow4 && (
                  <div className="absolute text-start left-[0px] top-[-220px] md:left-[-90px] w-[300px] border border-solid border-white rounded-[10px] bg-[#FFFBE8] fadein z-[1]">
                    <div className="arrow xs:left-[20%] xs:translate-x-[-20%] md:left-[50%] md:translate-x-[-50%] bottom-[-10px] border-t-[10px] border-t-[#FFFBE8]" />
                    <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                      IN-GAME WEALTH
                    </h3>
                    <p className="text-black font-normal p-2 leading-tight">
                      Gamers accumulate in-game assets, which are priced on the
                      exchange place and registered by FIPME using international
                      Securities Identification Numbers (ISIN) and recorded in
                      customer statements, just like shares in companies.
                    </p>
                  </div>
                )}
              </div>
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
              <div
                className="relative"
                onMouseEnter={() => setCow5(false)}
                onMouseLeave={() => setCow5(true)}
              >
                <img
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                  }}
                  src={solutions_page_icon5}
                  alt="solutions_page_icon5"
                />
                {!cow5 && (
                  <div className="absolute text-start top-[-160px] left-[-100px] md:left-[-80px] w-[300px] border border-solid border-white rounded-[10px] bg-[#FFFBE8] fadein z-[1]">
                    <div className="arrow xs:left-[60%] xs:translate-x-[-60%] md:left-[50%] md:translate-x-[-50%] bottom-[-10px] border-t-[10px] border-t-[#FFFBE8]" />
                    <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                      ADDITIONAL REVENUE
                    </h3>
                    <p className="text-black font-normal p-2 leading-tight">
                      Unlike the grey market, an official secondary market
                      ensures publishers receive revenue from aftermarket
                      transactions at FIPME.
                    </p>
                  </div>
                )}
              </div>
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
      {state?.destination?.index === 4 && state?.direction === 'down' && (
        <div
          className={`absolute top-0 w-screen h-full bg-[#3D6FB2] flex flex-col justify-center items-center text-white overflow-x-hidden
      ${
        state?.destination?.index === 4 && state?.direction === 'down'
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
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Slide5;
