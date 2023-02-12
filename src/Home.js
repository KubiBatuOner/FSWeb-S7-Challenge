import React from "react";
import styled from "styled-components";

const SCMain = styled.main`
  background-image: url("https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg");
  background-repeat: round;
  height: 725px;
  text-align: center;
`;
const SCButton = styled.button`
  margin-top: 150px;
  display: inline-block;
  text-align: center;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  background: #f35b04;
  padding: 10px;
  font-weight: bold;
  &:hover {
    font-size: 30px;
    padding: 15px;
  }
`;
const SCFood = styled.h3`
  color: black;
  margin-top: 20px;
  text-align: center;
`;

export default function Home(props) {
  const { handleClick } = props;
  return (
    <>
      <SCMain>
        <SCButton data-cy="home-button" onClick={handleClick}>
          Pizzanızı Oluşturun
        </SCButton>
      </SCMain>
      <SCFood style={{ fontWeight: "bold" }}>Pizzanın Doğru Adresi</SCFood>
    </>
  );
}
