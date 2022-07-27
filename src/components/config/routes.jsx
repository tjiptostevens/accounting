import Home from '../home'
import Login from '../site/login'

const routes = {
  web: [
    {
      path: '/',
      component: <Login />,
    },
    {
      path: '/d',
      component: <Home />,
    },
  ],
}

export default routes
