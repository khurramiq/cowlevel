import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'John Doe',
      date: 'June 1, 2023',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'Jane Smith',
      date: 'June 5, 2023',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <p className="mb-4">{post.content}</p>
            <p className="text-gray-700 font-bold">Author: {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
