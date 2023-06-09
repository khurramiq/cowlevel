/* eslint-disable react/jsx-no-target-blank */
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
import { Link } from 'react-router-dom';

const Slide4 = ({ open, setOpen, fullpageApi }) => {
  const [viewMode, setViewMode] = useState(false);
  return (
    <div className="section relative  bg-[#FFFBE8] overflow-x-hidden scrollbar-hidden">
      <div className="z-[100] sticky left-0 right-0 top-0">
        <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
          <Link to="/" onClick={() => fullpageApi.moveTo(1)}>
            <img
              className="md:w-[60px] xs:w-[50px]"
              src={cowheaderlogo}
              alt="cowheaderlogo"
            />
          </Link>
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
      <div className="absolute top-0 flex flex-col justify-center items-center w-screen min-h-full overflow-hidden bg-[#FFFBE8]">
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
          <div class="flex justify-center">
            <div className="m-1 relative text-center group w-[15%] hover:w-[150px] h-[200px] hover:h-[330px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/gabrielbuceta/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'GABRIEL BUCETA'}
                role={'Video Editor'}
                linkedin="https://www.linkedin.com/in/gabrielbuceta/"
              />
            </div>
            <div className="m-1 relative text-center group w-[20%] hover:w-[150px] h-[165px] hover:h-[260px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/stefan-kaemper/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'STEFAN KAEMPER'}
                role={'Founder, COB'}
                linkedin="https://www.linkedin.com/in/stefan-kaemper/"
              />
            </div>
            <div className="m-1 relative text-center group w-[20%] hover:w-[150px] h-[165px] hover:h-[230px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/boris-obodda-03359235/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'BORIS OBODDA'}
                role={'Founder, CEO'}
                linkedin="https://www.linkedin.com/in/boris-obodda-03359235/"
              />
            </div>
            <div className="m-1 relative text-center group w-[15%] hover:w-[150px] h-[165px] hover:h-[310px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/maryna-cherkashyna-73582a1a6/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'MARINA CHERKASHINA'}
                role={'Lead Project Manager'}
                linkedin="https://www.linkedin.com/in/maryna-cherkashyna-73582a1a6/"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/benjaminkratsch"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'BENJAMIN KRATSCH'}
                role={'Marketing/PR'}
                linkedin="https://www.linkedin.com/in/benjaminkratsch"
              />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[260px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/heatherblair/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'HEATHER BLAIR'}
                role={'Key Advisor USA'}
                linkedin="https://www.linkedin.com/in/heatherblair/"
              />
            </div>
            <div className="m-1 relative text-center group w-[16%] hover:w-[150px] h-[200px] hover:h-[310px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/alexandru-turkonje/"
                target="_blank"
              >
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
              </a>
              <TeamMemberInfo
                name={'ALEXANDRU TURKONJE'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/alexandru-turkonje/"
              />
            </div>
            <div class="block w-[12%]">
              <div className="p-1">
                <a href="https://daura.ch/en/" target="_blank">
                  <img className="w-full" src={daura} alt="daura" />
                </a>
              </div>
              <div className="p-1">
                <a href="https://swissgaming.org/" target="_blank">
                  <img
                    className="w-full"
                    src={swiss_gaming}
                    alt="swiss_gaming"
                  />
                </a>
              </div>
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[230px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/mrjohnmrose/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'JOHN ROSE'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/mrjohnmrose/"
              />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[280px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/abdelhakim-el-omrani-57725b14a/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'ABDELHAKIM EL OMRANI'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/abdelhakim-el-omrani-57725b14a/"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/duska-giorgetti-860a4317b/"
                target="_blank"
              >
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
              </a>
              <TeamMemberInfo
                name={'DUSKA GIORGETTI'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/duska-giorgetti-860a4317b/"
              />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[260px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/jon-baumann-baj/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'JON BAUMANN'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/jon-baumann-baj/"
              />
            </div>
            <div class="block w-[12%]">
              <div className="p-1">
                <a href="https://daura.ch/en/" target="_blank">
                  <img className="w-full" src={smex} alt="smex" />
                </a>
              </div>
              <div className="p-1">
                <a
                  href="https://www.linkedin.com/company/two-pi-team/"
                  target="_blank"
                >
                  <img className="w-full" src={the_2_pie} alt="the_2_pie" />
                </a>
              </div>
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[165px] hover:h-[230px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/pascal-schmid-foundationandcryptoexpert/"
                target="_blank"
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
              </a>
              <TeamMemberInfo
                name={'PASCAL SCHMID'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/pascal-schmid-foundationandcryptoexpert/"
              />
            </div>
            <div className="m-1 relative text-center group w-[12%] hover:w-[150px] h-[200px] hover:h-[290px] ease-in-out duration-[2.5s]">
              <a
                href="https://www.linkedin.com/in/sanjeev-sunny-karkhanis/"
                target="_blank"
              >
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
              </a>
              <TeamMemberInfo
                name={'SUNNY KARKHANIS'}
                role={'Advisor'}
                linkedin="https://www.linkedin.com/in/sanjeev-sunny-karkhanis/"
              />
            </div>
            <div class="block w-[12%]">
              <div className="p-1">
                <a href="https://www.tenity.com/" target="_blank">
                  <img className="w-full" src={tenity_logo} alt="tenity_logo" />
                </a>
              </div>
              <div className="p-1">
                <a href="https://www.regsearch.ai/" target="_blank">
                  <img className="w-full" src={reg_search} alt="reg_search" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px] w-[70%] sm:hidden xs:block">
          <div class="w-full">
            <div className="block text-center">
              {/* 1 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/gabrielbuceta/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'GABRIEL BUCETA'}
                  role={'Video Editor'}
                  linkedin="https://www.linkedin.com/in/gabrielbuceta/"
                />
              </div>
              {/* 2 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/stefan-kaemper/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'STEFAN KAEMPER'}
                  role={'Founder, COB'}
                  linkedin="https://www.linkedin.com/in/stefan-kaemper/"
                />
              </div>
              {/* 3 */}
              <div
                className={`m-1 ${
                  viewMode && 'mt-5'
                } relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[2.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/boris-obodda-03359235/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'BORIS OBODDA'}
                  role={'Founder, CEO'}
                  linkedin="https://www.linkedin.com/in/boris-obodda-03359235/"
                />
              </div>
              {/* 4 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/maryna-cherkashyna-73582a1a6/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'MARINA CHERKASHINA'}
                  role={'Lead Project Manager'}
                  linkedin="https://www.linkedin.com/in/maryna-cherkashyna-73582a1a6/"
                />
              </div>
              {/* 5 */}
              <div
                className={`m-1 ${
                  viewMode && 'mt-5'
                } relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[2.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/benjaminkratsch"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'BENJAMIN KRATSCH'}
                  role={'Marketing/PR'}
                  linkedin="https://www.linkedin.com/in/benjaminkratsch"
                />
              </div>
              {/* 6 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/heatherblair/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'HEATHER BLAIR'}
                  role={'Key Advisor USA'}
                  linkedin="https://www.linkedin.com/in/heatherblair/"
                />
              </div>
              {/* 7 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/alexandru-turkonje/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'ALEXANDRU TURKONJE'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/alexandru-turkonje/"
                />
              </div>
              {/* 8 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] h-[200px] mt-5 ease-in-out duration-[2.5s]"
                onClick={() => setViewMode(false)}
              >
                <div className="p-1 mt-4">
                  <a href="https://daura.ch/en/" target="_blank">
                    <img className="w-full" src={daura} alt="daura" />
                  </a>
                </div>
                <div className="p-1">
                  <a href="https://swissgaming.org/" target="_blank">
                    <img
                      className="w-full"
                      src={swiss_gaming}
                      alt="swiss_gaming"
                    />
                  </a>
                </div>
              </div>
              {/* 9 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/mrjohnmrose/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'JOHN ROSE'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/mrjohnmrose/"
                />
              </div>
              {/* 10 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/abdelhakim-el-omrani-57725b14a/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'ABDELHAKIM EL OMRANI'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/abdelhakim-el-omrani-57725b14a/"
                />
              </div>
              {/* 11 */}
              <div
                className={`m-1 ${
                  viewMode && 'mt-5'
                } relative  text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[2.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/duska-giorgetti-860a4317b/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'DUSKA GIORGETTI'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/duska-giorgetti-860a4317b/"
                />
              </div>
              {/* 12 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[320px] ease-in-out duration-[2.5s]"
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/jon-baumann-baj/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'JON BAUMANN'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/jon-baumann-baj/"
                />
              </div>
              {/* 13 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] h-[200px] ease-in-out duration-[2.5s]"
                onClick={() => setViewMode(false)}
              >
                <div className="p-1">
                  <a href="https://daura.ch/en/" target="_blank">
                    <img className="w-full" src={smex} alt="smex" />
                  </a>
                </div>
                <div className="p-1">
                  <a
                    href="https://www.linkedin.com/company/two-pi-team/"
                    target="_blank"
                  >
                    <img className="w-full" src={the_2_pie} alt="the_2_pie" />
                  </a>
                </div>
              </div>
              {/* 14 */}
              <div
                className={`m-1 ${
                  viewMode && 'mt-10'
                } relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] ease-in-out duration-[2.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/pascal-schmid-foundationandcryptoexpert/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'PASCAL SCHMID'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/pascal-schmid-foundationandcryptoexpert/"
                />
              </div>
              {/* 15 */}
              <div
                className={`m-1 relative text-center group inline-block w-[40%] hover:w-[80%] h-[100px] hover:h-[290px] hover:mt-10 ease-in-out duration-[2.5s]`}
                onMouseEnter={() => setViewMode(true)}
                onMouseLeave={() => setViewMode(false)}
              >
                <a
                  href="https://www.linkedin.com/in/sanjeev-sunny-karkhanis/"
                  target="_blank"
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
                </a>
                <TeamMemberInfo
                  name={'SUNNY KARKHANIS'}
                  role={'Advisor'}
                  linkedin="https://www.linkedin.com/in/sanjeev-sunny-karkhanis/"
                />
              </div>
              {/* 16 */}
              <div
                className="m-1 relative text-center group inline-block w-[40%] h-[200px] ease-in-out duration-[2.5s]"
                onClick={() => setViewMode(false)}
              >
                <div className="p-1">
                  <a href="https://www.tenity.com/" target="_blank">
                    <img
                      className="w-full"
                      src={tenity_logo}
                      alt="tenity_logo"
                    />
                  </a>
                </div>
                <div className="p-1">
                  <a href="https://www.regsearch.ai/" target="_blank">
                    <img className="w-full" src={reg_search} alt="reg_search" />
                  </a>
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
