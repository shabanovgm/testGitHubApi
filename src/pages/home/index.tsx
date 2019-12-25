import React, { Component } from 'react';
import styled from 'styled-components';

import Commit from './components/commit';
import getDataCommits from './services';

export default class Home extends Component<{}> {

  componentDidMount() {
    this.fetchCommits();
  }

  fetchCommits = async () => {
    const data = await getDataCommits();
    console.log(data)
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