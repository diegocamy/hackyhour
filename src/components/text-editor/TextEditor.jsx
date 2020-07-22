import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const config = {
  readonly: false,
  spellcheck: false,
  language: 'es',
  buttons: [
    'bold',
    'strikethrough',
    'underline',
    'italic',
    'eraser',
    'ul',
    'ol',
    'paragraph',
    'image',
    'link',
    'undo',
    'redo',
  ],
  removeButtons: [
    'source',
    'fullsize',
    'about',
    'outdent',
    'indent',
    'video',
    'print',
    'table',
    'fontsize',
    'superscript',
    'subscript',
    'file',
    'cut',
    'selectall',
  ],
};

const TextEditor = ({ content, setContent, ...props }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => {}}
    />
  );
};

export default TextEditor;
