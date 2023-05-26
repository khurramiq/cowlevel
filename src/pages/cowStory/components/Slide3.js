import React from 'react';
import cow_story_slide2 from '../../../assets/images/cow_story/cow_story_slide2.png';
import cow_story_mobile2 from '../../../assets/images/cow_story/cow_story_mobile2.png';
import CowLevelHeader from '../../../components/CowLevelHeader';

const Slide3 = ({ open, setOpen }) => {
  return (
    <div className="section relative  bg-[#FFFBE8]">
      <CowLevelHeader open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <img
          className="relative w-full xs:inline-block sm:hidden"
          src={cow_story_mobile2}
          alt="cow_story_mobile2"
        />
        <img
          className="relative sm:inline-block xs:hidden"
          src={cow_story_slide2}
          alt="cow_story_slide2"
        />
      </div>
    </div>
  );
};

export default Slide3;
