import React, { useState } from 'react';
import BigEditor from './bigEditor';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('<p>Write something...</p>');
  const [author, setAuthor] = useState('');

  const handleContentChange = (data) => {
    setContent(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic, e.g., send data to server or update state
    // You can access the values of title, content, and author from the state variables
    console.log('Form submitted:', { title, content, author });

    // Reset form fields
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create Blog Post</h1>

      <form onSubmit={handleFormSubmit} className="mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <BigEditor data={content} onChange={handleContentChange} />
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
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
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

export default BlogPostForm;
