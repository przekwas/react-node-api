import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AddChirp from './AddChirp';
import ChirpList from './ChirpList';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={ChirpList} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;