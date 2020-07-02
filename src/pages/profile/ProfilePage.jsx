import React from 'react';
import styled from 'styled-components';

import AuthorCard from '../../components/author-card/AuthorCard';
import BigCard from '../../components/big-card/BigCard';

const ProfileContainer = styled.div`
  margin: auto;
  max-width: 900px;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <AuthorCard
        authorAvatar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Autor ReLoco"
        bio="Me gusta el pan el queso la mermeladamermeladamermeladamermeladamermeladamermeladamermeladamermeladamermeladamermelada y la coca-cola"
      />
      <BigCard
        authorName="Autor ReLoco"
        postCategory="Programacion"
        authorPhoto="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
      />
      <BigCard
        authorName="Autor ReLoco"
        postCategory="Programacion"
        authorPhoto="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
      />
      <BigCard
        authorName="Autor ReLoco"
        postCategory="Programacion"
        authorPhoto="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
      />
    </ProfileContainer>
  );
};

export default ProfilePage;
