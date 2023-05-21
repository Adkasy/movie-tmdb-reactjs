import React from "react"
// import { useSelector } from "react-redux"

const Footer = () => {
	// const counter = useSelector((data) => data.counter)

	return (
		<>
			<footer className="bg-primary text-white flex font-primary text-xs justify-center h-24 w-full bottom-0 left-0 items-center">
				<h1>All Rights Reserved.</h1>
				<div className="ml-10 font-semibold text-lg text-teal-300">
					{/* Ini untuk coba react-redux - global state management */}
					{/* Current counter: {counter} */}
				</div>
			</footer>
		</>
	)
}

export default Footer
