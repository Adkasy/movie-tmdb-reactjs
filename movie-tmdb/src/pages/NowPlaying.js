import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const NowPlaying = () => {
	const [nowPlaying, setNowPlaying] = useState([])

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/now_playing?api_key=b219cb5c365b97f33e29ec55c592ee3e&language=en-US&page=1"
		)
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
				throw new Error("Network response was not ok.")

				//! Ini cara lain menggunakan ternary opeartion (alternatif aja)
				// return response.ok ? response.json() : Error("Error nih")
			})

			.then((data) => {
				// console.log(data, "<-- Ini data masih dalam bentuk mentah")
				// console.log(data.results, "<--- Ini hasil jadinya")
				setNowPlaying(data.results)
			})

			.catch((error) => {
				console.error("There was a problem with the fetch operation:", error)
			})
	}, [])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get(
	// 				"https://api.themoviedb.org/3/movie/now_playing?api_key=b219cb5c365b97f33e29ec55c592ee3e&language=en-US&page=1"
	// 			)
	// 			console.log(response.data.results, "Ini fetching dengan axios")
	// 			setNowPlaying(response.data.results)
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<>
			{nowPlaying.map((movie) => {
				return (
					<a
						key={movie.id}
						className="inline-block mx-[5px] hover:cursor-pointer hover:scale-95 duration-700"
					>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							className="h-96"
						/>

						<p className="text-xs font-primary mt-2 mb-4 text-center text-white">
							{movie.title}
						</p>
					</a>
				)
			})}
		</>
	)
}

export default NowPlaying
