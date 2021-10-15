import React from 'react';
import { InfoSect } from '../../components';
import { homeObj } from './Data'

const Home = () => {
  return (
    <>
      <InfoSect {...homeObj} />
    </>
  )
}

export default Home
