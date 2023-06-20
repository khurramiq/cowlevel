import React from 'react';
import AdminPanelLayout from '../AdminPanelLayout';
// import Blogs from '../blogs';
import BlogPostForm from '../blogs/components/BlogPostForm';

const InnerDashbaord = ({ logOut }) => {
  return (
    <div>
      {/* <button onClick={() => logOut()}>Logout</button> */}
      <AdminPanelLayout>
        <BlogPostForm />
      </AdminPanelLayout>
    </div>
  );
};

export default InnerDashbaord;
