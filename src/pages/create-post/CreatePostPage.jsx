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

const CreatePostPage = ({ history, match }) => {
  const [fetchedPost, setFetchedPost] = useState(null);
  const [posting, setPosting] = useState(false);
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('programacion');
  const [featuredImg, setFeaturedImg] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (match.params.slug) {
      return;
    }

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
  }, [match.params.slug]);

  useEffect(() => {
    if (match.params.slug) {
      return;
    }

    const postObject = {
      title,
      description,
      content: post,
      slug,
      featured: featuredImg,
      category,
    };
    localStorage.setItem('blogpost', JSON.stringify(postObject));
  }, [
    post,
    title,
    description,
    slug,
    featuredImg,
    category,
    match.params.slug,
  ]);

  useEffect(() => {
    const postSlug = title.toLowerCase().split(' ').join('-');
    setSlug(postSlug);
  }, [title]);

  useEffect(() => {
    if (match.params.slug) {
      //fetch post data
      const fetchPost = async () => {
        try {
          const {
            data: { post },
          } = await axios.get(`/api/posts/${match.params.slug}`);
          setFetchedPost(post);
          setPost(post.post);
          setTitle(post.title);
          setFeaturedImg(post.featuredImage);
          setDescription(post.description);
          setCategory(post.category);
        } catch (error) {
          console.log('error error');
        }
      };

      fetchPost();
    }
  }, [match.params.slug]);

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
            //check if any of the required fields are empty
            if (!title) return alert('Ingrese un titulo');
            if (!category) return alert('Elija una categoria');
            if (!description) return alert('Ingrese una descripcion');
            if (!featuredImg) return alert('Agregue una imagen destacada');
            if (!post) return alert('El post no debe estar vacío');

            setPosting(true);

            try {
              if (!match.params.slug) {
                //CREATE POST
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
                setPosting(false);
                localStorage.removeItem('blogpost');
                history.push(`/post/${newPost.slug}`);
              } else {
                //UPDATE POST
                const {
                  data: { post: newPost },
                } = await axios.post(
                  `/api/posts/edit-post/${fetchedPost.slug}`,
                  {
                    title,
                    category,
                    slug,
                    description,
                    featuredImage: featuredImg,
                    post,
                  }
                );
                history.push(`/post/${newPost.slug}`);
              }
            } catch (error) {
              console.log('error error error todo later');
            }
          }}>
          {match.params.slug
            ? 'Actualizar'
            : posting
            ? 'Publicando'
            : 'Publicar'}
        </Button>
      </div>
    </CreatePostWrapper>
  );
};

export default CreatePostPage;
