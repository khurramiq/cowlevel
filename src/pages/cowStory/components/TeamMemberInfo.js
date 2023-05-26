import React from 'react';

const TeamMemberInfo = ({ name, role }) => {
  return (
    <div className="w-full absolute bottom-0 mt-2 hidden group-hover:block">
      <p className="text-center text-[14px]">
        <strong>{name}</strong>
      </p>
      <p className="text-center text-[14px]">{role}</p>
      <p className="text-[#9ea0a4] text-2xl font-[800]">in</p>
    </div>
  );
};

export default TeamMemberInfo;
