import { FaBars } from 'react-icons/fa';
import mailBox from '../../../assets/images/mailBox.gif';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import Footer from '../../../components/footer';
import { useState } from 'react';
const SignupForm = ({ fullpageApi }) => {
  const [showToTop, setShowToTop] = useState(false);
  return (
    <>
      <div
        className="section h-screen w-screen relative overflow-x-hidden"
        style={{ background: 'rgb(249, 59, 63)' }}
      >
        <div className="z-[100] sticky left-0 right-0 top-0">
          <div className="w-[1200px] mx-auto p-5 flex justify-between items-center">
            <img
              className="w-[60px] h-[40px]"
              src={cowheaderlogo}
              alt="cowheaderlogo"
            />
            <FaBars className="text-3xl mr-5" />
          </div>
        </div>
        {/* {showToTop && (
          <button
            className="scrollToTopButton"
            onMouseEnter={() => setShowToTop(true)}
            onClick={() => {
              fullpageApi.moveTo(1);
            }}
          >
            <i className="fal fa-angle-up text-4xl"></i>
          </button>
        )} */}
        <div
          className="absolute top-0 w-screen h-screen"
          onMouseEnter={() => setShowToTop(true)}
          onMouseLeave={() => setShowToTop(false)}
        >
          <h1 className="text-center text-white text-4xl font-bold pt-20">
            GET THE ONLY COW THAT WILL
            <br />
            FIT IN YOUR INBOX.
            <br />
            SUBSCRIBE TO OUR MOOSLETTER.
          </h1>
          <p className="text-center text-black mt-5">
            (It’s like a regular newsletter, but with more cow jokes.)
          </p>
          <div className="flex justify-center mt-5">
            <input
              type="text"
              className="bg-white h-[45px] w-[130px] outline-none pl-[1em] pt-0 pb-0 text-black"
              placeholder="First Name *"
            />
            <input
              type="text"
              className="bg-white h-[45px] w-[130px] outline-none pl-[1em] pt-0 pb-0 text-black ml-2"
              placeholder="Last Name *"
            />
            <input
              type="email"
              className="bg-white h-[45px] outline-none pl-[1em] pt-0 pb-0 text-black ml-2"
              placeholder="Email *"
            />
            <button
              type="submit"
              className="h-[45px] w-[130px] ml-2 text-white bg-black border border-[#c9ac78] border-1"
            >
              SIGN UP
            </button>
          </div>
          <p className="text-black mt-10 text-center">We value your privacy.</p>
          <img
            className="absolute right-[12%] bottom-[5px] wading-image"
            src={mailBox}
            alt="mailBox"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignupForm;
