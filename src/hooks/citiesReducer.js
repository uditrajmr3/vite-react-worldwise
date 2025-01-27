export function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "success":
      return { ...state, cities: action.payload, isLoading: false };
    case "error":
      return { ...state, error: action.payload, isLoading: false };
    case "fetchedCity":
      return { ...state, currentCity: action.payload, isLoading: false };
    case "cityAdded":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
      };
    case "cityDeleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
      };
    default:
      throw new Error("Unknown action!!");
  }
}
