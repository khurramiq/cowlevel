import mailBox from '../../../assets/images/mailBox.gif';

const SignupFormInner = ({ state, fade, zIndex, destination, direction }) => {
  return (
    <div
      className={`absolute top-0 w-screen h-full
          ${
            state?.destination?.index === destination &&
            state?.direction === direction
              ? fade
              : zIndex
          }
          ${
            state?.destination?.index === 9 && state?.direction === 'down'
              ? 'hidden'
              : ''
          }
          `}
      style={{ background: 'rgb(249, 59, 63)' }}
    >
      <h1 className="text-center text-white sm:text-4xl xs:text-xs xs:w-[90%] m-auto font-bold sm:pt-20 xs:pt-[70px]">
        GET THE ONLY COW THAT WILL
        <br />
        FIT IN YOUR INBOX.
        <br />
        SUBSCRIBE TO OUR MOOSLETTER.
      </h1>
      <p className="text-center sm:text-base xs:text-xs text-black sm:mt-5 xs:mt-1 xs:w-[90%] xs:mx-auto">
        (It’s like a regular newsletter, but with more cow jokes.)
      </p>
      <div className="flex justify-center sm:flex-row xs:flex-col xs:w-[90%] xs:mx-auto sm:mt-5 xs:mt-1">
        <input
          type="text"
          className="bg-white sm:h-[45px] xs:h-[20px] sm:w-[130px] xs:mt-2 xs:w-[98%] outline-none sm:pl-[1em] xs:pl-1 pt-0 pb-0 text-black"
          placeholder="First Name *"
        />
        <input
          type="text"
          className="bg-white sm:h-[45px] xs:h-[20px] sm:w-[130px] xs:mt-2 xs:w-[98%] outline-none sm:pl-[1em] xs:pl-1 pt-0 pb-0 text-black sm:ml-2 xs:ml-0"
          placeholder="Last Name *"
        />
        <input
          type="email"
          className="bg-white sm:h-[45px] xs:h-[20px] sm:w-[200px] xs:w-[98%] xs:mt-2 outline-none sm:pl-[1em] xs:pl-1 pt-0 pb-0 text-black sm:ml-2 xs:ml-0"
          placeholder="Email *"
        />
        <button
          type="submit"
          className="sm:h-[45px] xs:h-[25px] sm:w-[130px] xs:w-[98%] sm:ml-2 xs:mt-2 text-white bg-black border border-[#c9ac78] border-1"
        >
          SIGN UP
        </button>
      </div>
      <p className="text-black sm:mt-10 xs:mt-1 text-center sm:text-base xs:text-xs xs:z-[5]">
        We value your privacy.
      </p>
      <img
        className="absolute right-[12%] sm:bottom-[5px] xs:bottom-[0px] wading-image xs:w-[100px] sm:w-[200px]"
        src={mailBox}
        alt="mailBox"
      />
    </div>
  );
};

export default SignupFormInner;