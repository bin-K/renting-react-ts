import { lazy, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))

interface IRoutes {
	name?: string
	path: string
	element: ReactNode
	children?: IRoutes[]
}

const routes: IRoutes[] = [
	{
		path: '/',
		element: <Navigate to="/login" />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]

export default routes
