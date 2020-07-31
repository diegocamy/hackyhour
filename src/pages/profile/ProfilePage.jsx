import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../axios/axios';

import AuthorCard from '../../components/author-card/AuthorCard';
import BigCard from '../../components/big-card/BigCard';

const ProfileContainer = styled.div`
  margin: auto;
  max-width: 700px;
`;

const ProfilePage = ({ match }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { user: fetchedUser, posts: fetchedPosts },
        } = await axios.get(`/api/users/${match.params.id}`);
        setUser(fetchedUser);
        if (fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [match]);

  if (!user) return <h2>Loading!</h2>;

  if (user) {
    return (
      <ProfileContainer>
        <AuthorCard
          authorAvatar={user.picture}
          name={user.name}
          bio={user.bio}
          authorId={user._id}
        />
        {posts.map(p => {
          return (
            <BigCard
              key={p.id}
              authorName={user.name}
              postCategory={p.category}
              authorPhoto={user.picture}
              postImg={p.featuredImage}
              title={p.title}
              description={p.description}
              likes={p.likes}
              updatedAt={p.updatedAt}
              authorId={user._id}
              category={p.category}
              postSlug={p.slug}
            />
          );
        })}
      </ProfileContainer>
    );
  }
};

export default ProfilePage;
