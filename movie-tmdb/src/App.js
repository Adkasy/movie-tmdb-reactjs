import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import NowPlaying from "./pages/NowPlaying.js"
import UpComing from "./pages/UpComing.js"
import TopRated from "./pages/TopRated.js"

function App() {
	return (
		<>
			<div className="bg-zinc-900">
				<Navbar />
				<div className="font-primary text-danger ml-8">
					<h1 className="text-5xl font-bold mt-7 mb-10 text-left">MovieFlix</h1>

					<h3 className="text-2xl text-white font-bold">Now Playing</h3>
					<div className="mt-2 mb-5 w-[97%] h-[1.5px] bg-danger"></div>
					<div className="items-center">
						<NowPlaying />
						{/* Taro tag untuk now playing disini */}
					</div>

					<h3 className="mt-10 text-2xl text-white font-bold">Up Coming</h3>
					<div className="mt-2 mb-5 w-[97%] h-[1px] bg-danger"></div>
					<div className="items-center">
						<UpComing />
						{/* Taro tag untuk up coming disini */}
					</div>

					<h3 className="mt-10 text-2xl text-white font-bold">Top Rated</h3>
					<div className="mt-2 mb-5 w-[97%] h-[1px] bg-danger"></div>
					<div className="items-center">
						{/* Taro tag untuk popular disini */}
						<TopRated />
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
