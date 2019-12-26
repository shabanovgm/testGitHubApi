import React, { Component } from 'react';
import styled from 'styled-components';
import Select, { OptionTypeBase, ActionMeta } from 'react-select';
import { withRouter } from 'react-router-dom';


import Commit from './components/commit';
import { getDataCommits, getDataBranches } from './services';
import { ICommit } from 'types/commit'


type State = {
  branches: string[];
  commits: ICommit[];
  branch: OptionTypeBase | null;
};
interface IHomeProps {
  location: any;
  match: any;
  history: any;
};

class Home extends Component<IHomeProps, State> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      branch: null,
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
      this.setState({
        commits,
        branches,
        branch: {
          value: branches[0],
          label: branches[0],
        }
      });
    } catch (error) {
      return this.props.history.push('/error')
    }
  }

  selectOption = () => {
    return this.state.branches.map((el: string) => ({
      value: el, label: el,
    }))
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
    const { commits, branch } = this.state;
    return (
      <WrapperHome>
        <Select
          value={branch}
          options={this.selectOption()}
          onChange={this.onChangeBranch}
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