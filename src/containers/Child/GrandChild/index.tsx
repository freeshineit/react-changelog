import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface grandChildProps extends RouteComponentProps<any> {
}

class GrandChild extends React.Component<grandChildProps, any> {
    render () {
        const {match} = this.props;
        const id = match.params.id;
        return (
            <div>router `/child/{id}/grand-child`</div>
        )
    }
}

export default withRouter(GrandChild);