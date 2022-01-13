import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhone } from "../services/phoneService";
import LoadingSpinner from "../components/loading-spinner/LoadingSpinner";

const PhoneInfo = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getPhoneData = async () => {
      const phoneInfo = await getPhone(id);
      setLoading(false);
      setPhone(phoneInfo);
    };
    getPhoneData();
  }, []);
  return (
    <div className="info__container">
      {loading && <LoadingSpinner />}
      <div className="info__text_container">
        <h1>{phone.name}</h1>
        <h2>{`by ${phone.manufacturer}`}</h2>
        <p>{phone.description}</p>
        <h3>Details:</h3>
        <ul>
          <li>{`Color: ${phone.color}`}</li>
          <li>{`Price: ${phone.price}€`}</li>
          <li>{`Screen: ${phone.screen}`}</li>
          <li>{`Processor: ${phone.processor}`}</li>
          <li>{`RAM: ${phone.ram}`}</li>
        </ul>
      </div>
      <div className="info__img_container">
        <img
          className="info__img"
          src={`../../images/${phone.imageFileName}`}
          alt={`${phone.name}`}
        />
      </div>
    </div>
  );
};
export default PhoneInfo;
