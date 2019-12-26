import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Commit from './components/commit';
import { getDataCommits, getDataBranches } from './services';
import { ICommit } from 'types/commit'

type State = {
  branches: string[],
  commits: ICommit[],
}

export default class Home extends Component<{}, State> {
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

  selectOption = () => {
    return this.state.branches.map((el: string) => ({
      value: el, label: el,
    }))
  }

  render() {
    const {commits} = this.state;
    return (
      <WrapperHome>
        <Select
          defaultValue={this.selectOption()[0]}
          options={this.selectOption()}
        />
        <Commit commits={commits} />
      </WrapperHome>
    )
  }
}

const WrapperHome = styled.section`
  width: 80%;
  margin: 20px auto;
`