const { createStore } = require("redux")

const initialState = {
	counter: 0,
	user: ["A", "B", "C"],
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
		default:
			return state
	}
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch((action = { type: "counter/incremented", payload: 10 }))
store.dispatch((action = { type: "counter/incremented", payload: 20 }))
store.dispatch({ type: "counter/decremented", payload: 15 })
store.dispatch({
	type: "counter/decremented",
	payload: 100,
	newUser: "D",
})
