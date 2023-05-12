import React from "react"

const Navbar = () => {
	return (
		<div className="bg-primary text-white font-primary h-14 sticky top-0 z-50">
			<ul className="h-full flex items-center mx-10 text-lg justify-center">
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					Home
				</li>
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					Now Playing
				</li>
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					Up Coming
				</li>
				<li className="hover:text-red-500 mr-8 hover:cursor-pointer hover:scale-105 duration-150">
					Top Rated
				</li>
			</ul>
		</div>
	)
}

export default Navbar
