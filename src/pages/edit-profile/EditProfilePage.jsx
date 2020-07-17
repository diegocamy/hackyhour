import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../context/userContext';
import InputField from '../../components/input-field/InputField';
import Button from '../../components/button/Button';

const EditProfileContainer = styled.div`
  max-width: 700px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  form {
    width: 100%;

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
    }
  }

  button {
    width: fit-content;
    text-align: center;
    margin: auto;
  }
`;

const StyledTextArea = styled.textarea`
  border: 0;
  padding: 5px 15px;
  resize: vertical;
`;

const EditProfilePage = () => {
  const { user } = useContext(UserContext);

  const [userBio, setUserBio] = useState('');
  const [fb, setFb] = useState('');
  const [tw, setTw] = useState('');
  const [ig, setIg] = useState('');
  const [lkd, setLkd] = useState('');
  const [gh, setGh] = useState('');

  useEffect(() => {
    if (user) {
      const {
        bio,
        social: { facebook, twitter, instagram, linkedin, github },
      } = user;
      setUserBio(bio);
      setFb(facebook);
      setTw(twitter);
      setIg(instagram);
      setLkd(linkedin);
      setGh(github);
    }
  }, [user]);

  return (
    <EditProfileContainer>
      <h2>Editar Perfil</h2>
      <form
        action="post"
        onSubmit={e => {
          e.preventDefault();
        }}>
        <label>Bio</label>
        <StyledTextArea
          rows="5"
          placeholder="Cuenta un poco sobre tí..."
          value={userBio && userBio}
          onChange={e => setUserBio(e.target.value)}
        />
        <label>Facebook</label>
        <InputField
          placeholder="Link a tu perfil de Facebook"
          value={fb && fb}
          onChange={e => setFb(e.target.value)}
        />
        <label>Instagram</label>
        <InputField
          placeholder="Link a tu perfil de Instagram"
          value={ig && ig}
          onChange={e => setIg(e.target.value)}
        />
        <label>Twitter</label>
        <InputField
          placeholder="Link a tu perfil de Twitter"
          value={tw && tw}
          onChange={e => setTw(e.target.value)}
        />
        <label>LinkedIn</label>
        <InputField
          placeholder="Link a tu perfil de LinkedIn"
          value={lkd && lkd}
          onChange={e => setLkd(e.target.value)}
        />
        <label>GitHub</label>
        <InputField
          placeholder="Link a tu perfil de GitHub"
          value={gh && gh}
          onChange={e => setGh(e.target.value)}
        />
      </form>
      <br />
      <Button>Guardar</Button>
    </EditProfileContainer>
  );
};

export default EditProfilePage;
