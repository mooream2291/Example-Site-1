import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
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
                <Heading lightText={lightText}></Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                  {/* <Link to='/message'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                  </Link> */}
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
 