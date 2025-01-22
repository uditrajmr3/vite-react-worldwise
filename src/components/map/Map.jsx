import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { lat, lng } = Object.fromEntries(searchParams);

  function goToForm() {
    navigate("form");
  }

  return (
    <div className={styles.mapContainer} onClick={goToForm}>
      <h1>Map</h1>
      <h2>
        Position: Lat: {lat}, Lng: {lng}
      </h2>
    </div>
  );
}

export default Map;
