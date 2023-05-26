import ReactFullpage from '@fullpage/react-fullpage';
import HandOpen from './components/HandOpen';
import HandClose from './components/HandClose';
import ElevatorScene from './components/ElevatorScene';
import Stefanavatar from './components/Stefanavatar';
import SignupForm from './components/SignupForm';
import cowskinpattern from '../../assets/images/cowskinpattern.png';
import mcows from '../../assets/images/mcows.png';
import CowLevelSlide1 from './components/CowLevelSlide1';
import StefanBoris1 from './components/StefanBoris1';
import StefanBoris2 from './components/StefanBoris2';
import CowLevelHeader from '../../components/CowLevelHeader';
import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import CowLevelSlide0 from './components/CowLevelSlide0';
import './styles.css';

const Home = () => {
  const [startCounter, setStartCounter] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <ReactFullpage
        // navigation
        scrollingSpeed="1"
        animateAnchor={true}
        keyboardScrolling={true}
        dropEffect={true}
        easing="easeInOutCubic"
        afterLoad={(origin, destination, direction) => {
          // console.log('afterLoad event', { origin, destination, direction });
        }}
        onLeave={(origin, destination, direction) => {
          console.log('onLeave event', { origin, destination, direction });
          if (destination.index === 2 || destination.index === 4) {
            setStartCounter(true);
          } else {
            setStartCounter(false);
          }
        }}
        render={({ state, fullpageApi }) => {
          // console.log('state', state);
          return (
            <div className="relative">
              <CowLevelSlide0 open={open} setOpen={setOpen} />
              <CowLevelSlide1 open={open} setOpen={setOpen} />
              <StefanBoris1 open={open} setOpen={setOpen} />
              <StefanBoris2
                fullpageApi={fullpageApi}
                startCounter={startCounter}
                open={open}
                setOpen={setOpen}
              />
              <ElevatorScene
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
              />
              <Stefanavatar
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
              />
              <HandOpen
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
              />
              <HandClose
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
              />
              <div className="section relative">
                <CowLevelHeader open={open} setOpen={setOpen} />
                <div className="absolute top-0 w-screen h-full overflow-hidden">
                  <img
                    className="h-full w-full sm:block xs:hidden"
                    src={cowskinpattern}
                    alt="cowskinpattern"
                  />
                  <img
                    className="h-full w-full xs:block sm:hidden"
                    src={mcows}
                    alt="cowskinpattern"
                  />
                  <button
                    className="scrollToTopButton"
                    onClick={() => {
                      fullpageApi.moveTo(1);
                    }}
                  >
                    <FaAngleUp size="large" />
                  </button>
                </div>
              </div>
              <div className="section relative bg-[#F4423F]">
                <CowLevelHeader open={open} setOpen={setOpen} />
                <div className="absolute top-0 w-screen h-full overflow-hidden">
                  <button
                    className="scrollToTopButton"
                    onClick={() => {
                      fullpageApi.moveTo(1);
                    }}
                  >
                    <FaAngleUp size="large" />
                  </button>
                </div>
              </div>
              <SignupForm
                fullpageApi={fullpageApi}
                open={open}
                setOpen={setOpen}
              />
              <button
                className="scrollToTopButton"
                onClick={() => {
                  fullpageApi.moveTo(1);
                }}
              >
                {/* <i className="fal fa-angle-up text-4x"></i> */}
                <FaAngleUp size="large" />
              </button>
            </div>
          );
        }}
      />
    </>
  );
};

export default Home;
