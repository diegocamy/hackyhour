import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../axios/axios';
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

const CreatePostPage = ({ history }) => {
  const [posting, setPosting] = useState(false);
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('programacion');
  const [featuredImg, setFeaturedImg] = useState('');
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
      setPost(savedPost.content);
    }
    if (savedPost && savedPost.slug) {
      setSlug(savedPost.slug);
    }
    if (savedPost && savedPost.featured) {
      setFeaturedImg(savedPost.featured);
    }
    if (savedPost && savedPost.category) {
      setCategory(savedPost.category);
    }
  }, []);

  useEffect(() => {
    const postObject = {
      title,
      description,
      content: post,
      slug,
      featured: featuredImg,
      category,
    };
    localStorage.setItem('blogpost', JSON.stringify(postObject));
  }, [post, title, description, slug, featuredImg, category]);

  useEffect(() => {
    const postSlug = title.toLowerCase().split(' ').join('-');
    setSlug(postSlug);
  }, [title]);

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
        <br />
        <label>Imagen Destacada: </label>
        <InputField
          placeholder="Link de la imagen de portada del post"
          value={featuredImg}
          onChange={e => setFeaturedImg(e.target.value)}
        />
        <br />
        <label>Categoria:</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Seleccionar categoría">
          <option value="anuncios">Anuncios</option>
          <option value="campus">Campus</option>
          <option value="hackyhour">HackyHour</option>
          <option value="noticias">Noticias</option>
          <option value="programacion">Programacion</option>
        </select>
      </form>
      <h4>Post:</h4>
      <TextEditor content={post} setContent={setPost} />
      <div className="buttons">
        <Button
          onClick={async () => {
            setPosting(true);
            const {
              data: { post: newPost },
            } = await axios.post('/api/posts', {
              title,
              category,
              slug,
              description,
              featuredImage: featuredImg,
              post,
            });
            localStorage.removeItem('blogpost');
            setPosting(false);
            history.push(`/post/${newPost.slug}`);
          }}>
          {posting ? 'Publicando' : 'Publicar'}
        </Button>
      </div>
    </CreatePostWrapper>
  );
};

export default CreatePostPage;
