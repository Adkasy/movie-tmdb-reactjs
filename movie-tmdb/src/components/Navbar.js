import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
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
			</ul>
		</div>
	)
}

export default Navbar
