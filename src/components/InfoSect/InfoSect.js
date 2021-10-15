import React from 'react'
import { Container } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper
} from './Info.elements';

const InfoSect = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
              Hello I am here.
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>     
    </>
  );
};

export default InfoSect;
 