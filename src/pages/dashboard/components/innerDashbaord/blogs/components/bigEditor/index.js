import React from 'react';
import EditorConvertToHTML from '../editor';

const BigEditor = ({ data, onChange, placeholder }) => {
  return (
    <>
      <EditorConvertToHTML
        data={data}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default BigEditor;
