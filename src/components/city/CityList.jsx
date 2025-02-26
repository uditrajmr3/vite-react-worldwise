import styles from "./CityList.module.css";
import Spinner from "../spinner/Spinner";
import CityItem from "./CityItem";
import Message from "../common/message/Message";
import { useCities } from "../../hooks/useCities";

function CityList() {
  const { cities, isLoading, error } = useCities().state;

  if (isLoading) return <Spinner />;

  if (error) return <p className={styles.error}>{error}</p>;

  if (!cities.length) {
    return <Message message="Add Cities by clicking on the map" />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
