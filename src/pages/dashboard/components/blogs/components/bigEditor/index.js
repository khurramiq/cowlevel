import React from 'react';
import EditorConvertToHTML from '../editor';

const BigEditor = ({ data, onChange }) => {
  return (
    <>
      <EditorConvertToHTML data={data} onChange={onChange} />
    </>
  );
};

export default BigEditor;
