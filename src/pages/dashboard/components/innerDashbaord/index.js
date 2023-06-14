import React from 'react';

const InnerDashbaord = ({ logOut }) => {
  return (
    <div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
};

export default InnerDashbaord;
