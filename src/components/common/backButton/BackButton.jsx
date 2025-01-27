import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

export default function BackButton() {
  const navigate = useNavigate();

  function navigateBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <Button type="back" onClick={navigateBack}>
      &larr; Back
    </Button>
  );
}
