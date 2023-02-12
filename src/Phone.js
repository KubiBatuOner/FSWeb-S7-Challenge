import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export default function Phone() {
  const [number, setNumber] = useState();
  return (
    <PhoneInput
      placeholder="Telefon numarası giriniz!"
      defaultCountry="TR"
      value={number}
      onChange={setNumber}
      data-cy="inputTelefon"
    />
  );
}
