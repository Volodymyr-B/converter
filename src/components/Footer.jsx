import React, { useContext } from "react";
import AppContext from "../context/context";

const Footer = () => {
  const { updated } = useContext(AppContext);

  return <section className="footer">Last Update: {updated}</section>;
};

export default Footer;
