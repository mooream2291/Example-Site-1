import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

const InfoSection = ({ 
  primary, 
  lightBg,
  imgStart,
  buttonLabel,
  description,
  headline,
  lightText,
  lightTextDesc,
  img,
  alt,
  start
 }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>     
    </>
  );
};

export default InfoSection;
 