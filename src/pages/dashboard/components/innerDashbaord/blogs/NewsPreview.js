/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import red_than from '../../../../../assets/images/moos/red_than.png';
import { Markup } from 'interweave';
import dumyLogo from '../../../../../assets/images/dumyLogo.png';
import { useParams } from 'react-router-dom';
import Header from '../../../../moos/components/Header';
import api from '../../../../../utils/api';
import footerflower from '../../../../../assets/images/cow_story/footerWhiteLogo.png';
import footerlogo from '../../../../../assets/images/footerlogo.png';
import footer_animation from '../../../../../assets/images/footer_animation.gif';
import fb from '../../../../../assets/images/fb.png';
import tw from '../../../../../assets/images/tw.png';
import yt from '../../../../../assets/images/yt.png';
import li from '../../../../../assets/images/li.png';
import TextArea from '../../../../../components/TextArea';
import InputField from '../../../../../components/InputField';
import Checkbox from '../../../../../components/Checkbox';
import moment from 'moment';

const NewsPreview = () => {
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState({
    newsId: id,
    comment: '',
    name: '',
    email: '',
    website: '',
  });
  useEffect(() => {
    if (id) {
      getBlog();
      setComment({
        newsId: id,
        comment: '',
        name: '',
        email: '',
        website: '',
      });
    }
  }, [id]);

  const onCommentPost = async (e) => {
    e.preventDefault();
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (comment.name !== '' && regex.test(comment.email)) {
      try {
        var res = await api.post(`/cowNew/comment`, comment);
        if (res.data.savedComment && !res.data.error) {
          setBlog(res.data.savedComment);
          setComment({
            newsId: id,
            comment: '',
            name: '',
            email: '',
            website: '',
          });
        } else {
          console.log('res.data.error', res.data.error);
        }
      } catch (e) {
        console.log('e.message', e.message);
      }
    }
  };

  const handleComment = (e) => {
    setComment((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getBlog = async (data) => {
    try {
      var res = await api.get(`/cowNew/${id}`);
      console.log('res', res);
      if (res.data.cowNew && !res.data.error) {
        setBlog(res.data.cowNew);
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };
  return (
    <div className="bg-[#FFFBE8] overflow-x-hidden">
      <Header open={open} setOpen={setOpen} />
      <div className="pt-[150px] mb-10">
        <h1 className="text-3xl text-center font-[500] w-[60%] m-auto">
          {blog?.title}
        </h1>
        <div className="mb-10 flex justify-center">
          <img src={red_than} alt="red_than" />
        </div>
        <div className="xs:w-[90%] sm:w-[50%] m-auto blog_content">
          <Markup content={blog?.content} />
          <hr className="mt-5" />
          <p className="mt-2">
            By {blog?.author} Published On:{' '}
            {moment(blog?.publishDate).format('MMMM Do YYYY')} Categories: News
            &nbsp;
            {blog?.comments?.length} Comments
          </p>
          <p className="mb-2">
            {/* Tags: Advisory Board, Consulting, Owl FIFA PSC, Rose Creative
            Marketing, SIXSTARK */}
          </p>
          <hr />

          {blog?.comments?.length > 0 && (
            <div className="mt-10">
              <h1>{blog.comments.length} Comments</h1>
              {blog.comments.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-start"
                  style={{ borderBottom: '1px solid #ccc' }}
                >
                  <div className="mr-3">
                    <img src={dumyLogo} alt="dumyLogo" />
                  </div>
                  <div>
                    <div className="mt-4">
                      <span className="font-bold mr-2">{item.name}</span>
                      <span>
                        {moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}
                      </span>
                    </div>
                    {/* {!item.approved && (
                    <p>
                      <i>Your comment is awaiting moderation.</i>
                    </p>
                  )} */}
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Leave A Comment */}
          <h1 className="font-[500] text-xl mt-5">Leave A Comment</h1>
          <form onSubmit={(e) => onCommentPost(e)}>
            <TextArea
              id={'comment'}
              name={'comment'}
              placeholder={'Comment...'}
              value={comment?.comment}
              onChange={handleComment}
            />
            <div className="flex">
              <div className="mr-2">
                <InputField
                  type={'text'}
                  placeholder={'Name (required)'}
                  name={'name'}
                  value={comment?.name}
                  onChange={handleComment}
                  required={true}
                />
              </div>
              <div className="mr-2">
                <InputField
                  type={'email'}
                  placeholder={'Email (required)'}
                  name={'email'}
                  value={comment?.email}
                  onChange={handleComment}
                  required={true}
                />
              </div>
              <div>
                <InputField
                  type={'text'}
                  placeholder={'Website'}
                  name={'website'}
                  value={comment?.website}
                  onChange={handleComment}
                  required={false}
                />
              </div>
            </div>
            <Checkbox label="Save my name, email, and website in this browser for the next time I comment." />
            <div className="mt-5">
              <button
                type="submit"
                className="bg-[#C9AC78] hover:bg-black text-white font-bold py-2 px-4 rounded"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <div className="absolute h-full w-full overflow-hidden bg-[#262629]">
        <div className="relative h-[250px] md:ml-20 md:block xs:flex xs:justify-center">
          <img
            className="absolute footer_cow_nose  xs:w-[70%]"
            src={footerflower}
            alt="footerflower"
          />
        </div>
        <div className="absolute md:bottom-[70px] xs:bottom-[40px] left-0 right-0">
          <div className="sm:flex sm:items-end  xs:block xs:w-[90%] w-[1200px] mx-auto">
            <div className="sm:w-[50%] xs:w-[100%] text-white">
              <div>
                <img
                  className="md:w-[80px] xs:w-[50px]"
                  src={footerlogo}
                  alt="footerlogo"
                />
              </div>
              <ul className="sm:text-[12px] xs:text-xs md:mt-3 xs:mt-2">
                <li>CONTACT</li>
                <li>PRIVACY POLICY</li>
                <li>COOKIES</li>
                <li>TERMS & CONDITIONS</li>
              </ul>
              <p className="sm:text-[12px] xs:text-xs font-bold md:mt-2 xs:mt-1 leading-tight">
                COW LEVEL AG
              </p>
              <p className="leading-tight sm:text-[12px] xs:text-xs">
                Blegistrasse 1, 6343 Rotkreuz, Switzerland
                <br />
                <span className="sm:text-[12px] xs:text-xs hover:text-[#cf2e2e] cursor-pointer">
                  info@cowlevel.ch
                </span>
              </p>

              <div className="flex md:mt-3 sm:mb-1 xs:mt-1">
                <a
                  href="https://de-de.facebook.com/CowLevelAG/"
                  target="_blank"
                >
                  <img
                    className="md:w-[30px] xs:w-[20px] mr-2"
                    src={fb}
                    alt="fb"
                  />
                </a>
                <a href="https://twitter.com/CowLevel1" target="_blank">
                  <img
                    className="md:w-[30px] xs:w-[20px] mr-2"
                    src={tw}
                    alt="tw"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCX6ZAFWb80J7B7CqQi00JmA/featured"
                  target="_blank"
                >
                  <img
                    className="md:w-[30px] xs:w-[20px] mr-2"
                    src={yt}
                    alt="yt"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/cow-level-ag/"
                  target="_blank"
                >
                  <img
                    className="md:w-[30px] xs:w-[20px] mr-2"
                    src={li}
                    alt="li"
                  />
                </a>
              </div>
            </div>
            <div className="sm:w-[50%] xs:w-[100%] xs:mt-2 xs:block sm:flex justify-end items-center">
              <div className="text-white pr-5">
                <h3 className="md:text-[16px] xs:text-xs xs:mt-0">
                  JOIN THE HERD
                </h3>
                <p className="md:text-[14px] xs:text-xs md:mt-2 xs:mt-0">
                  Apply for &nbsp;
                  <span className="hover:text-[#cf2e2e] cursor-pointer">
                    <a href="mailto:info@cowlevel.ch">info@cowlevel.ch</a>
                  </span>
                </p>
              </div>
              <div className="xs:w-[100%] xs:mt-2 sm:w-[50%]">
                <img
                  className="sm:w-full xs:w-[50%] m-auto"
                  src={footer_animation}
                  alt="footer_animation"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-[30px] md:py-[20px] xs:py-3 text-[18px] bg-[#1D242D]">
          <p className="md:text-[13px] xs:text-[8px] max-w-[1200px] mx-auto text-gray-400">
            All Rights Reserved. (c) 2023 Cow Level AG
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPreview;
