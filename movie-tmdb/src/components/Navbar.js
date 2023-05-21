import React from "react"
import { Link } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux"

const Navbar = () => {
	// const dispatch = useDispatch()
	// const { counter, testNumber } = useSelector((data) => data)
	// const increment = (payload) => {
	// 	return { type: "counter/incremented", payload }
	// }

	return (
		<div className="bg-primary text-white font-primary h-14 sticky top-0 z-50">
			<ul className="h-full flex items-center mx-10 text-lg justify-center">
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					<Link to="/now-playing">Now Playing</Link>
				</li>
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					<Link to="/up-coming">Up Coming</Link>
				</li>
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					<Link to="/top-rated">Top Rated</Link>
				</li>
				{/* Ini untuk coba react-redux - global state management */}
				{/* <button
					className="rounded-lg w-[150px] bg-teal-600 mr-5"
					onClick={() => dispatch(increment(10))}
				>
					Add 10 to counter
				</button>
				{testNumber} */}
			</ul>
		</div>
	)
}

export default Navbar
