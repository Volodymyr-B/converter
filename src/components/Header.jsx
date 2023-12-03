import React, { useContext } from "react";
import AppContext from "../context/context";

const Header = () => {
  const { currency } = useContext(AppContext);

  const euro = (currency.UAH / currency.EUR).toFixed(2);
  const dollar = (currency.UAH / currency.USD).toFixed(2);

  return (
    <section className="header">
      <h1 className="title">Currency Converter</h1>
      <ul>
        <li>
          EUR: <b>{euro}</b>
        </li>
        <li>
          USD: <b>{dollar}</b>
        </li>
      </ul>
    </section>
  );
};

export default Header;
