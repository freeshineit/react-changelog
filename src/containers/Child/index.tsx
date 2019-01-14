import * as React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

interface childProps extends RouteComponentProps<any> {
    route?: any
}

class Child extends React.Component<childProps, any> {
    render () {
        const {match, route} = this.props;
        const id = match.params.id;
        return (
            <div>
                <div>
                    <h2>Child {id}</h2>
                    <Link to='/child/123412/grand-child'>GrandChild</Link>
                </div>
                <div>{renderRoutes(route.routes)}</div>
            </div>
        )
    }
}

export default withRouter(Child);