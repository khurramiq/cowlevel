import { FaBars } from 'react-icons/fa';
import mailBox from '../../../assets/images/mailBox.gif';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import Footer from '../../../components/footer';
const SignupForm = ({ fullpageApi }) => {
  return (
    <>
      <div
        className="section h-screen w-screen relative overflow-x-hidden"
        // style={{ background: 'rgb(249, 59, 63)' }}
      >
        <div className="z-[100] sticky left-0 right-0 top-0">
          <div className="max-w-[1200px] mx-auto p-5 flex justify-between items-center">
            <img
              className="w-[60px] h-[40px]"
              src={cowheaderlogo}
              alt="cowheaderlogo"
            />
            <FaBars className="text-3xl" />
          </div>
        </div>
        <div
          className="absolute top-0 w-screen h-screen"
          style={{ background: 'rgb(249, 59, 63)' }}
        >
          <h1 className="text-center text-white sm:text-4xl xs:text-lg font-bold sm:pt-20 xs:pt-[70px]">
            GET THE ONLY COW THAT WILL
            <br />
            FIT IN YOUR INBOX.
            <br />
            SUBSCRIBE TO OUR MOOSLETTER.
          </h1>
          <p className="text-center text-black mt-5 xs:w-[80%] xs:mx-auto">
            (It’s like a regular newsletter, but with more cow jokes.)
          </p>
          <div className="flex justify-center sm:flex-row xs:flex-col xs:mt-5 xs:w-[90%] xs:mx-auto mt-5">
            <input
              type="text"
              className="bg-white sm:h-[45px] xs:h-[30px] sm:w-[130px] xs:mt-5 xs:w-[100%] outline-none pl-[1em] pt-0 pb-0 text-black"
              placeholder="First Name *"
            />
            <input
              type="text"
              className="bg-white sm:h-[45px] xs:h-[30px] sm:w-[130px] xs:mt-5 xs:w-[100%] outline-none pl-[1em] pt-0 pb-0 text-black sm:ml-2"
              placeholder="Last Name *"
            />
            <input
              type="email"
              className="bg-white sm:h-[45px] xs:h-[30px] sm:w-[200px] xs:w-[100%] xs:mt-5 outline-none pl-[1em] pt-0 pb-0 text-black sm:ml-2"
              placeholder="Email *"
            />
            <button
              type="submit"
              className="sm:h-[45px] xs:h-[30px] sm:w-[130px] xs:w-full sm:ml-2 xs:mt-5 text-white bg-black border border-[#c9ac78] border-1"
            >
              SIGN UP
            </button>
          </div>
          <p className="text-black mt-10 text-center xs:z-[5]">
            We value your privacy.
          </p>
          <img
            className="absolute right-[12%] sm:bottom-[5px] xs:bottom-[50px] wading-image xs:w-[100px] sm:w-[200px]"
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
