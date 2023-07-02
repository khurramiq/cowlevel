import React from 'react';
import Header1 from './components/Header1';
import { Link } from 'react-router-dom';

const News = ({ newsLoading, news }) => {
  return (
    <div>
      <Header1 />
      <div
        className="w-[90%] max-w-[1200px] mx-auto pt-[150px]"
        style={{ minHeight: 'calc(100vh - 210px)' }}
      >
        {newsLoading ? (
          <div>
            <h1 className="text-3xl text-center">
              Be patient content is loading...
            </h1>
          </div>
        ) : (
          <div>
            {news.map((item, i) => (
              <div key={i} className="mt-10">
                <div className="md:w-[100%] xs:w-[100%] xs:block sm:flex">
                  <div className="mr-[20px] sm:w-[30%] xs:w-[100%]">
                    <Link to={`/news/${item._id}`}>
                      <div className="relative overflow-hidden group">
                        <img
                          className="w-full"
                          src={item?.coverImageURL}
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
                            {item.title}
                          </h4>
                          <p className="text-sm font-[300]">News</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mr-[10px] sm:w-[70%] xs:w-[100%] xs:mt-10 sm:mt-0">
                    <h3 className="text-lg">{item.title}</h3>
                    <p className="text-sm mt-7">{item.shortText}</p>
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
                  April 3, 2023
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* footer */}
      <div className="bg-[#1d242d] pt-[20px] pb-[20px] mt-[150px]">
        <p className="text-center md:text-left text-[13px] text-[rgba(255,255,255,0.4)] max-w-[1200px] mx-auto">
          All Rights Reserved. (c) 2023 Cow Level AG
        </p>
      </div>
    </div>
  );
};

export default News;
