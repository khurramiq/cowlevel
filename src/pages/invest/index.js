import ReactFullpage from '@fullpage/react-fullpage';
import { useRef, useState } from 'react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import './styles.css';

const Invest = () => {
  const [open, setOpen] = useState(false);
  const elementRef = useRef(null);
  const scrollToView = () => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ReactFullpage
      // navigation
      scrollingSpeed="1"
      animateAnchor={true}
      keyboardScrolling={true}
      dropEffect={true}
      easing="easeInOutCubic"
      onLeave={(origin, destination, direction) => {
        // console.log('onLeave event', { origin, destination, direction });
        // if (destination.index === 2 || destination.index === 4) {
        //   setStartCounter(true);
        // } else {
        //   setStartCounter(false);
        // }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <div className="relative">
            <Slide1 open={open} setOpen={setOpen} />
            <Slide2 open={open} setOpen={setOpen} state={state} />
            <Slide3 open={open} setOpen={setOpen} state={state} />
            <Slide4
              elementRef={elementRef}
              scrollToView={scrollToView}
              open={open}
              setOpen={setOpen}
            />
          </div>
        );
      }}
    />
  );
};

export default Invest;
