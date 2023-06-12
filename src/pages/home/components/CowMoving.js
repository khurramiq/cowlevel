import cowskinpattern from '../../../assets/images/cowskinpattern.png';
import mcows from '../../../assets/images/mcows.png';
import CowMovingInner from './CowMovingInner';

const CowMoving = ({ state }) => {
  return (
    <div className="absolute top-[100%] w-screen h-full overflow-hidden">
      <div className="relative w-full h-full flex justify-center">
        <CowMovingInner
          state={state}
          destination={7}
          direction={'up'}
          zIndex="z-[1]"
          fade="fadein"
        />
        {state?.destination?.index === 7 && state?.direction === 'up' && (
          <img
            className={`absolute top-0 h-full w-full sm:hidden xs:block ${
              state?.destination?.index === 7 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }`}
            src={mcows}
            alt="mcows"
          />
        )}
        <img
          className={`absolute top-0 h-full w-full sm:block xs:hidden ${
            state?.destination?.index === 7 && state?.direction === 'up'
              ? 'fadeout'
              : 'z-[0]'
          }`}
          src={cowskinpattern}
          alt="cowskinpattern"
        />
      </div>
    </div>
  );
};

export default CowMoving;
