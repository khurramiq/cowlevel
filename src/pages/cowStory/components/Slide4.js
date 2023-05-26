import React from 'react';
import redthan from '../../../assets/images/cow_story/redthan.png';
// before images
import teamImgBefor1 from '../../../assets/images/cow_story/teamImgBefor1.png';
import teamImgBefor2 from '../../../assets/images/cow_story/teamImgBefor2.png';
import teamImgBefor3 from '../../../assets/images/cow_story/teamImgBefor3.png';
import teamImgBefor4 from '../../../assets/images/cow_story/teamImgBefor4.png';
import teamImgBefor5 from '../../../assets/images/cow_story/teamImgBefor5.png';
import teamImgBefor6 from '../../../assets/images/cow_story/teamImgBefor6.png';
import teamImgBefor7 from '../../../assets/images/cow_story/teamImgBefor7.png';
import teamImgBefor8 from '../../../assets/images/cow_story/teamImgBefor8.png';
import teamImgBefor9 from '../../../assets/images/cow_story/teamImgBefor9.png';
import teamImgBefor10 from '../../../assets/images/cow_story/teamImgBefor10.png';
import teamImgBefor11 from '../../../assets/images/cow_story/teamImgBefor11.png';
import teamImgBefor12 from '../../../assets/images/cow_story/teamImgBefor12.png';
import teamImgBefor13 from '../../../assets/images/cow_story/teamImgBefor13.png';
// after images
import teamImgAfter1 from '../../../assets/images/cow_story/teamImgAfter1.png';
import teamImgAfter2 from '../../../assets/images/cow_story/teamImgAfter2.png';
import teamImgAfter3 from '../../../assets/images/cow_story/teamImgAfter3.png';
import teamImgAfter4 from '../../../assets/images/cow_story/teamImgAfter4.png';
import daura from '../../../assets/images/cow_story/daura.png';
import swiss_gaming from '../../../assets/images/cow_story/swiss_gaming.png';
import smex from '../../../assets/images/cow_story/smex.png';
import the_2_pie from '../../../assets/images/cow_story/the_2_pie.png';
import tenity_logo from '../../../assets/images/cow_story/tenity_logo.png';
import reg_search from '../../../assets/images/cow_story/reg_search.png';
import CowLevelHeader from '../../../components/CowLevelHeader';
import CowStorySlides from './CowStorySlides';
import TeamMemberInfo from './TeamMemberInfo';

