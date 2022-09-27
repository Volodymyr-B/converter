import { useEffect, useState } from "react";
import AppContext from "./context";
import axios from "axios";

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("");
  const [updated, setUpdated] = useState("");
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("UAH");

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
    try {
      axios.get("https://open.er-api.com/v6/latest/UAH").then((data) => {
        setCurrency(data.data.rates);
        setUpdated(new Date(data.data.time_last_update_utc).toDateString());
      });
    } catch (e) {
      alert(e);
    }
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
