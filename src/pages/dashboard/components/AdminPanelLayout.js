/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanelLayout = ({ tab, children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-gray-500 w-64 flex-shrink-0">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold text-lg">Admin Panel</span>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <Link
                to="/admin-area/images"
                className={`block p-2 rounded-md text-white ${
                  tab === 'images' && 'bg-gray-700'
                } hover:bg-gray-700`}
              >
                IMAGES
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/admin-area/blogs"
                className={`block p-2 rounded-md text-white ${
                  tab === 'blogs' && 'bg-gray-700'
                } hover:bg-gray-700`}
              >
                BLOGS
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/admin-area/news"
                className={`block p-2 rounded-md text-white ${
                  tab === 'news' && 'bg-gray-700'
                } hover:bg-gray-700`}
              >
                NEWS
              </Link>
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-white p-8 overflow-scroll">{children}</main>
    </div>
  );
};

export default AdminPanelLayout;
