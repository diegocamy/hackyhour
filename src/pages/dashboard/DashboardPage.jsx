import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthorCard from '../../components/author-card/AuthorCard';
import { UserContext } from '../../context/userContext';
import Button from '../../components/button/Button';

const DashboardContainer = styled.div`
  max-width: 700px;
  margin: 10px auto;

  button:last-child {
    width: 100%;
  }
`;

const DashboardPage = ({ history }) => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Loading</h1>;

  return (
    <DashboardContainer>
      <AuthorCard
        editable
        authorAvatar={user.picture || ''}
        name={user.name}
        shadow
        bio={user.bio}
      />
      <Button onClick={() => history.push('/create')}>Crear post</Button>
    </DashboardContainer>
  );
};

export default DashboardPage;
