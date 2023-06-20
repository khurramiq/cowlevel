import React, { useState } from 'react';
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';

const EditorConvertToHTML = ({ data, onChange }) => {
  const blocksFromHTML = convertFromHTML(data);
  const content = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  // console.log("htmlToDraft(data)", htmlToDraft(data));
  //   console.log(
  //     "convertFromRaw",
  //     convertFromRaw(convertToRaw(htmlToDraft(data)))
  //   );
  //   const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(content)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    // console.log("editorState", editorState);
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  return (
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onEditorStateChange}
    />
  );
};

export default EditorConvertToHTML;
