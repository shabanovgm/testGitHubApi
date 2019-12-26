import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';


import Commit from './components/commit';
import { getDataCommits, getDataBranches } from './services';
import { ICommit } from 'types/commit'

type State = {
  branches: string[],
  commits: ICommit[],
}
interface IHomeProps {
  location: any,
  match: any,
  history: any,
}

class Home extends Component<IHomeProps, State> {
  constructor(props: IHomeProps) {
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
    try {
      const branches = await getDataBranches();
      const commits = await getDataCommits(branches[0]);
      this.setState({ commits, branches })
    } catch (error) {
      return this.props.history.push('/error')
    }
  }

  selectOption = () => {
    return this.state.branches.map((el: string) => ({
      value: el, label: el,
    }))
  }

  changeBranch = async (branchName: any) => {
    try {
      const commits = await getDataCommits(branchName);
      this.setState({
        commits
      })

    } catch (error) {
      return this.props.history.push('/error')
    }
  }

  render() {
    const { commits } = this.state;
    return (
      <WrapperHome>
        <Select
          defaultValue={this.selectOption()[0]}
          options={this.selectOption()}
          onChange={this.changeBranch}
        />
        <Commit commits={commits} />
      </WrapperHome>
    )
  }
}

export default withRouter(Home);



const WrapperHome = styled.section`
  width: 80%;
  margin: 20px auto;
`