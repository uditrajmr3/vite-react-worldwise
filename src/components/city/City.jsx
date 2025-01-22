import { useParams, useSearchParams } from "react-router-dom";

import styles from "./City.module.css";
import { currentCity } from "../../data/temp_city";
import formatDate from "../../utils/formatDate";

function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { lat, lng } = Object.fromEntries(searchParams);

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <h2>
        Position: Lat: {lat}, Lng: {lng}
      </h2>

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

      <div>{/* <ButtonBack /> */}</div>
    </div>
  );
}

export default City;
