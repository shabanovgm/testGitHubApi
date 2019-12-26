import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/home';
import ErrorPage from 'pages/error'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/error" component={ErrorPage} />
            </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
