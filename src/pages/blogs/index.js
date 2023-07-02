import React from 'react';
import Header1 from './components/Header1';
import { Link } from 'react-router-dom';

const Blogs = ({ blogsLoading, blogs }) => {
  return (
    <div>
      <Header1 />
      <div
        className="w-[90%] max-w-[1200px] mx-auto pt-[150px]"
        style={{ minHeight: 'calc(100vh - 210px)' }}
      >
        {blogsLoading ? (
          <div>
            <h1 className="text-3xl text-center">
              Be patient content is loading...
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.map((item, i) => (
              <div key={i}>
                <Link to={`/blog/${item._id}`}>
                  <div className="relative overflow-hidden group">
                    <img
                      className="h-[230px] m-auto"
                      src={item?.coverImageURL}
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
                      <h4 className="text-center font-[500] mt-3 text-sm w-[80%] mx-auto">
                        {item.title}
                      </h4>
                      <p className="text-sm font-[300]">Blog</p>
                    </div>
                  </div>
                </Link>
                <p className="mt-5 w-[80%] mx-auto">{item.title}</p>
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

export default Blogs;
