import React from 'react';
import AdminPanelLayout from '../AdminPanelLayout';
import { useParams } from 'react-router-dom';
import Images from './images';
import Blogs from './blogs';
import News from './news';

const InnerDashbaord = ({ logOut }) => {
  let { tab } = useParams();
  return (
    <div>
      {/* <button onClick={() => logOut()}>Logout</button> */}
      <AdminPanelLayout tab={tab}>
        {tab === 'images' && <Images />}
        {tab === 'blogs' && <Blogs />}
        {tab === 'news' && <News />}
      </AdminPanelLayout>
    </div>
  );
};

export default InnerDashbaord;
