import React from 'react';
import cow_story_slide1 from '../../../assets/images/cow_story/cow_story_slide1.png';
import cow_story_mobile1 from '../../../assets/images/cow_story/cow_story_mobile1.png';
import CowLevelHeaderWithLinks from '../../../components/CowLevelHeaderWithLinks';

const Slide1 = ({ open, setOpen }) => {
  return (
    <div className="section relative  bg-[#FFFBE8]">
      <CowLevelHeaderWithLinks open={open} setOpen={setOpen} />
      <div className="absolute flex justify-center items-center w-screen h-full overflow-hidden">
        <img
          className="relative w-full xs:inline-block sm:hidden"
          src={cow_story_mobile1}
          alt="cow_story_mobile1"
        />
        <img
          className="relative sm:inline-block xs:hidden"
          src={cow_story_slide1}
          alt="cow_story_slide1"
        />
      </div>
    </div>
  );
};

export default Slide1;
