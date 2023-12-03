import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../constants/url";
import AppContext from "./context";

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("");
  const [updated, setUpdated] = useState("");
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("UAH");

  const fetchCurrency = async () => {
    try {
      const res = await axios.get(URL);
      setCurrency(res.data.rates);
      setUpdated(new Date(res.data.time_last_update_utc).toDateString());
    } catch (e) {
      alert(e.message);
    }
  };

  const onChangeLeftValue = (e) => {
    const price = e.target.value / currency[leftCurrency];
    const result = price * currency[rightCurrency];
    setLeftInput(e.target.value);
    setRightInput(result.toFixed(2));
  };

  const onChangeRightValue = (e) => {
    const price = e.target.value / currency[rightCurrency];
    const result = price * currency[leftCurrency];
    setRightInput(e.target.value);
    setLeftInput(result.toFixed(2));
  };

  const onChangeLeftCurrency = (e) => {
    setLeftCurrency(e.target.value);
    const price = leftInput / currency[e.target.value];
    const result = price * currency[rightCurrency];
    setRightInput(result.toFixed(2));
  };

  const onChangeRightCurrency = (e) => {
    setRightCurrency(e.target.value);
    const price = rightInput / currency[e.target.value];
    const result = price * currency[leftCurrency];
    setLeftInput(result.toFixed(2));
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  const value = {
    currency,
    updated,
    leftInput,
    rightInput,
    onChangeLeftValue,
    onChangeRightValue,
    onChangeLeftCurrency,
    onChangeRightCurrency,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
