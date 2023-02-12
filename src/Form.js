import React from "react";
import styled from "styled-components";
import malzemeler from "./malzemeler";
import SiparisOlusturma from "./SiparisOlusturma";
import Phone from "./Phone";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: #f8bf75;
`;
const SCContainer = styled.div`
  width:40%
  background-color: #0e141f;
  padding: 20px;
  margin: 5px;`;

const SCSubmit = styled.button`
  color: black;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;
const SCLabel = styled.label`
  color: black;
  font-weight: 700;
`;
const SCError = styled.p`
  color: red;
  font-weight: 500;
  font-size: 15px;
`;
const SCText = styled.span`
  color: black;
  font-weight: 700;
`;
const SCChecked = styled.label`
  color: black;
  font-weight: 500;
`;
const SCOptional = styled.span`
  font-size: 10px;
`;
const SCOrder = styled.div`
  width: 40%;
  padding: 20px;
  margin: 5px;
  color: black;
  font-weight: 500;
  font-size: 20px;
`;

export default function Form(props) {
  const {
    formData,
    handleChange,
    handleSubmit,
    errors,
    buttonDisable,
    siparis,
  } = props;

  return (
    <>
      <SCForm
        id="pizza-form"
        onSubmit={(event) => handleSubmit(event)}
        data-cy="submitFormu"
      >
        <h2
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            padding: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          PİZZA SİPARİŞ FORMU
        </h2>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <p>
            <SCLabel data-cy="labelİsim" htmlFor="name-input">
              İsim:{" "}
            </SCLabel>
            <input
              id="name-input"
              name="isim"
              type="text"
              placeholder="İsim"
              value={formData.isim}
              onChange={(event) => handleChange(event)}
              data-cy="inputİsim"
            />
          </p>
          <SCError data-cy="errorİsim">{errors.isim}</SCError>
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <p>
            <SCLabel
              style={{ display: "flex" }}
              data-cy="labelAdres"
              htmlFor="address-input"
            >
              Adres:{" "}
            </SCLabel>
            <textarea
              id="address-input"
              name="adres"
              type="text"
              placeholder="Adres"
              cols="40"
              rows="5"
              value={formData.adres}
              onChange={(event) => handleChange(event)}
              data-cy="inputAdres"
            />
          </p>
          <SCError data-cy="errorAdres">{errors.adres}</SCError>
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <p>
            <SCText>Pizza Boyutu:</SCText>
            <select
              id="size-dropdown"
              name="boyut"
              value={formData.boyut}
              onChange={(event) => handleChange(event)}
              data-cy="boyutSeçin"
            >
              <option value="">--Boyut Seçin--</option>
              <option value="Küçük">Küçük</option>
              <option value="Orta">Orta</option>
              <option value="Büyük">Büyük</option>
            </select>
          </p>
          <SCError data-cy="errorBoyut">{errors.boyut}</SCError>
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <p>
            <SCText>Pizza Çeşitleri:</SCText>
            <select
              id="pizzaType-input"
              name="cesit"
              value={formData.cesit}
              onChange={(event) => handleChange(event)}
              data-cy="inputPizza"
            >
              <option style={{ textAlign: "center" }} value="">
                -------Çeşit Seçiniz-------
              </option>
              <option value="Margarita Pizza">Margarita Pizza</option>
              <option value="Pepperoni Pizza">Pepperoni Pizza</option>
              <option value="4 Peynirli Pizza">4 Peynirli Pizza</option>
              <option value="Supreme Pizza">Supreme Pizza</option>
              <option value="Barbekü Tavuklu Pizza">
                Barbekü Tavuklu Pizza
              </option>
            </select>
          </p>
          <SCError data-cy="errorPizza">{errors.cesit}</SCError>
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <SCText>
            Ekstra Malzemeler: <SCOptional>(İsteğe Bağlı)</SCOptional>
          </SCText>
          <p>
            {malzemeler.map((event) => (
              <p>
                <input
                  id={event.id}
                  type="checkbox"
                  name={event.name}
                  checked={formData[event.name]}
                  value={event.malzemeAdi}
                  onChange={(event) => handleChange(event)}
                />
                <SCChecked htmlFor={event.id}>{event.malzemeAdi}</SCChecked>
              </p>
            ))}
          </p>
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <SCLabel htmlFor="special-text">
            Sipariş Notu: <SCOptional>(İsteğe Bağlı)</SCOptional>{" "}
          </SCLabel>
          <input
            id="special-text"
            name="özel"
            type="text"
            value={formData.özel}
            onChange={(event) => handleChange(event)}
            placeholder="Sipariş notu"
          />
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <SCLabel htmlFor="orderNumber-input">Sipariş Sayısı: </SCLabel>
          <input
            id="orderNumber-input"
            name="siparisSayisi"
            type="number"
            value={formData.siparisSayisi}
            onChange={(event) => handleChange(event)}
            data-cy="inputSiparisSayisi"
          />
          <SCError data-cy="errorSiparisSayisi">{errors.siparisSayisi}</SCError>
        </SCContainer>
        <SCContainer
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <p>
            <SCLabel>
              Telefon Numarası: <SCOptional>(İsteğe Bağlı)</SCOptional>
              <Phone />
            </SCLabel>
          </p>
        </SCContainer>
        <SCContainer>
          <p>
            <SCSubmit
              type="submit"
              id="order-button"
              disabled={buttonDisable}
              data-cy="buttonOrder"
            >
              Siparişlere Ekle
            </SCSubmit>
          </p>
        </SCContainer>
        <SCOrder
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            backgroundColor: "#e6a165",
          }}
        >
          <alert>
            <SiparisOlusturma siparis={siparis} />
          </alert>
        </SCOrder>
      </SCForm>
    </>
  );
}
