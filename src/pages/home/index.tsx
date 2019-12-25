import React, { Component } from 'react';
import styled from 'styled-components';

import Commit from './components/commit'

export default class Home extends Component<{}> {

  componentDidMount() {
    
  }

  render() {
    return (
      <WrapperHome>
        <Commit commitName={'Commit name'} commitHash={'Commit hash'} />
      </WrapperHome>
    )
  }
}

const WrapperHome = styled.section`
  width: 80%;
  margin: 20px auto;
`