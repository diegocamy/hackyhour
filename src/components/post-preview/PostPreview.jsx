import React from 'react';
import styled from 'styled-components';
import HtmlParser from 'react-html-parser';

const PreviewContainer = styled.div`
  background: white;
  word-break: break-all;
  width: 100%;
  padding: 10px 25px;
  min-height: fit-content;
  border-radius: 6px;

  img {
    width: 100% !important;
    height: 350px !important;
    object-fit: cover;
  }

  iframe {
    min-width: 100%;
  }
`;

const PostPreview = ({ post }) => {
  return <PreviewContainer>{HtmlParser(post)}</PreviewContainer>;
};

export default PostPreview;
