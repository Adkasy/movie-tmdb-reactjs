import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const SimilarMovie = () => {
	const [similarMovie, setSimilarMovie] = useState([])
	const { movieID } = useParams()
	const apiKey = "b219cb5c365b97f33e29ec55c592ee3e"

	useEffect(() => {
		const fetchMovieDetail = async () => {
			try {
				//! Fetch similar movie
				const similarResponse = await fetch(
					`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${apiKey}&language=en-US`
				)
				const similarData = await similarResponse.json()
				console.log(similarData.results, "Ini similar movie")
				setSimilarMovie(similarData.results)
			} catch (error) {
				console.log(error)
			}
		}

		fetchMovieDetail()
	}, [movieID, apiKey])

	return (
		<>
			<div className="justify-center text-white bg-zinc-900">
				<h3 className="text-3xl font-medium mb-6 font-primary text-danger text-center">
					People Also View
					<hr className="mt-5 mb-8 mx-auto w-[86%]"></hr>
				</h3>
				<div className="flex justify-center">
					{similarMovie.slice(0, 5).map((movie) => {
						return (
							<Link
								key={movie.id}
								className="inline-block mx-[5px] hover:cursor-pointer hover:scale-95 duration-700"
								to={`detail/${movie.id}`}
							>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
									className="h-96 rounded-lg border-neutral-800 border-4 hover:border-danger hover:border-2"
								/>
								<p className="text-base font-semibold font-primary mt-2 mb-10 text-center -ml-0 text-red-600">
									{movie.original_title.length > 30
										? movie.original_title.slice(0, 30) + "..."
										: movie.original_title}
								</p>
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default SimilarMovie
