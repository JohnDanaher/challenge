import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${API_URL}/phones`).then((response) => {
      setPhones(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {phones.map((cellPhones) => {
            return (
              <div className="row" key={cellPhones.id}>
              <div className="col-5">
              <div className="list-group">
                <Link className="list-group-item list-group-item-action" key={cellPhones.id} to={`/${cellPhones.id}`}>
                  {cellPhones.name}
                </Link>
                </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default PhoneList;
