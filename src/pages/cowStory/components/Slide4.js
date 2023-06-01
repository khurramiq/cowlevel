import React, { useState } from 'react';
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
import teamImgAfter5 from '../../../assets/images/cow_story/teamImgAfter5.png';
import teamImgAfter6 from '../../../assets/images/cow_story/teamImgAfter6.png';
import teamImgAfter7 from '../../../assets/images/cow_story/teamImgAfter7.png';
import teamImgAfter8 from '../../../assets/images/cow_story/teamImgAfter8.png';
import teamImgAfter9 from '../../../assets/images/cow_story/teamImgAfter9.png';
import teamImgAfter10 from '../../../assets/images/cow_story/teamImgAfter10.png';
import teamImgAfter11 from '../../../assets/images/cow_story/teamImgAfter11.png';
import teamImgAfter12 from '../../../assets/images/cow_story/teamImgAfter12.png';
import teamImgAfter13 from '../../../assets/images/cow_story/teamImgAfter13.png';
import daura from '../../../assets/images/cow_story/daura.png';
import swiss_gaming from '../../../assets/images/cow_story/swiss_gaming.png';
import smex from '../../../assets/images/cow_story/smex.png';
import the_2_pie from '../../../assets/images/cow_story/the_2_pie.png';
import tenity_logo from '../../../assets/images/cow_story/tenity_logo.png';
import reg_search from '../../../assets/images/cow_story/reg_search.png';
import cow_store_team_bg from '../../../assets/images/cow_story/cow_store_team_bg.jpg';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import CowStorySlides from './CowStorySlides';
import TeamMemberInfo from './TeamMemberInfo';
import Footer from './Footer';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';

