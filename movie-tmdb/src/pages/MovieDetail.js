import React, { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const MovieDetail = () => {
	const [movieDetail, setMovieDetail] = useState({})

	const { movieID } = useParams()

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjE5Y2I1YzM2NWI5N2YzM2UyOWVjNTVjNTkyZWUzZSIsInN1YiI6IjY0NTY0YTEzOTFmMGVhMDE3YmNjYTI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1tqpEOH0nvGoiXw3M0GUHBH8Qfx-mDE7dZnpCH0cnF8",
		},
	}

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
			options
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setMovieDetail(data)
			})
	}, [])

	return (
		<>
			<p>{movieDetail.runtime}</p>
			<p>{movieDetail.title}</p>
		</>
	)
}

export default MovieDetail
