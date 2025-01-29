import { useCallback, useEffect, useReducer } from "react";
import { BASE_URL } from "../data/constants";
import { reducer } from "../hooks/citiesReducer";
import { CitiesContext } from "../hooks/useCities";

const initialState = {
  cities: [],
  currentCity: null,
  isLoading: false,
  error: "",
};

export function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const cities = await response.json();
        dispatch({ type: "success", payload: cities });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    }
    fetchCities();
  }, []);

  const fetchCityDetails = useCallback(async function (id) {
    // check if id is same as currentCity.id to avoid unnecessary fetch
    // if (state.currentCity && Number(state.currentCity.id) === Number(id))
    //   return;

    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const city = await response.json();
      dispatch({ type: "fetchedCity", payload: city });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }, []);

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const city = await response.json();
      dispatch({ type: "cityAdded", payload: city });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "cityDeleted", payload: id });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  return (
    <CitiesContext.Provider
      value={{ state, fetchCityDetails, createCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
