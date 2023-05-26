import React from 'react';

const CowStorySlide = ({ title, desc }) => {
  return (
    <div>
      <span>
        <strong>
          {title}
          <br />
          <br />
        </strong>
        {desc}
      </span>
    </div>
  );
};

export default CowStorySlide;
