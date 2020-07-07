import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputField from '../../components/input-field/InputField';
import TextEditor from '../../components/text-editor/TextEditor';
import Button from '../../components/button/Button';

const CreatePostWrapper = styled.div`
  max-width: 900px;
  margin: 25px auto;
  padding: 0 15px;

  form {
    display: flex;
    flex-direction: column;
    margin: 25px auto;
  }

  .buttons {
    text-align: center;
    margin: 25px auto;
  }
`;

const CreatePostPage = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const savedPost = JSON.parse(localStorage.getItem('blogpost'));

    if (savedPost && savedPost.title) {
      setTitle(savedPost.title);
    }
    if (savedPost && savedPost.description) {
      setDescription(savedPost.description);
    }
    if (savedPost && savedPost.content) {
      setContent(savedPost.content);
    }
  }, []);

  useEffect(() => {
    const postObject = {
      title,
      description,
      content,
    };
    localStorage.setItem('blogpost', JSON.stringify(postObject));
    console.log(content);
  }, [content, title, description]);

  return (
    <CreatePostWrapper>
      <form onSubmit={e => e.preventDefault()}>
        <label>Titulo: </label>
        <InputField
          placeholder="Titulo del post"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <label>Descripcion: </label>
        <InputField
          placeholder="Descripcion del post"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </form>
      <h4>Post:</h4>
      <TextEditor content={content} setContent={setContent} />
      <div className="buttons">
        <Button
          onClick={() => {
            localStorage.removeItem('blogpost');
          }}>
          Publicar
        </Button>
      </div>
    </CreatePostWrapper>
  );
};

export default CreatePostPage;
