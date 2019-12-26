import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Commit from './components/commit';
import { getDataCommits, getDataBranches } from './services';

export default class Home extends Component<{}> {
  constructor(props: any) {
    super(props);
    this.state = {
      branches: [],
      commits: [],
    };
  }

  componentDidMount() {
    this.fetchCommits();
  }

  fetchCommits = async () => {
    const branches = await getDataBranches();

    const commits = await getDataCommits(branches[0]);
    this.setState({ commits, branches })
    console.log(this.state)
  }

  render() {
    const { branches, commits }: any = this.state;
    return (
      <WrapperHome>
        <Select
          defaultValue={branches[0]}
          options={branches}
        />
        <Commit commitName={'Commit name'} commitHash={'Commit hash'} />
      </WrapperHome>
    )
  }
}

const WrapperHome = styled.section`
  width: 80%;
  margin: 20px auto;
`