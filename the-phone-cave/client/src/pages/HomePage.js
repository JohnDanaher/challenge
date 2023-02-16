import PhoneDetails from "../components/PhoneDetails";
import PhoneList from "../components/PhoneList";
import { useParams } from "react-router-dom";

function HomePage() {
  const { id } = useParams();
  return (
    <div
      style={{
        width: "90vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <PhoneList />
      {id && <PhoneDetails id={id} />}
    </div>
  );
}

export default HomePage;
