import React from "react"
import { useState, useEffect } from "react"
import "./TopRated.css"

const TopRated = () => {
	const [topRated, setTopRated] = useState([])
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/top_rated?api_key=b219cb5c365b97f33e29ec55c592ee3e&language=en-US&page=1"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.results)
				setTopRated(data.results)
			})
	}, [])

	return (
		<>
			<div className="container-toprated">
				{topRated.map((movie) => {
					return (
						<a
							key={movie.id}
							className="inline-block mx-[5px] hover:cursor-pointer hover:scale-95 duration-700"
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className="h-96 rounded-lg border-neutral-800 border-4 hover:border-danger hover:border-2"
							/>

							<p className="text-base font-semibold font-primary mt-2 mb-4 text-center text-red-600 ">
								{movie.title}
							</p>
						</a>
					)
				})}
			</div>
		</>
	)
}

export default TopRated
