import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import App from '../App'
import ParentComponent from '../component/ParentComponent'
import ChildComponent from '../component/ChildComponent'
import fnComponent from '../component/fnComponent'
import Login from '../component/Login'

export default function () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Parent" render={() => (
                    <ParentComponent>
                        <Switch>
                            <Route path="/Parent/Child" component={ChildComponent} />
                        </Switch>
                    </ParentComponent>
                )} />
                <Route path="/FnComponent"  component={fnComponent} />
                <Route path="/Login"  component={Login} />
            </Switch>
        </Router>
    )
}