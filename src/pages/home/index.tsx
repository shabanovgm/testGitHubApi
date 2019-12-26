import React, { Component } from 'react';
import styled from 'styled-components';
import Select, { OptionTypeBase, ActionMeta } from 'react-select';
import { withRouter } from 'react-router-dom';
import { History, Location } from 'history';

import Commit from './components/commit';
import { getDataCommits, getDataBranches } from './services';
import { ICommit } from 'types/commit';
import { iBranch } from 'types/branches';


type State = {
  branches: iBranch[];
  commits: ICommit[];
  branch: OptionTypeBase | null;
};

interface IHomeProps {
  location: Location;
  match: any;
  history: History;
};


class Home extends Component<IHomeProps, State> {
  state = {
    branch: null,
    branches: [],
    commits: [],
  }

  async componentDidMount() {
    try {
      const branches: iBranch[] = await getDataBranches();
      this.setState({
        branches,
      });
      this.fetchCommits(branches[0]);

    } catch (err) {
      return this.props.history.push('/error')
    }
  }

  fetchCommits = async (currentBranch: iBranch) => {
    try {
      const commits = await getDataCommits(currentBranch.value);
      this.setState({
        commits,
        branch: currentBranch,
      });
    } catch (error) {
      return this.props.history.push('/error')
    }
  }

  onChangeBranch = async (branch: OptionTypeBase, actionMeta: ActionMeta) => {
    try {
      const commits = await getDataCommits(branch.value);
      this.setState({
        commits,
        branch,
      })
    } catch (error) {
      return this.props.history.push('/error')
    }
  }

  render() {
    const { commits, branch, branches } = this.state;
    return (
      <WrapperHome>
        <Select
          value={branch}
          options={branches}
          onChange={this.onChangeBranch}
        />

        <Commit commits={commits} />
      </WrapperHome>
    )
  }
}

const WrapperHome = styled.section`
  width: 80%;
  margin: 20px auto;
`;

export default withRouter(Home);
