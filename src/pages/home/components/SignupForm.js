import { FaBars } from 'react-icons/fa';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import Footer from '../../../components/footer';
import MobileLinks from '../../../components/MobileLinks';
import SignupFormInner from './SignupFormInner';
const SignupForm = ({ open, setOpen, state }) => {
  return (
    <>
      <div className="section w-screen relative overflow-x-hidden scrollbar-hidden">
        <div className="z-[100] sticky left-0 right-0 top-0">
          <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
            <img
              className="sm:w-[60px] xs:w-[50px]"
              src={cowheaderlogo}
              alt="cowheaderlogo"
            />
            <div className="relative">
              {open ? (
                <i
                  className="far fa-times text-4xl cursor-pointer rotate_animation"
                  onClick={() => setOpen(false)}
                ></i>
              ) : (
                <FaBars
                  className="sm:text-3xl xs:text-lg cursor-pointer rotate-animationR"
                  onClick={() => setOpen(true)}
                />
              )}
              {open && <MobileLinks />}
            </div>
          </div>
        </div>
        <SignupFormInner
          state={state}
          fade={'fadein'}
          zIndex={'z-[1]'}
          destination={10}
          direction={'down'}
        />
        <div
          className={`absolute top-0 h-full w-full bg-[#F4423F] z-[1] 
            ${
              state?.destination?.index === 10 && state?.direction === 'down'
                ? 'fadeout'
                : 'hidden'
            }            
            `}
        />
        <Footer />
      </div>
    </>
  );
};

export default SignupForm;
