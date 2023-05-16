import ReactFullpage from '@fullpage/react-fullpage';
import HandOpen from './components/HandOpen';
import HandClose from './components/HandClose';
import ElevatorScene from './components/ElevatorScene';
import Stefanavatar from './components/Stefanavatar';
import SignupForm from './components/SignupForm';
import cowskinpattern from '../../assets/images/cowskinpattern.png';
import CowLevelSlide1 from './components/CowLevelSlide1';
import StefanBoris1 from './components/StefanBoris1';
import StefanBoris2 from './components/StefanBoris2';
import CowLevelHeader from '../../components/CowLevelHeader';

const Home = () => {
  return (
    <>
      <ReactFullpage
        // navigation
        scrollingSpeed="1"
        animateAnchor={true}
        keyboardScrolling={true}
        dropEffect={true}
        easing="easeInOutCubic"
        onLeave={(origin, destination, direction) => {
          console.log('onLeave event', { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log('state', state);
          return (
            <div>
              <CowLevelSlide1 />
              <StefanBoris1 />
              <StefanBoris2 />
              <ElevatorScene />
              <Stefanavatar />
              <HandOpen />
              <HandClose />
              <div className="section relative">
                <CowLevelHeader />
                <img
                  className="w-full h-full"
                  src={cowskinpattern}
                  alt="cowskinpattern"
                />
              </div>
              <div className="section relative bg-[#F4423F]">
                <CowLevelHeader />
              </div>
              <SignupForm />
            </div>
          );
        }}
      />
    </>
  );
};

export default Home;
