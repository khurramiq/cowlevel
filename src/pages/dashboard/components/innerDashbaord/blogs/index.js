import React, { useEffect, useState } from 'react';
import BlogPostForm from './components/BlogPostForm';
import api from '../../../../../utils/api';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [createNew, setCreateNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [blog, setBlog] = useState({
    coverImageURL: '',
    title: '',
    content: '',
    publish: false,
    author: '',
  });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async (data) => {
    try {
      var res = await api.get('/blog');
      if (res.data.items && !res.data.error) {
        setBlogs(res.data.items);
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };
  const deleteBlog = async (id) => {
    var result = window.confirm('Are you sure you want to delete this item?');
    if (result) {
      // Code to execute if the user clicked OK
      try {
        var res = await api.delete(`/blog/${id}`);
        if (!res.data.error) {
          setBlogs((prev) => {
            return [...prev.filter((item) => item._id !== id)];
          });
        } else {
          console.log('res.data.error', res.data.error);
        }
      } catch (e) {
        console.log('e.message', e.message);
      }
    } else {
      // Code to execute if the user clicked Cancel
      console.log('Deletion canceled.');
    }
  };

  return (
    <>
      {createNew || edit ? (
        <BlogPostForm
          setBlogs={setBlogs}
          setCreateNew={setCreateNew}
          edit={edit}
          setEdit={setEdit}
          blog={blog}
          setBlog={setBlog}
        />
      ) : (
        <div className="container mx-auto py-8">
          <div class="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Blogs</h1>
            <button
              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setCreateNew(true);
              }}
            >
              New Blog
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blogs.map((item, i) => (
              <div key={i} className="relative overflow-hidden group">
                <img
                  className="h-[230px] m-auto"
                  src={item?.coverImageURL}
                  alt="fipme"
                />
                <div className="absolute top-0 right-0 p-2 space-x-2 z-10">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/blog-preview/${item._id}`}>
                      <i className="fal fa-eye text-white"></i>
                    </Link>
                  </button>
                  <button
                    className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setBlog(item);
                      setEdit(true);
                    }}
                  >
                    <i className="fal fa-edit text-white"></i>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteBlog(item._id)}
                  >
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
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
                    {item.title}
                  </h4>
                  <p className="text-sm font-[300]">Blog</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
