import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
function App() {
	return (
		<Router>
			<Suspense fallback={<div className="route-loading">loading....</div>}>
				<Routes>
					{routes.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
