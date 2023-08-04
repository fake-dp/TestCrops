import React, { useRef } from 'react';
import styled from 'styled-components';

function HeaderImgInput({ onChange }) {
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    // 이미지 업로드 버튼 박스
    <HeaderImgInputBox onClick={handleUploadButtonClick}>
      <HeaderImgInputButton type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
      <HeaderImgInputText>이미지 업로드</HeaderImgInputText>
      <UploadIcon>&#128247;</UploadIcon>
    </HeaderImgInputBox>
  );
}

export default HeaderImgInput;

const HeaderImgInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 20px;
`;

const HeaderImgInputText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #20b2aa;
  margin-right: 20px;
  cursor: pointer;
`;

const HeaderImgInputButton = styled.input`
  display: none; /* 숨겨진 input 요소 */
`;

const UploadIcon = styled.span`
  font-size: 34px;
  cursor: pointer;

  /* 호버 효과 */
  &:hover {
    color: #20b2aa;
    transform: scale(1.2);
  }
`;
