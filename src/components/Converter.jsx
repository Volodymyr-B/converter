import React, { useContext } from "react";
import AppContext from "../context/context";
import { RiExchangeLine } from "react-icons/ri";

const Converter = () => {
  const {
    leftInput,
    rightInput,
    onChangeLeftValue,
    onChangeRightValue,
    onChangeLeftCurrency,
    onChangeRightCurrency,
  } = useContext(AppContext);

  return (
    <section className="converter">
      <div className="converter_container">
        <div className="input_container">
          <input type="number" value={leftInput} onChange={onChangeLeftValue} />
          <select name="currency" onChange={onChangeLeftCurrency}>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <div className="separator">
        <RiExchangeLine size={40} />
      </div>
      <div className="converter_container">
        <div className="input_container">
          <input
            type="number"
            value={rightInput}
            onChange={onChangeRightValue}
          />
          <select name="currency" onChange={onChangeRightCurrency}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Converter;
