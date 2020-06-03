import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Routers from './routeMap'
import Test from '../component/Test'


class RouterGuard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: false
        }
    }
 
    render() {
        return (
            <Router>
                <Switch>
                    {Routers.map((item, index) => {
                        return <Route exact key={index} path={item.path}  render={(props) =>
                            (!item.auth
                                ? (!item.childPath ? (<item.component {...props} />) :
                                    (<item.component>
                                        <Switch>
                                            <Route path={item.childPath} component={item.childComponent} />
                                        </Switch>
                                    </item.component>))
                                : (this.state.token ? <item.component {...props} /> : <Redirect to={{
                                    pathname: '/Login',
                                    state: { from: props.location }
                                }} />)
                            )} />
                    })}
                </Switch>
            </Router>
        )
    }
}

export default RouterGuard