const Slide4 = ({ open, setOpen }) => {
  return (
    <div className="section relative  bg-[#FFFBE8] overflow-x-hidden">
      <CowLevelHeader open={open} setOpen={setOpen} />
      {/* Cow Story Slides */}
      <div className="absolute flex flex-col justify-center items-center w-screen h-full overflow-hidden">
        <h3 className="text-[28px] text-center text-black">COW STORY</h3>
        <img src={redthan} alt="redthan" />
        <CowStorySlides />
      </div>
      {/* Team Section */}
      <div className="absolute top-[100%] w-screen flex flex-col justify-center items-center overflow-x-hidden">
        <h3 className="text-[28px] text-center text-black">MEET OUR HERD</h3>
        <img src={redthan} alt="redthan" />
        <p className="mt-5 xs:w-[90%] m-x-auto text-center">
          <strong>
            A ROUND-UP OF OUR FOUNDERS, TEAM, ADVISORS AND PARTNERS
          </strong>
        </p>
        <div className="mt-[100px] w-[50%]">
          <div
            class="flex justify-center"
            // style={{ border: '1px solid red' }}
          >
            <div
              className="m-1 relative text-center group w-[15%] hover:w-[150px] h-[200px] hover:h-[330px] ease-in-out duration-[1.5s]"
              // style={{ border: '1px solid red' }}
            >
              <img
                className="absolute top-[100px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor1}
                alt="teamImgBefor1"
              />
              <img
                className="absolute top-[100px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter1}
                alt="teamImgAfter1"
              />
              <TeamMemberInfo name={'GABRIEL BUCETA'} role={'Video Editor'} />
            </div>
            <div
              className="m-1 relative text-center group w-[20%] hover:w-[150px] h-[165px] hover:h-[260px] ease-in-out duration-[1.5s]"
              // style={{ border: '1px solid red' }}
            >
              <img
                className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor2}
                alt="teamImgBefor2"
              />
              <img
                className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter2}
                alt="teamImgAfter2"
              />
              <TeamMemberInfo name={'STEFAN KAEMPER'} role={'Founder, COB'} />
            </div>
            <div
              className="m-1 relative text-center group w-[20%] hover:w-[150px] h-[165px] hover:h-[230px] ease-in-out duration-[1.5s]"
              // style={{ border: '1px solid red' }}
            >
              <img
                className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor3}
                alt="teamImgBefor3"
              />
              <img
                className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter3}
                alt="teamImgAfter3"
              />
              <TeamMemberInfo name={'STEFAN KAEMPER'} role={'Founder, COB'} />
            </div>
            <div
              className="m-1 relative text-center group w-[15%] hover:w-[150px] h-[165px] hover:h-[290px] ease-in-out duration-[1.5s]"
              // style={{ border: '1px solid red' }}
            >
              <img
                className="absolute top-[60px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor4}
                alt="teamImgBefor4"
              />
              <img
                className="absolute top-[60px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter4}
                alt="teamImgAfter4"
              />
              <TeamMemberInfo name={'STEFAN KAEMPER'} role={'Founder, COB'} />
            </div>
          </div>
          <div class="flex justify-center">
            <div className="p-1">
              <img
                className="w-[88px]"
                src={teamImgBefor5}
                alt="teamImgBefor5"
              />
            </div>
            <div className="p-1">
              <img
                className="w-[79px]"
                src={teamImgBefor6}
                alt="teamImgBefor6"
              />
            </div>
            <div className="p-1">
              <img
                className="w-[104px]"
                src={teamImgBefor7}
                alt="teamImgBefor7"
              />
            </div>
            <div class="grid grid-rows-2 grid-flow-col gap-0">
              <div className="p-1">
                <img className="w-[72px]" src={daura} alt="daura" />
              </div>
              <div className="p-1">
                <img
                  className="w-[72px]"
                  src={swiss_gaming}
                  alt="swiss_gaming"
                />
              </div>
            </div>
            <div className="p-1">
              <img
                className="w-[86px]"
                src={teamImgBefor8}
                alt="teamImgBefor8"
              />
            </div>
            <div className="p-1">
              <img
                className="w-[92px]"
                src={teamImgBefor9}
                alt="teamImgBefor9"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div className="p-1">
              <img
                className="w-[86px]"
                src={teamImgBefor10}
                alt="teamImgBefor10"
              />
            </div>
            <div className="p-1">
              <img
                className="w-[86px]"
                src={teamImgBefor11}
                alt="teamImgBefor11"
              />
            </div>
            <div class="grid grid-rows-2 grid-flow-col gap-0">
              <div className="p-1">
                <img className="w-[72px]" src={smex} alt="smex" />
              </div>
              <div className="p-1">
                <img className="w-[72px]" src={the_2_pie} alt="the_2_pie" />
              </div>
            </div>
            <div className="p-1">
              <img
                className="w-[86px]"
                src={teamImgBefor12}
                alt="teamImgBefor12"
              />
            </div>
            <div className="p-1">
              <img
                className="w-[86px]"
                src={teamImgBefor13}
                alt="teamImgBefor13"
              />
            </div>
            <div class="grid grid-rows-2 grid-flow-col gap-0">
              <div className="p-1">
                <img className="w-[72px]" src={tenity_logo} alt="tenity_logo" />
              </div>
              <div className="p-1">
                <img className="w-[72px]" src={reg_search} alt="reg_search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
