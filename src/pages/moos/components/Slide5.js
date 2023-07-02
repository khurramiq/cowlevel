import React from 'react';
import cowheaderlogo from '../../../assets/images/cowheaderlogo.png';
import whitethan from '../../../assets/images/moos/red_than.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLinks from '../../../components/MobileLinks';
import Footer from './Footer';
import moment from 'moment';

const Slide5 = ({
  open,
  setOpen,
  fullpageApi,
  state,
  blogsLoading,
  blogs,
  newsLoading,
  news,
}) => {
  return (
    <div className="section relative bg-[#FFFBE8]  overflow-x-hidden scrollbar-hidden">
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
      <div
        className={`md:absolute md:top-0 w-screen xs:h-auto md:h-full flex flex-col justify-center items-center bg-[#FFFBE8] overflow-x-hidden
        ${
          state?.destination?.index === 4 && state?.direction === 'down'
            ? 'fadein'
            : 'z-[1]'
        }
        `}
      >
        <h3 className="text-3xl font-[500] text-center">
          <Link to={'/blogs'}>BLOG</Link>
        </h3>
        <Link to={'/blogs'}>
          <img src={whitethan} alt="whitethan" />
        </Link>
        {blogsLoading ? (
          <div>
            <h1 className="text-3xl text-center">
              Be patient content is loading...
            </h1>
          </div>
        ) : (
          <div className="md:w-[60%] sm:w-[70%] xs:w-[90%] md:flex sm:block mt-10">
            <div className="md:w-[66%] xs:w-[100%] xs:block sm:flex">
              <div className="mr-[10px] sm:w-[50%] xs:w-[100%]">
                <Link to={`/blog/${blogs[0]?._id}`}>
                  <div className="relative overflow-hidden group">
                    <img
                      className="h-[150px] m-auto"
                      src={blogs[0]?.coverImageURL}
                      alt="fipme"
                    />
                    <div
                      className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                      style={{
                        backgroundImage:
                          'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                      }}
                    >
                      <div className="flex justify-center">
                        <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                          <i className="fal fa-link text-white"></i>
                        </div>
                        <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                          <i className="fal fa-search text-white"></i>
                        </div>
                      </div>
                      <h4 className="text-center font-[500] mt-3 text-sm">
                        {blogs[0]?.title}
                      </h4>
                      <p className="text-sm font-[300]">Blog</p>
                    </div>
                  </div>
                </Link>
                <p className="text-center mt-5">
                  <Link
                    className="hover:text-[#C9AC78] transition duration-300 ease-in-out"
                    to={`/blog/${blogs[0]?._id}`}
                  >
                    {blogs[0]?.title}
                  </Link>
                </p>
              </div>
              <div className="mr-[10px] sm:w-[50%] xs:w-[100%] xs:mt-10 sm:mt-0">
                <Link to={`/blog/${blogs[1]?._id}`}>
                  <div className="relative overflow-hidden group">
                    <img
                      className="h-[150px] m-auto"
                      src={blogs[1]?.coverImageURL}
                      alt="card1"
                    />
                    <div
                      className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                      style={{
                        backgroundImage:
                          'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                      }}
                    >
                      <div className="flex justify-center">
                        <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                          <i className="fal fa-link text-white"></i>
                        </div>
                        <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                          <i className="fal fa-search text-white"></i>
                        </div>
                      </div>
                      <h4 className="text-center font-[500] mt-3 text-sm">
                        {blogs[1]?.title}
                      </h4>
                      <p className="text-sm font-[300]">Blog</p>
                    </div>
                  </div>
                </Link>
                <p className="text-center mt-5">
                  <Link
                    className="hover:text-[#C9AC78] transition duration-300 ease-in-out"
                    to={`/blog/${blogs[1]?._id}`}
                  >
                    {blogs[1]?.title}
                  </Link>
                </p>
              </div>
            </div>
            <div className="md:w-[33%] sm:w-[50%] md:mt-0 xs:pb-10 md:pb-0 xs:mt-10">
              <Link to={`/blog/${blogs[2]?._id}`}>
                <div className="relative overflow-hidden group">
                  <img
                    className="h-[150px] m-auto"
                    src={blogs[2]?.coverImageURL}
                    alt="card2"
                  />
                  <div
                    className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                    }}
                  >
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                        <i className="fal fa-link text-white"></i>
                      </div>
                      <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                        <i className="fal fa-search text-white"></i>
                      </div>
                    </div>
                    <h4 className="text-center font-[500] mt-3 text-sm">
                      {blogs[2]?.title}
                    </h4>
                    <p className="text-sm font-[300]">Blog</p>
                  </div>
                </div>
              </Link>
              <p className="text-center mt-5">
                <Link
                  className="hover:text-[#C9AC78] transition duration-300 ease-in-out"
                  to={`/blog/${blogs[2]?._id}`}
                >
                  {blogs[2]?.title}
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
      <div
        className={`md:absolute md:top-[100%] w-screen xs:h-auto md:h-[120%] flex flex-col justify-center items-center bg-[#FFFBE8] overflow-x-hidden
        ${
          state?.destination?.index === 4 && state?.direction === 'down'
            ? 'fadein'
            : 'z-[1]'
        }
        `}
      >
        <h3 className="text-3xl font-[500] text-center">
          <Link to={'/news'}>NEWS</Link>
        </h3>
        <Link to={'/news'}>
          <img src={whitethan} alt="whitethan" />
        </Link>
        {newsLoading ? (
          <div>
            <h1 className="text-3xl text-center">
              Be patient content is loading...
            </h1>
          </div>
        ) : (
          <>
            <div className="md:w-[60%] sm:w-[70%] xs:w-[90%] mt-10">
              <div className="md:w-[100%] xs:w-[100%] xs:block sm:flex">
                <div className="mr-[20px] sm:w-[40%] xs:w-[100%]">
                  <Link to={`/news/${news[0]?._id}`}>
                    <div className="relative overflow-hidden group">
                      <img
                        className="w-full"
                        src={news[0]?.coverImageURL}
                        alt="card3"
                      />
                      <div
                        className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                        style={{
                          backgroundImage:
                            'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                        }}
                      >
                        <div className="flex justify-center">
                          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                            <i className="fal fa-link text-white"></i>
                          </div>
                          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                            <i className="fal fa-search text-white"></i>
                          </div>
                        </div>
                        <h4 className="text-center font-[500] mt-3 text-sm">
                          {' '}
                          {news[0]?.title}
                        </h4>
                        <p className="text-sm font-[300]">News</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="mr-[10px] sm:w-[60%] xs:w-[100%] xs:mt-10 sm:mt-0">
                  <h3 className="text-lg">
                    <Link
                      className="hover:text-[#C9AC78] transition duration-300 ease-in-out"
                      to={`/news/${news[0]?._id}`}
                    >
                      {news[0]?.title}
                    </Link>
                  </h3>
                  <p className="text-sm mt-7">{news[0]?.shortText}</p>
                </div>
              </div>
              <p
                className="text-start mt-5"
                style={{
                  border: '1px solid #ccc',
                  borderLeft: 'none',
                  borderRight: 'none',
                }}
              >
                {moment(news[0]?.publishDate).format('MMMM Do YYYY')}
              </p>
            </div>
            <div className="md:w-[60%] sm:w-[70%] xs:w-[90%] mt-10">
              <div className="md:w-[100%] xs:w-[100%] xs:block sm:flex">
                <div className="mr-[20px] sm:w-[40%] xs:w-[100%]">
                  <Link to={`/news/${news[1]?._id}`}>
                    <div className="relative overflow-hidden group">
                      <img
                        className="w-full"
                        src={news[1]?.coverImageURL}
                        alt="card4"
                      />
                      <div
                        className="absolute top-0 w-[0px] left-[-100%] group-hover:left-0 group-hover:w-[100%] ease-in-out duration-300 bottom-0 flex flex-col items-center justify-center"
                        style={{
                          backgroundImage:
                            'linear-gradient(to top, #c72e31 0, rgba(255, 78, 80, 0.8) 100%)',
                        }}
                      >
                        <div className="flex justify-center">
                          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black mr-3">
                            <i className="fal fa-link text-white"></i>
                          </div>
                          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-[100%] bg-black">
                            <i className="fal fa-search text-white"></i>
                          </div>
                        </div>
                        <h4 className="text-center font-[500] mt-3 text-sm">
                          {news[1]?.title}
                        </h4>
                        <p className="text-sm font-[300]">News</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="mr-[10px] sm:w-[60%] xs:w-[100%] xs:mt-10 sm:mt-0">
                  <h3 className="text-lg">
                    <Link
                      className="hover:text-[#C9AC78] transition duration-300 ease-in-out"
                      to={`/news/${news[1]?._id}`}
                    >
                      {news[1]?.title}
                    </Link>
                  </h3>
                  <p className="text-sm mt-7">{news[1]?.shortText}</p>
                </div>
              </div>
              <p
                className="text-start mt-5 mb-10"
                style={{
                  border: '1px solid #ccc',
                  borderLeft: 'none',
                  borderRight: 'none',
                }}
              >
                {moment(news[1]?.publishDate).format('MMMM Do YYYY')}
              </p>
            </div>
          </>
        )}
      </div>
      {state?.destination?.index === 4 && state?.direction === 'down' && (
        <div
          className={`absolute top-0 w-screen h-full bg-[#FFFBE8] flex flex-col justify-center items-center text-white overflow-x-hidden
      ${
        state?.destination?.index === 4 && state?.direction === 'down'
          ? 'fadeout'
          : 'z-[1]'
      }
      `}
        >
          <h3 className="text-3xl font-[500]">MOOS</h3>
          <img src={whitethan} alt="whitethan" />
          <h4 className="text-base font-[500] mt-4 text-center">
            STUFF WE SAY AND DO
          </h4>
          <p className="xs:w-[90%] sm:w-[40%] text-center text-base mt-3">
            Steak out this section to learn all the latest goings on at Cow
            Level. And don’t forget to sign up for our Mooseletter.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Slide5;
