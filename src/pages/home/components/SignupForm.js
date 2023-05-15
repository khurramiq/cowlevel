import mailBox from '../../../assets/images/mailBox.gif';
import Footer from '../../../components/footer';
const SignupForm = () => {
  return (
    <>
      <div className="section relative" style={{ background: '#F4423F' }}>
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
    </>
  );
};

export default SignupForm;
