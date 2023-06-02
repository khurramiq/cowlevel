import React from 'react';
import cow_story_slide1 from '../../../assets/images/cow_story/cow_story_slide1.png';
import cow_story_slide2 from '../../../assets/images/cow_story/cow_story_slide2.png';
import cow_story_mobile1 from '../../../assets/images/cow_story/cow_story_mobile1.png';
import cow_story_mobile2 from '../../../assets/images/cow_story/cow_story_mobile2.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide3 = ({ open, setOpen, state }) => {
  console.log('state', state);
  return (
    <div className={'section relative  bg-[#FFFBE8]'}>
      <CowLevelHeader open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-full h-full overflow-hidden">
        <div className="relative w-screen h-full overflow-hidden">
          <img
            className={`absolute top-[20%] w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={cow_story_mobile2}
            alt="cow_story_mobile2"
          />
          {state?.destination?.index === 2 && state?.direction === 'down' && (
            <img
              className={`absolute top-[20%] w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={cow_story_mobile1}
              alt="cow_story_mobile1"
            />
          )}
          <img
            className={`absolute w-full sm:top-[20%] md:top-0 m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={cow_story_slide2}
            alt="cow_story_slide2"
          />
          {state?.destination?.index === 2 && state?.direction === 'down' && (
            <img
              className={`absolute w-full sm:top-[20%] md:top-0 m-auto sm:inline-block xs:hidden
            ${
              state?.destination?.index === 2 && state?.direction === 'down'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={cow_story_slide1}
              alt="cow_story_slide1"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide3;
