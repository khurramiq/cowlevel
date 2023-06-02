import React from 'react';
import cow_story_slide1 from '../../../assets/images/cow_story/cow_story_slide1.png';
import cow_story_slide2 from '../../../assets/images/cow_story/cow_story_slide2.png';
import cow_story_mobile1 from '../../../assets/images/cow_story/cow_story_mobile1.png';
import cow_story_mobile2 from '../../../assets/images/cow_story/cow_story_mobile2.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide2 = ({ open, setOpen, state }) => {
  return (
    <div className={'section relative  bg-[#FFFBE8]'}>
      <CowLevelHeader open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <div className="relative w-screen h-full overflow-hidden">
          <img
            className={`absolute top-[20%] w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={cow_story_mobile1}
            alt="cow_story_mobile1"
          />
          {state?.destination?.index === 1 && state?.direction === 'up' && (
            <img
              className={`absolute top-[20%] w-full xs:inline-block sm:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={cow_story_mobile2}
              alt="cow_story_mobile2"
            />
          )}
          <img
            className={`absolute w-full sm:top-[20%] md:top-0 sm:inline-block xs:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadein'
                : 'z-[1]'
            }
            `}
            src={cow_story_slide1}
            alt="cow_story_slide1"
          />
          {state?.destination?.index === 1 && state?.direction === 'up' && (
            <img
              className={`absolute w-full sm:top-[20%] md:top-0 sm:inline-block xs:hidden
            ${
              state?.destination?.index === 1 && state?.direction === 'up'
                ? 'fadeout'
                : 'z-[0]'
            }
            `}
              src={cow_story_slide2}
              alt="cow_story_slide2"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide2;
