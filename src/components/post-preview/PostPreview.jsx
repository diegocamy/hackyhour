import React from 'react';
import styled from 'styled-components';
import HtmlParser from 'react-html-parser';

const PreviewContainer = styled.div`
  background: white;
  word-break: break-all;
  width: 100%;
  margin: 25px auto;
  padding: 25px;
  min-height: 350px;

  img {
    max-width: 100%;
  }
`;

const PostPreview = ({ post }) => {
  return <PreviewContainer>{HtmlParser(post)}</PreviewContainer>;
};

export default PostPreview;
