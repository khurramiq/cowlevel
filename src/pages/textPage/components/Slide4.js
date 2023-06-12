import React, { useEffect, useRef, useState } from 'react';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import whitethan from '../../../assets/images/invest/whitethan.png';
import investinthecowbuttonwhite from '../../../assets/images/invest/investinthecowbuttonwhite.png';
import green1 from '../../../assets/images/invest/green1.png';
import blue2 from '../../../assets/images/invest/blue2.png';
import purple3 from '../../../assets/images/invest/purple3.png';
import orange4 from '../../../assets/images/invest/orange4.png';
import yellow5 from '../../../assets/images/invest/yellow5.png';
import invest_Page_PastedGraphic6 from '../../../assets/images/invest/invest_Page_PastedGraphic6.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';
import Footer from './Footer';

const Slide4 = ({ elementRef, open, setOpen, fullpageApi }) => {
  const [cow1, setCow1] = useState(true);
  const [cow2, setCow2] = useState(true);
  const [cow3, setCow3] = useState(true);
  const [cow4, setCow4] = useState(true);
  const [cow5, setCow5] = useState(true);
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
      <div className="w-screen flex flex-col justify-center items-center text-white overflow-x-hidden">
        <h3 className="text-2xl">INVEST</h3>
        <img src={whitethan} alt="whitethan" />
        <h4 className="text-xl mt-4">JOIN OUR INVESTOR DRIVE</h4>
        <p className="xs:w-[90%] sm:w-[50%] text-center text-base mt-3 leading-tight">
          Your investment in Cow Level will help us to provide gamers with a
          secure way to trade items at the best price and enable publishers to
          access the secondary market. FiPME receives a small commission on each
          transaction, which will help us grow our business and the value of
          your investment.
        </p>
        <img
          className="w-[120px] mt-10"
          src={investinthecowbuttonwhite}
          alt="investinthecowbuttonwhite"
        />
        <h4 className="text-xl mt-10">The first digitalized stock on SME-X</h4>
        <p className="w-[90%] text-center text-base mt-3 mb-10 leading-tight">
          Private Equity, Venture Capital, Home Office, or other{' '}
          <br className="xs:hidden sm:inline" />
          professional investors, please contact us.
        </p>
      </div>
      <div className="w-screen h-full text-white overflow-hidden">
        <div className="relative xs:h-[50%] sm:h-[35%] text-center">
          <h3 className="text-3xl pt-[80px]">INVESTMENT LEVELS</h3>
          <img className="inline-block" src={whitethan} alt="whitethan" />
          <h4 className="text-xl mt-5 font-bold">WELCOME TO THE FOLD</h4>
        </div>
        <div className="relative xs:h-[50%] sm:h-[65%] w-[120%] bg-[#325D96] origin-bottom-right rotate-[-10deg]">
          <div className="absolute flex justify-center left-[50%] sm:translate-x-[-50%] xs:translate-x-[-40%] md:top-[-56px] sm:top-[-30px] xs:top-[-15px] z-[1]">
            <div className="relative md:mr-10 sm:mr-5 xs:mr-3">
              <img
                className={`xs:w-auto sm:w-[112px] ${cow1 && 'invest_cows'}`}
                onMouseEnter={() => setCow1(false)}
                onMouseLeave={() => setCow1(true)}
                src={green1}
                alt="green1"
              />
              {!cow1 && (
                <div className="absolute top-[110px] left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#6DE226] rotate-[10deg] fadein z-[1]">
                  <div className="arrow1 top-[-10px] border-b-[10px] border-b-[#6DE226]" />
                  <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                    GREEN COW
                  </h3>
                  <p className="text-black font-normal p-2 leading-tight">
                    (10 SEARCHES) Become a Green Cow member of the cow level
                    fold and get access to our updates exclusive to investors.
                  </p>
                </div>
              )}
            </div>
            <div className="relative md:mr-10 sm:mr-5 xs:mr-3">
              <img
                className={`xs:w-auto sm:w-[112px] ${cow2 && 'invest_cows1'}`}
                onMouseEnter={() => setCow2(false)}
                onMouseLeave={() => setCow2(true)}
                src={blue2}
                alt="blue2"
              />
              {!cow2 && (
                <div className="absolute top-[110px] xs:left-[-120px] sm:left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#1667DB] rotate-[10deg] fadein">
                  <div className="arrow1 top-[-10px] border-b-[10px] border-b-[#1667DB]" />
                  <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                    RARE BLUE COW
                  </h3>
                  <p className="text-black font-normal p-2 leading-tight">
                    (100 SEARCHES) Become a Rare Blue Cow Supporter and receive
                    a personal shoutout in social media from Boris & Stefan.
                  </p>
                </div>
              )}
            </div>
            <div className="relative md:mr-10 sm:mr-5 xs:mr-3">
              <img
                className={`xs:w-auto sm:w-[112px] ${cow3 && 'invest_cows'}`}
                onMouseEnter={() => setCow3(false)}
                onMouseLeave={() => setCow3(true)}
                src={purple3}
                alt="purple3"
              />
              {!cow3 && (
                <div className="absolute top-[110px] xs:left-[-150px] sm:left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#A572E6] rotate-[10deg] fadein">
                  <div className="arrow1 top-[-10px] border-b-[10px] border-b-[#A572E6]" />
                  <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                    EPIC PURPLE COW
                  </h3>
                  <p className="text-black font-normal p-2 leading-tight">
                    Epic Purple Cow (500 SHARES) Become an Epic Purple Cow
                    Backer and receive a limited edition Cow Level Cap.
                  </p>
                </div>
              )}
            </div>
            <div className="relative md:mr-10 sm:mr-5 xs:mr-3">
              <img
                className={`xs:w-auto sm:w-[112px] ${cow4 && 'invest_cows1'}`}
                onMouseEnter={() => setCow4(false)}
                onMouseLeave={() => setCow4(true)}
                src={orange4}
                alt="orange4"
              />
              {!cow4 && (
                <div className="absolute top-[110px] xs:left-[-200px] sm:left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#C45A22] rotate-[10deg] fadein">
                  <div className="arrow1 top-[-10px] border-b-[10px] border-b-[#C45A22]" />
                  <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                    LEGENDARY ORANGE COW
                  </h3>
                  <p className="text-black font-normal p-2 leading-tight">
                    LEGENDARY ORANGE COW (1,000 SHARES) Become a Legendary
                    Orange Cow Patron and also reveive a limited edition Cow
                    Level T-Shirt.
                  </p>
                </div>
              )}
            </div>
            <div className="relative md:mr-10 sm:mr-5 xs:mr-3">
              <img
                className={`xs:w-auto sm:w-[112px] ${cow5 && 'invest_cows'}`}
                onMouseEnter={() => setCow5(false)}
                onMouseLeave={() => setCow5(true)}
                src={yellow5}
                alt="yellow5"
              />
              {!cow5 && (
                <div className="absolute top-[110px] xs:left-[-250px] sm:left-[-100px] w-[300px] border border-solid border-white rounded-[10px] bg-[#FCD04B] rotate-[10deg] fadein">
                  <div className="arrow1 top-[-10px] border-b-[10px] border-b-[#FCD04B]" />
                  <h3 className="border-b-[1px] border-solid p-2 text-black text-lg font-[500]">
                    TITAN COW
                  </h3>
                  <p className="text-black font-normal p-2 leading-tight">
                    TITAN COW (10,000 SHARES) Become a Titan Cow Patron and also
                    receive a limited edition Cow Level Cap, a limited edition
                    Cow Level and join Boris and Stefan for lunch at the next
                    annual shareholders meeting.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={elementRef}
        className="w-screen text-white flex flex-col justify-center items-center overflow-hidden bg-[#325D96]"
      >
        <div className="xs:w-[90%] sm:w-[70%] xs:block sm:flex">
          {/* <Element name="test1"></Element> */}
          <div className="xs:w-[100%] sm:w-[40%]">
            <h2 className="text-2xl">
              YOU CAN INVEST IN THE COW <br className="xs:hidden sm:inline" />{' '}
              <span className="ml-5">RIGHT HERE, RIGHT NOW.</span>
            </h2>
            <ol className="text-lg leading-tight mt-3 pl-5">
              <li>1. DECIDE HOW MUCH TO INVEST</li>
              <li>
                2. ENTER YOUR CONTACT DETAILS AND{' '}
                <br className="xs:hidden sm:inline" /> DAURA USERNAME*
              </li>
              <li>
                3. WE SEND YOU THE INVOICE FOR{' '}
                <br className="xs:hidden sm:inline" /> PAYMENT
              </li>
              <li>4. TRANSFER THE PAYMENT</li>
            </ol>
          </div>
          <div className="xs:w-[100%] xs:mt-5 sm:mt-0 sm:w-[60%]">
            <div className="w-[100%] m-auto">
              <div className="xs:block sm:flex justify-between">
                <input
                  className="text-[#9ea0a4] xs:w-full sm:w-[49%] p-1 pl-2 outline-none"
                  type="text"
                  placeholder="FIRST NAME*"
                />
                <input
                  className="text-[#9ea0a4] xs:w-full xs:mt-3 sm:mt-0 sm:w-[49%] p-1 pl-2 outline-none"
                  type="text"
                  placeholder="LAST NAME*"
                />
              </div>
              <div className="mt-3">
                <input
                  className="text-[#9ea0a4] w-full p-1 pl-2 outline-none"
                  type="text"
                  placeholder="EMAIL*"
                />
              </div>
              <div className="mt-3">
                <p>Invest Amount</p>
                <div className="xs:block sm:flex justify-between">
                  <select className="text-[#9ea0a4] xs:w-full sm:w-[49%] p-1 outline-none">
                    <option value="">--Please Choose an Option--</option>
                  </select>
                  <input
                    className="text-[#9ea0a4] xs:w-full xs:mt-3 sm:mt-0 sm:w-[49%] p-1 pl-2 outline-none"
                    type="text"
                    placeholder="ANY AMOUT"
                  />
                </div>
              </div>
              <div className="mt-3">
                <input
                  className="text-[#9ea0a4] w-full p-1 pl-2 outline-none"
                  type="text"
                  placeholder="DAURA USERNAME*"
                />
              </div>
              <p className="mt-3 text-center">
                * If you don’t have a Daura Username, please register at{' '}
                <span className="text-[#EC3739]">Daura.ch </span>
                and return to this form.
              </p>
              <div className="text-center mt-3">
                <button className="bg-[#ec3739] p-3 w-[120px] rounded-[5px]">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:w-[90%] sm:w-[70%] xs:mt-2 sm:mt-10">
          <p className="text-black text-center text-sm font-[600]">
            Shares in Cow Level AG are stored on a distributed blockchain share
            ledger (listed on the Berner marketplace SME-X – ISIN: CH1138775247)
            listed on a register run by Daura.ch and powered by Swisscom and
            SIX. This enables our investors to buy and conveniently transfer
            shares at the click of a button.{' '}
          </p>
        </div>
      </div>
      <div className="w-screen h-full text-white flex flex-col justify-center items-center overflow-hidden bg-[#325D96]">
        <div className="relative w-full h-full">
          <div className="absolute z-[1] xs:w-[90%] sm:w-[50%] md:w-[40%] top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img
              src={invest_Page_PastedGraphic6}
              alt="invest_Page_PastedGraphic6"
            />
          </div>
          <div className="xs:h-[50%] sm:h-[40%] text-center">
            <h3 className="text-3xl pt-[60px]">PRIME STATS</h3>
            <img className="inline-block" src={whitethan} alt="whitethan" />
          </div>
          <div className="xs:h-[50%] sm:h-[60%] w-[120%] translate-x-[-15%] bg-[#3D6FB2] origin-bottom-left rotate-[10deg]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Slide4;
