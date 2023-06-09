import React from "react"
import { useState, useEffect } from "react"
import "./UpComing.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const UpComing = () => {
	// const [upComing, setUpComing] = useState([])
	const { upComing } = useSelector((state) => state)
	const dispatch = useDispatch()
	const fetchUpComing = (payload) => {
		return { type: "fetch/upComing", payload: payload }
	}

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/upcoming?api_key=b219cb5c365b97f33e29ec55c592ee3e&language=en-US&page=1"
		)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data.results)
				// setUpComing(data.results)
				data.results.map((perData) => {
					dispatch(fetchUpComing(perData))
				})
			})
	}, [])

	return (
		<>
			<div className="container-upcoming">
				{upComing.map((movie) => {
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

							<p className="text-base font-semibold font-primary mt-2 mb-4 text-center -ml-7 text-red-600">
								{movie.title}
							</p>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default UpComing
