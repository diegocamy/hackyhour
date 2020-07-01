import React from 'react';
import styled from 'styled-components';
import AuthorCard from '../../components/author-card/AuthorCard';

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
    </ProfileContainer>
  );
};

export default ProfilePage;
