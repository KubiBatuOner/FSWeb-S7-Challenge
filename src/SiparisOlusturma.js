import React from "react";
import styled from "styled-components";

const SCSiparisOlusturma = styled.p`
  background: #d47b2e;
  color: white;
  padding: 10px;
  text-align: center;
`;

function SiparisOlusturma(props) {
  const { siparis } = props;

  return (
    <>
      {siparis && (
        <SCSiparisOlusturma data-cy="yeniSipariş">
          Tebrikler! Pizza siparişiniz alınmıştır. {siparis.id} numaralı sipariş{" "}
          {siparis.isim} isimli müşterimizin {siparis.adres} adresine
          gönderilmek üzere {siparis.siparisSayisi} adet {siparis.cesit}{" "}
          hazırlanmaya başlanmıştır.
        </SCSiparisOlusturma>
      )}
    </>
  );
}

export default SiparisOlusturma;
