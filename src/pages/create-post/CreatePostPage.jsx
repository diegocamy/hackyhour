import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextEditor from '../../components/text-editor/TextEditor';
import PostPreview from '../../components/post-preview/PostPreview';
import Button from '../../components/button/Button';

const CreatePostWrapper = styled.div`
  max-width: 900px;
  margin: 25px auto;

  .buttons {
    text-align: center;
    margin: 25px auto;
  }
`;

const CreatePostPage = () => {
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const savedPost = localStorage.getItem('blogpost');
    savedPost && setContent(JSON.parse(savedPost));
  }, []);

  useEffect(() => {
    localStorage.setItem('blogpost', JSON.stringify(content));
  }, [content]);

  return (
    <CreatePostWrapper>
      {preview ? (
        <PostPreview post={content} />
      ) : (
        <TextEditor content={content} setContent={setContent} />
      )}
      <div className="buttons">
        <Button onClick={() => setPreview(!preview)}>
          {!preview ? 'Vista Previa' : 'Volver a Edición'}
        </Button>
      </div>
    </CreatePostWrapper>
  );
};

export default CreatePostPage;
