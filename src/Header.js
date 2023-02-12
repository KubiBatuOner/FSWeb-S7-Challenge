import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SCContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;
const SCH1 = styled.h1`
  color: red;
  font-size: 3rem;
`;
const SCLinkContainer = styled.div`
  display: flex;
  column-gap: 1vw;
  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
    margin: 1vh 0;
  }
`;
const SCLink = styled.p`
  color: black;
  font-size: 1.2rem;
  border: 0.4rem solid red;
  border-radius: 30px;
  padding: 1vw 2vw;
  font-weight: bold;
  &:hover {
    background-color: red;
    color: white;
    font-weight: bold;
    border: 0.4rem solid black;
  }
  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;

export default function Header() {
  return (
    <SCContainer>
      <Link style={{ textDecoration: "none" }} to="/">
        <SCH1>Teknolojik Yemekler</SCH1>
      </Link>
      <SCLinkContainer>
        <Link style={{ textDecoration: "none" }} to="/">
          <SCLink>Ana Sayfa</SCLink>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/pizza">
          <SCLink>Sipariş Formu</SCLink>
        </Link>
      </SCLinkContainer>
    </SCContainer>
  );
}
