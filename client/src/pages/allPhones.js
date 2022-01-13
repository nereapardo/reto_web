import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPhones } from "../services/phoneService";
import LoadingSpinner from "../components/loading-spinner/LoadingSpinner";

const AllPhones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPhoneData = async () => {
      const allPhones = await getPhones();
      setPhones(allPhones);
      setLoading(false);
    };
    getPhoneData();
  }, []);

  return (
    <div className="home">
      <h1 className="brand-name">The Phone Cave</h1>
      <h2>Our phones</h2>
      {loading && <LoadingSpinner />}
      <ul>
        {phones?.map((phone) => {
          return (
            <li key={phone.id}>
              <Link to={`/${phone.id}`}>{phone.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AllPhones;
