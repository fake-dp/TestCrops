import React from 'react';
import styled from 'styled-components';

function ImgBox({ imageData }) {
  return (
    <ImageContainer>
      {imageData ? (
        <img src={imageData} alt="Uploaded" />
      ) : (
        <div>No image uploaded</div>
      )}
    </ImageContainer>
  );
}

export default ImgBox;

const ImageContainer = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #20b2aa;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    font-size: 16px;
    font-weight: bold;
    color: #20b2aa;
  }
`;
