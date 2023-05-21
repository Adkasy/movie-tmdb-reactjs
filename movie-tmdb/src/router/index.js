import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Layout from "../pages/Layout"
import MovieDetail from "../pages/MovieDetail"
import SimilarMovie from "../pages/SimilarMovie"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/now-playing",
				element: <h1>Ini now playing</h1>,
			},
			{
				path: "/up-coming",
				element: <h1>Ini up coming</h1>,
			},
			{
				path: "/top-rated",
				element: <h1>Ini top rated</h1>,
			},
			{
				path: "/detail/:movieID",
				element: <MovieDetail />,
			},
			{
				path: "/similar/:movieID",
				element: <MovieDetail />,
			},
		],
	},
])

export default router
