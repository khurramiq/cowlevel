import { useState } from 'react';
import mailBox from '../../../assets/images/mailBox.gif';
import api from '../../../utils/api';

const SignupFormInner = ({ state, fade, zIndex, destination, direction }) => {
  const [submit, setSubmit] = useState(false);
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const handleSignupFormFields = (e) => {
    setSignupForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const { firstName, lastName, email } = signupForm;
    if (firstName !== '' && lastName !== '' && regex.test(email)) {
      try {
        var res = await api.post('/signupForm/create', signupForm);
        if (res.data.savedSignupForm && !res.data.error) {
          console.log('res.data.savedSignupForm', res.data.savedSignupForm);
          setSignupForm({
            firstName: '',
            lastName: '',
            email: '',
          });
          setSubmit(true);
        } else {
          console.log('res.data.error', res.data.error);
        }
      } catch (e) {
        console.log('e.message', e.message);
      }
    }
  };
  return (
    <div
      className={`absolute top-0 w-screen h-full
          ${
            state?.destination?.index === destination &&
            state?.direction === direction
              ? fade
              : ''
          }
          ${
            state?.destination?.index === 9 && state?.direction === 'down'
              ? 'hidden'
              : ''
          }
          `}
      style={{ background: 'rgb(249, 59, 63)' }}
    >
      <h1 className="text-center text-white md:text-4xl sm:text-sm xs:text-xs xs:w-[90%] m-auto font-bold md:pt-20 xs:pt-[70px] sm:pt-2">
        GET THE ONLY COW THAT WILL
        <br />
        FIT IN YOUR INBOX.
        <br />
        SUBSCRIBE TO OUR MOOSLETTER.
      </h1>
      <p className="text-center md:text-base sm:text-sm xs:text-xs text-black md:mt-5 sm:mt-2 xs:mt-1 xs:w-[90%] xs:mx-auto">
        (It’s like a regular newsletter, but with more cow jokes.)
      </p>
      <form onSubmit={(e) => handleSubmit(e)} style={{ zIndex: 100 }}>
        <div className="flex justify-center sm:flex-row xs:flex-col xs:w-[90%] xs:mx-auto md:mt-5 sm:mt-2 xs:mt-1">
          <input
            type="text"
            name="firstName"
            value={signupForm.firstName}
            onChange={(e) => handleSignupFormFields(e)}
            className="bg-white md:h-[45px] sm:h-[30px] xs:h-[20px] sm:w-[130px] xs:mt-2 xs:w-[98%] outline-none sm:pl-[1em] xs:pl-1 pt-0 pb-0 text-black"
            placeholder="First Name *"
            required
          />
          <input
            type="text"
            name="lastName"
            value={signupForm.lastName}
            onChange={(e) => handleSignupFormFields(e)}
            className="bg-white md:h-[45px] sm:h-[30px] xs:h-[20px] sm:w-[130px] xs:mt-2 xs:w-[98%] outline-none sm:pl-[1em] xs:pl-1 pt-0 pb-0 text-black sm:ml-2 xs:ml-0"
            placeholder="Last Name *"
            required
          />
          <input
            type="email"
            name="email"
            value={signupForm.email}
            onChange={(e) => handleSignupFormFields(e)}
            className="bg-white md:h-[45px] sm:h-[30px] xs:h-[20px] sm:w-[200px] xs:w-[98%] xs:mt-2 outline-none sm:pl-[1em] xs:pl-1 pt-0 pb-0 text-black sm:ml-2 xs:ml-0"
            placeholder="Email *"
            required
          />
          <button
            type="submit"
            className="md:h-[45px] sm:h-[30px] xs:h-[25px] sm:w-[130px] xs:w-[98%] sm:ml-2 xs:mt-2 text-white bg-black border border-[#c9ac78] border-1"
          >
            SIGN UP
          </button>
        </div>
      </form>
      {/* Thanks for subscribing! We're udderly excited to have you join our mailing list. */}
      {submit && (
        <div className="relative border border-white xs:w-[90%] m-auto md:w-[47%] text-white p-[30px]">
          <div
            className="flex justify-center items-center border border-white border-t-0 border-r-0 w-[30px] h-[30px] absolute right-0 top-0 text-[24px] cursor-pointer"
            onClick={() => setSubmit(false)}
          >
            ×
          </div>
          <p className="text-center">
            <i class="fa-lg fa fa-check-circle" aria-hidden="true"></i>&nbsp;
            Thanks for subscribing! We're udderly excited to have you join our
            mailing list.
          </p>
        </div>
      )}
      <p className="text-black md:mt-10 sm:mt-3 xs:mt-1 text-center sm:text-base xs:text-xs xs:z-[5]">
        We value your privacy.
      </p>
      <img
        className="absolute right-[12%] sm:bottom-[5px] xs:bottom-[0px] wading-image xs:w-[100px] md:w-[200px]"
        style={{ zIndex: -1 }}
        src={mailBox}
        alt="mailBox"
      />
    </div>
  );
};

export default SignupFormInner;
