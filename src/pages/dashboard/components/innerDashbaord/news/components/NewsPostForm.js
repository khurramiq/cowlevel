import BigEditor from './bigEditor';
import api from '../../../../../../utils/api';

const NewsPostForm = ({
  setCreateNew,
  setBlogs,
  blog,
  setBlog,
  edit,
  setEdit,
}) => {
  const handleBlogFields = (e) => {
    setBlog((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleBlogPublish = (value) => {
    setBlog((prev) => {
      return {
        ...prev,
        publish: value,
      };
    });
  };

  const handleContentChange = (data) => {
    setBlog((prev) => {
      return {
        ...prev,
        content: data,
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!edit) {
      create();
    } else {
      update();
    }
  };

  const create = async () => {
    try {
      var res = await api.post('/cowNew/create', blog, {
        headers: { authorization: `${localStorage.getItem('token')}` },
      });
      if (res.data.savedCowNew && !res.data.error) {
        console.log('res.data.savedCowNew', res.data.savedCowNew);
        setBlogs((prev) => {
          return [...prev, res.data.savedCowNew];
        });
        setBlog({
          coverImageURL: '',
          title: '',
          content: '',
          publish: false,
          author: '',
        });
        setCreateNew(false);
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };
  const update = async () => {
    try {
      var res = await api.post('/cowNew/update', blog, {
        headers: { authorization: `${localStorage.getItem('token')}` },
      });
      if (res.data.updatedBlog && !res.data.error) {
        console.log('res.data.updatedBlog', res.data.updatedBlog);
        setBlogs((prev) => {
          return prev.map((item) => {
            if (item._id === blog._id) {
              return res.data.updatedBlog;
            } else {
              return item;
            }
          });
        });
        alert('Updated');
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {edit ? 'Update News Post' : 'Create News Post'}
        </h1>
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setBlog({
              coverImageURL: '',
              title: '',
              content: '',
              publish: false,
              author: '',
            });
            setCreateNew(false);
            setEdit(false);
          }}
        >
          Back
        </button>
      </div>

      <form onSubmit={handleFormSubmit} className="mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleBlogFields}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverImageURL"
            className="block text-gray-700 font-bold mb-2"
          >
            Cover Image URL
          </label>
          <input
            type="text"
            id="coverImageURL"
            name="coverImageURL"
            value={blog.coverImageURL}
            onChange={handleBlogFields}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          {/* <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows={6}
            required
          /> */}
          <BigEditor
            data={blog.content}
            onChange={handleContentChange}
            placeholder="Write blog Post"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={blog.author}
            onChange={handleBlogFields}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            id="myCheckbox"
            checked={blog.publish}
            name="publish"
            onChange={(e) => handleBlogPublish(e.target.checked)}
            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <label for="myCheckbox" class="ml-2 text-gray-700">
            Publish
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsPostForm;
