import App from '../App';
import Home from '../containers/Home';
import Child from '../containers/Child';
import GrandChild from '../containers/Child/GrandChild'

const routes = [
    { 
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/child/:id',
                component: Child,
                routes: [
                    { 
                        path: '/child/:id/grand-child',
                        component: GrandChild
                    }
                ]
            }
        ]
    }
]

export default routes;