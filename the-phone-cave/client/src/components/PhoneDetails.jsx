import { useState, useEffect } from "react";
import axios from "axios";

function PhoneDetails(props) {
  const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
  const { id } = props;
  const [phone, setPhone] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/phones/${id}`)
      .then((response) => setPhone(response.data));
  }, [id]);

  return (
    <div class="col-7">
      <h1>{phone.name}</h1>
      <img
        width="100px"
        src={`images/${phone.imageFileName}`}
        alt={phone.name}
      />
      <p>{phone.manufacturer}</p>
      <p>${phone.price}</p>
    </div>
  );
}

export default PhoneDetails;
