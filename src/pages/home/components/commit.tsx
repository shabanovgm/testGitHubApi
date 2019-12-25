import React from 'react';
import styled from 'styled-components';

interface Commit {
  commitHash: string,
  commitName: string,
}

const Commit: React.FunctionComponent<Commit> = ({commitHash, commitName}) => {
  return (
    <CommitWrapper>
      <CommitHash>{commitHash}</CommitHash>
      <CommitName>{commitName}</CommitName>

    </CommitWrapper>
  );
}

export default Commit;

const CommitWrapper = styled.header`
  display: flex;
`
const CommitHash = styled.header`
  width: 50%;
`
const CommitName = styled.header`
  width: 50%;
`