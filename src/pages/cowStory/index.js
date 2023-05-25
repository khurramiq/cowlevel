import ReactFullpage from '@fullpage/react-fullpage';
import { useState } from 'react';

const CowStory = () => {
  const [startCounter, setStartCounter] = useState(false);
  const [open, setOpen] = useState(false);
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
        // console.log('state', state);
        return <div className="relative">Cow Story</div>;
      }}
    />
  );
};

export default CowStory;
