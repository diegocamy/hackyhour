import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import axios from '../../axios/axios';
import styled from 'styled-components';
import PostPreview from '../../components/post-preview/PostPreview';
import AuthorCard from '../../components/author-card/AuthorCard';
import BigCard from '../../components/big-card/BigCard';
import Button from '../../components/button/Button';

const PostPageWrapper = styled.div`
  max-width: 700px;
  margin: 15px auto;

  h1 {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .like {
    font-size: 1.3rem;
    padding: 25px;
    background: white;
    margin-top: -6px;
    border-radius: 6px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    i {
      color: darkgray;

      &:hover {
        cursor: ${props => (props.user ? 'pointer' : 'cursor')};
      }
    }
  }

  .buttons {
    margin-top: -20px;
    background: white;
    text-align: center;
    padding-bottom: 20px;

    button {
      margin: 5px;
    }
  }

  .relacionados {
    text-align: center;
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const PostPage = ({ history, match }) => {
  const { user } = useContext(UserContext);
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setError(null);
        const {
          data: { post, author },
        } = await axios.get(`/api/posts/${match.params.slug}`);
        if (post && author) {
          setPost({ ...post, author });
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          history.push('/404');
        }
      }
    };

    getPost();
  }, [match.params.slug, history]);

  useEffect(() => {
    if (post) {
      const getRelatedPosts = async () => {
        try {
          const data = { id: post._id };
          const { data: relPosts } = await axios.post(
            `/api/posts/related/${post.category}`,
            {
              ...data,
            }
          );
          setRelatedPosts(relPosts);
        } catch (error) {
          console.log('Error related posts');
        }
      };

      getRelatedPosts();
    }
  }, [post]);

  const likePost = async () => {
    try {
      if (!user) return;
      const {
        data: { post: blogPost, author },
      } = await axios.post(`/api/posts/like/${post._id}`);
      setPost({ ...blogPost, author });
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async () => {
    try {
      if (!user) return;
      const {
        data: { post: blogPost, author },
      } = await axios.post(`/api/posts/dislike/${post._id}`);
      setPost({ ...blogPost, author });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    history.push(`/edit-post/${post.slug}`);
  };

  const handleDelete = async e => {
    if (window.confirm('Esta seguro?')) {
      await axios.delete(`/api/posts/${post._id}`);
      history.push('/');
    }
  };

  if (!post) return <h2>cargando...</h2>;

  if (!post && error) return <h2>{error}</h2>;

  if (post && !error)
    return (
      <PostPageWrapper user={user}>
        <h1>{post.title}</h1>
        <PostPreview post={post.post} featuredImg={post.featuredImage} />
        {/* CHECK IF USER ALREADY LIKED POST */}
        {user && post.likes[user._id] ? (
          // IF ALREADY LIKED SHOW A RED HEART
          <div className="like" onClick={dislikePost}>
            {post.likes && Object.keys(post.likes).length}
            <i className="fas fa-heart" style={{ color: 'red' }}></i>
          </div>
        ) : (
          //IF USER DIDN'T LIKE THE POST, SHOW A GREY HEART
          <div className="like" onClick={likePost}>
            {post.likes && Object.keys(post.likes).length}
            <i className="fas fa-heart"></i>
          </div>
        )}
        {/*CHECK IF USER IS AUTHOR OF THE POST TO SHOW EDIT AND DELETE BUTTONS */}
        {user && user._id.toString() === post.author._id.toString() ? (
          <div className="buttons">
            <Button onClick={handleEdit}>Editar</Button>
            <Button onClick={handleDelete}>Eliminar</Button>
          </div>
        ) : null}

        <AuthorCard
          authorId={post.author._id}
          authorAvatar={post.author.picture}
          name={post.author.name}
          bio={post.author.bio}
        />
        {relatedPosts.length > 0 && (
          <h2 className="relacionados">Posts Relacionados</h2>
        )}
        {relatedPosts.map(rp => {
          return (
            <BigCard
              key={rp._id}
              authorName={rp.author_info[0].name}
              postCategory={rp.category}
              authorPhoto={rp.author_info[0].picture}
              postImg={rp.featuredImage}
              title={rp.title}
              description={rp.description}
              likes={rp.likes}
              updatedAt={rp.updatedAt}
              authorId={rp.author_info[0]._id}
              category={rp.category}
              postSlug={rp.slug}
            />
          );
        })}
      </PostPageWrapper>
    );
};

export default PostPage;
