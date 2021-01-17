import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Quiz from './Quiz';
import Welcome from './Welcome';

function Main() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/quiz" component={Quiz} />
            </Switch>
        </div>
    );
}

export default Main;