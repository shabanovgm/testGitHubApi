import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

export default class ErrorPage extends Component<{}> {
  render() {
    return (
      <Alert variant="danger">
        <Alert.Heading>
          Somthing went wrong!
        </Alert.Heading>

        <p>
          User or repo or branch not found
        </p>
      </Alert>
    )
  }
}

