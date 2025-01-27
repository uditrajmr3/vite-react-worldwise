import styles from "./CountryList.module.css";
import Spinner from "../spinner/Spinner";
import CountryItem from "./CountryItem";
import Message from "../common/message/Message";
import { useCities } from "../../hooks/useCities";

function CountryList() {
  const { cities, isLoading, error } = useCities().state;

  if (isLoading) return <Spinner />;

  if (error) return <p className={styles.error}>{error}</p>;

  if (!cities.length) {
    return <Message message="Add Cities by clicking on the map" />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
