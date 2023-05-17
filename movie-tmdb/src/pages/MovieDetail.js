import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const MovieDetail = () => {
	const [movieDetail, setMovieDetail] = useState({})
	const [trailerKey, setTrailerKey] = useState("")
	const { movieID } = useParams()
	const apiKey = "b219cb5c365b97f33e29ec55c592ee3e"

	useEffect(() => {
		const fetchMovieDetail = async () => {
			try {
				//! Fetch detail movie
				const detailResponse = await fetch(
					`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`
				)
				const detailData = await detailResponse.json()
				// console.log(detailData)
				setMovieDetail(detailData)

				//! Fetch movie trailer
				const trailerResponse = await fetch(
					`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}&language=en-US`
				)
				const trailerData = await trailerResponse.json()
				const trailer = trailerData.results
				// console.log(trailer, "Ini trailer")
				const trailerVideos = trailer.filter(
					(video) => video.type === "Trailer"
				)
				// console.log(trailerVideos, "Ini trailer videos")
				setTrailerKey(trailerVideos[0].key)
			} catch (error) {
				console.log(error)
			}
		}

		fetchMovieDetail()
	}, [movieID, apiKey])

	return (
		<div className="flex justify-center text-white bg-zinc-900">
			<img
				src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
				alt={movieDetail.original_title}
				className="rounded-xl mx-8 my-10 border-neutral-800 border-[6px] h-[580px]"
			/>
			<div className="my-10 mx-5 w-[500px]">
				<h3 className="text-4xl font-semibold mb-4 font-primary">
					{movieDetail.original_title}
				</h3>
				<hr className="mb-8"></hr>
				<h4 className="mb-4">
					<span className="font-bold text-red-600">Rating:</span>{" "}
					{Math.round(movieDetail.vote_average)} / 10
				</h4>
				<h4 className="mb-4">
					<span className="font-bold text-red-600">Duration:</span>{" "}
					{movieDetail.runtime} Minutes
				</h4>
				<p className="mb-4">
					<span className="font-bold text-red-600">Synopsis:</span>{" "}
					{movieDetail.overview}
				</p>
				{movieDetail.genres && (
					<div className="mb-4">
						<h4 className="font-bold text-red-600">Genres:</h4>
						<ul className="flex">
							{movieDetail.genres.map((genre) => (
								<li
									key={genre.id}
									className="my-1 mr-2 w-60 rounded-full text-center font-semibold text-white bg-gray-600 hover:bg-gray-700"
								>
									#{genre.name}
								</li>
							))}
						</ul>
					</div>
				)}
				<p className="mb-4">
					<span className="font-bold text-red-600">Movie ID:</span>{" "}
					{movieDetail.id}
				</p>
				<hr className="mt-8 mb-5"></hr>
				{trailerKey && (
					<div className="mb-4">
						<div
							style={{
								width: "100%",
								paddingBottom: "56.25%",
								position: "relative",
							}}
						>
							<iframe
								title="Movie Trailer"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
								}}
								src={`https://www.youtube.com/embed/${trailerKey}`}
								frameBorder="0"
								allowFullScreen
								className="rounded-lg"
							></iframe>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default MovieDetail
