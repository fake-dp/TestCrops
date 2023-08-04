import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderImgInput from './components/HeaderImgInput';
import ImgBox from './components/ImgBox';
import ControlBox from './components/ControlBox';

function Layout(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (imageData) => {
    setSelectedImage(imageData);
  };

  return (
    <Container>
      <HeaderImgInput onChange={handleImageChange} />
      <GridContainer>
        <ImgBox imageData={selectedImage} />
        <ControlBox />
      </GridContainer>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #20b2aa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const GridContainer = styled.div`
  height: 100%;
  display: grid;
    grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
