// import Navbar from "./components/Navbar.js"
// import Footer from "./components/Footer.js"
import NowPlaying from "./pages/NowPlaying.js"
import UpComing from "./pages/UpComing.js"
import TopRated from "./pages/TopRated.js"
import MovieDetail from "./pages/MovieDetail.js"

function App() {
	return (
		<>
			<div className="bg-zinc-900">
				{/* <Navbar /> */}
				<div className="font-primary text-danger ml-8">
					<div className="flex justify-center">
						<h1 className="text-7xl font-bold pt-6 mt-3 mb-16 -ml-16">
							MovieFlix
						</h1>
					</div>

					<h3 className="text-2xl text-white font-bold">Now Playing</h3>
					<div className="mt-2 mb-5 w-[97%] h-[1.5px] bg-danger"></div>
					<div className="items-center">
						<NowPlaying />
					</div>

					<h3 className="mt-10 text-2xl text-white font-bold">Up Coming</h3>
					<div className="mt-2 mb-5 w-[97%] h-[1px] bg-danger"></div>
					<div className="items-center">
						<UpComing />
					</div>

					<h3 className="mt-10 text-2xl text-white font-bold">Top Rated</h3>
					<div className="mt-2 mb-5 w-[97%] h-[1px] bg-danger"></div>
					<div className="items-center pb-10">
						<TopRated />
					</div>
				</div>
				{/* <Footer /> */}
				<MovieDetail />
			</div>
		</>
	)
}

export default App
