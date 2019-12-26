import React from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import { ICommit } from 'types/commit';

interface ICommitProps {
  commits: ICommit[];
}

const Commit: React.FunctionComponent<ICommitProps> = ({ commits }) => (
  <CustomTable striped bordered hover>
    <thead>
      <tr>
        <th>Commit hash</th>
        <th>Commit name</th>
        <th>Author</th>
        <th>Email</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {commits.map((el: ICommit) => (
        <tr key={el.hash}>
          <td>{el.hash}</td>
          <td>{el.name}</td>
          <td>{el.authorName}</td>
          <td>{el.authorEmail}</td>
          <td>{moment(el.date).format('MMMM Do YYYY, h:mm')}</td>
        </tr>
      ))}
    </tbody>
  </CustomTable>
);

const CustomTable = styled(Table)`
  margin: 20px 0;
`;

export default Commit;
