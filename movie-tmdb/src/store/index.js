import { legacy_createStore as createStore } from "redux"

const initialState = {
	// counter: 10,
	// testNumber: "Ini test value dari global state",
	// user: ["A", "B", "C"],
	nowPlaying: [],
	upComing: [],
}

function counterReducer(state = initialState, action) {
	switch (action.type) {
		case "counter/incremented":
			return {
				...state,
				counter: state.counter + action.payload,
			}
		case "counter/decremented":
			if (action.newUser) {
				// Pemeriksaan apakah action.newUser terdefinisi
				return {
					...state,
					user: [...state.user, action.newUser],
					counter: state.counter - action.payload,
				}
			}
			return {
				...state,
				counter: state.counter - action.payload,
			}
		case "fetch/nowPlaying":
			return {
				...state,
				nowPlaying: [...state.nowPlaying, action.payload],
			}
		case "fetch/upComing":
			return {
				...state,
				upComing: [...state.upComing, action.payload],
			}
		default:
			return state
	}
}

let store = createStore(counterReducer)

export default store