const Slide4 = ({ open, setOpen }) => {
  const [viewMode, setViewMode] = useState(false);
  return (
    <div className="section relative  bg-[#FFFBE8] overflow-x-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
          <img
            className="md:w-[60px] xs:w-[50px]"
            src={cowheaderlogo}
            alt="cowheaderlogo"
          />
          <div className="relative">
            {open ? (
              <i
                className="far fa-times text-4xl cursor-pointer rotate_animation"
                onClick={() => setOpen(false)}
              ></i>
            ) : (
              <FaBars
                className="md:text-3xl xs:text-lg cursor-pointer rotate-animationR"
                onClick={() => setOpen(true)}
              />
            )}
            {open && <MobileLinks />}
          </div>
        </div>
      </div>
      <div className="sticky h-full w-full left-0 right-0 top-0">
        <img
          className="w-full h-full"
          src={cow_store_team_bg}
          alt="cow_store_team_bg"
        />
      </div>
      {/* Cow Story Slides */}
      <div className="absolute top-0 flex flex-col justify-center items-center w-screen h-full overflow-hidden bg-[#FFFBE8]">
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
        <div className="mt-[100px] w-[50%] xs:hidden sm:block">
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
            <div
              className="m-1 relative text-center group w-[10%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[1.5s]"
              // style={{ border: '1px solid red' }}
            >
              <img
                className="absolute top-[60px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor5}
                alt="teamImgBefor5"
              />
              <img
                className="absolute top-[60px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter5}
                alt="teamImgAfter5"
              />
              <TeamMemberInfo name={'BENJAMIN KRATSCH'} role={'Marketing/PR'} />
            </div>
            <div className="m-1 relative text-center group w-[10%] hover:w-[150px] h-[165px] hover:h-[260px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor6}
                alt="teamImgBefor6"
              />
              <img
                className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter6}
                alt="teamImgAfter6"
              />
              <TeamMemberInfo name={'HEATHER BLAIR'} role={'Key Advisor USA'} />
            </div>
            <div className="m-1 relative text-center group w-[16%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[60px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor7}
                alt="teamImgBefor7"
              />
              <img
                className="absolute top-[60px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter7}
                alt="teamImgAfter7"
              />
              <TeamMemberInfo name={'ALEXANDRU'} role={'Advisor'} />
            </div>
            <div class="block w-[8%]">
              <div className="p-1">
                <img className="w-full" src={daura} alt="daura" />
              </div>
              <div className="p-1">
                <img className="w-full" src={swiss_gaming} alt="swiss_gaming" />
              </div>
            </div>
            <div className="m-1 relative text-center group w-[10%] hover:w-[150px] h-[165px] hover:h-[230px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor8}
                alt="teamImgBefor8"
              />
              <img
                className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter8}
                alt="teamImgAfter8"
              />
              <TeamMemberInfo name={'JOHN ROSE'} role={'Advisor'} />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[280px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor9}
                alt="teamImgBefor9"
              />
              <img
                className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter9}
                alt="teamImgAfter9"
              />
              <TeamMemberInfo name={'ABDELHAKIM EL OMRANI'} role={'Advisor'} />
            </div>
          </div>
          <div class="flex justify-center">
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[60px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor10}
                alt="teamImgBefor10"
              />
              <img
                className="absolute top-[60px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter10}
                alt="teamImgAfter10"
              />
              <TeamMemberInfo name={'DUSKA GIORGETTI'} role={'Advisor'} />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[260px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor11}
                alt="teamImgBefor11"
              />
              <img
                className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter11}
                alt="teamImgAfter11"
              />
              <TeamMemberInfo name={'JON BAUMANN'} role={'Advisor'} />
            </div>
            <div class="block w-[8%]">
              <div className="p-1">
                <img className="w-full" src={smex} alt="smex" />
              </div>
              <div className="p-1">
                <img className="w-full" src={the_2_pie} alt="the_2_pie" />
              </div>
            </div>
            <div className="m-1 relative text-center group w-[10%] hover:w-[150px] h-[165px] hover:h-[230px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor12}
                alt="teamImgBefor12"
              />
              <img
                className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter12}
                alt="teamImgAfter12"
              />
              <TeamMemberInfo name={'PASCAL SCHMID'} role={'Advisor'} />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[1.5s]">
              <img
                className="absolute top-[60px] w-full z-[1] group-hover:z-[0]"
                src={teamImgBefor13}
                alt="teamImgBefor13"
              />
              <img
                className="absolute top-[60px] w-full z-[0] group-hover:z-[1]"
                src={teamImgAfter13}
                alt="teamImgAfter13"
              />
              <TeamMemberInfo name={'SUNNY KARKHANIS'} role={'Advisor'} />
            </div>
            <div class="block w-[8%]">
              <div className="p-1">
                <img className="w-full" src={tenity_logo} alt="tenity_logo" />
              </div>
              <div className="p-1">
                <img className="w-full" src={reg_search} alt="reg_search" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px] w-[70%] sm:hidden xs:block">
          <div class="w-full">
            <div className="block text-center">
              {/* 1 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor1}
                  alt="teamImgBefor1"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter1}
                  alt="teamImgAfter1"
                />
                <TeamMemberInfo name={'GABRIEL BUCETA'} role={'Video Editor'} />
              </div>
              {/* 2 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
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
              {/* 3 */}
              <div
                className={`m-1 ${
                  viewMode && 'mt-4'
                } relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[1.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
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
              {/* 4 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor4}
                  alt="teamImgBefor4"
                />
                <img
                  className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter4}
                  alt="teamImgAfter4"
                />
                <TeamMemberInfo name={'STEFAN KAEMPER'} role={'Founder, COB'} />
              </div>
              {/* 5 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor5}
                  alt="teamImgBefor5"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter5}
                  alt="teamImgAfter5"
                />
                <TeamMemberInfo
                  name={'BENJAMIN KRATSCH'}
                  role={'Marketing/PR'}
                />
              </div>
              {/* 6 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor6}
                  alt="teamImgBefor6"
                />
                <img
                  className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter6}
                  alt="teamImgAfter6"
                />
                <TeamMemberInfo
                  name={'HEATHER BLAIR'}
                  role={'Key Advisor USA'}
                />
              </div>
              {/* 7 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor7}
                  alt="teamImgBefor7"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter7}
                  alt="teamImgAfter7"
                />
                <TeamMemberInfo name={'ALEXANDRU'} role={'Advisor'} />
              </div>
              {/* 8 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] h-[200px] mt-5 ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <div className="p-1 mt-4">
                  <img className="w-full" src={daura} alt="daura" />
                </div>
                <div className="p-1">
                  <img
                    className="w-full"
                    src={swiss_gaming}
                    alt="swiss_gaming"
                  />
                </div>
              </div>
              {/* 9 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor8}
                  alt="teamImgBefor8"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter8}
                  alt="teamImgAfter8"
                />
                <TeamMemberInfo name={'JOHN ROSE'} role={'Advisor'} />
              </div>
              {/* 10 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor9}
                  alt="teamImgBefor9"
                />
                <img
                  className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter9}
                  alt="teamImgAfter9"
                />
                <TeamMemberInfo
                  name={'ABDELHAKIM EL OMRANI'}
                  role={'Advisor'}
                />
              </div>
              {/* 11 */}
              <div
                className="m-1 relative  text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor10}
                  alt="teamImgBefor10"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter10}
                  alt="teamImgAfter10"
                />
                <TeamMemberInfo name={'DUSKA GIORGETTI'} role={'Advisor'} />
              </div>
              {/* 12 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[30px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor11}
                  alt="teamImgBefor11"
                />
                <img
                  className="absolute top-[30px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter11}
                  alt="teamImgAfter11"
                />
                <TeamMemberInfo name={'JON BAUMANN'} role={'Advisor'} />
              </div>
              {/* 13 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] h-[200px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <div className="p-1">
                  <img className="w-full" src={smex} alt="smex" />
                </div>
                <div className="p-1">
                  <img className="w-full" src={the_2_pie} alt="the_2_pie" />
                </div>
              </div>
              {/* 14 */}
              <div
                className={`m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] ease-in-out duration-[1.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor12}
                  alt="teamImgBefor12"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter12}
                  alt="teamImgAfter12"
                />
                <TeamMemberInfo name={'PASCAL SCHMID'} role={'Advisor'} />
              </div>
              {/* 15 */}
              <div
                className={`m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[1.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <img
                  className="absolute top-[0px] w-full z-[1] group-hover:z-[0]"
                  src={teamImgBefor13}
                  alt="teamImgBefor13"
                />
                <img
                  className="absolute top-[0px] w-full z-[0] group-hover:z-[1]"
                  src={teamImgAfter13}
                  alt="teamImgAfter13"
                />
                <TeamMemberInfo name={'SUNNY KARKHANIS'} role={'Advisor'} />
              </div>
              {/* 16 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] h-[200px] ease-in-out duration-[1.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <div className="p-1">
                  <img className="w-full" src={tenity_logo} alt="tenity_logo" />
                </div>
                <div className="p-1">
                  <img className="w-full" src={reg_search} alt="reg_search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer viewMode={viewMode} />
    </div>
  );
};

export default Slide4;
