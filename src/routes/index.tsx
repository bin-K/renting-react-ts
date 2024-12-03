import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))


interface IRoutes {
  name?: string
  path: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any
  children?: IRoutes[]
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes