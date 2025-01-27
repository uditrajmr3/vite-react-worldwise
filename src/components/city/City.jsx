import { useParams } from "react-router-dom";

import styles from "./City.module.css";
import formatDate from "../../utils/formatDate";
import { useCities } from "../../hooks/useCities";
import { useEffect } from "react";
import Spinner from "../spinner/Spinner";
import BackButton from "../common/backButton/BackButton";

function City() {
  const { id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const { lat, lng } = Object.fromEntries(searchParams);

  const { currentCity, isLoading } = useCities().state;
  const { fetchCityDetails } = useCities();

  useEffect(
    function () {
      fetchCityDetails(id);
    },
    [fetchCityDetails, id]
  );

  if (isLoading || !currentCity) return <Spinner />;
  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
