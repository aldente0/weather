const defaultState = {
	weather: [],
};

const GET_WEATHER = 'GET_WEATHER';

export const weatherReducer = (state = defaultState, action) => {
	switch (state.type) {
		case GET_WEATHER:
			return {
				...state,
				weather: [...state.weather, action.payload],
			};
	}
};

export const getWeatherAction = (payload) => {
	return { type: GET_WEATHER, payload };
};
