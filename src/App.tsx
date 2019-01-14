import * as React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import './App.css';
import './App.less';

interface appProps {
	route: any
}

class App extends React.Component<appProps, any> {

	constructor (props: appProps) {
		super(props)
	}

	componentDidMount () {
		console.log(location.href)
	}

	render() {
		const classNames = classnames('app', 'wwww')
		const {route} = this.props
		return (
			<div className={classNames}>
				<h1>App</h1>
				<div>
					<Link to='/' style={{marginRight: 10}}>Home</Link>
					<Link to='/child/123456789' style={{marginRight: 10}}>Child</Link>
				</div>
				<div className='container'>
					{renderRoutes(route.routes)}
				</div>
			</div>
		)
	}
}

export default App;