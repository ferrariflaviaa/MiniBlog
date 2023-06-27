/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { CustomFooterContainer} from './styles'
import instagram from "../../assets/instagram.png";
import linkedln from "../../assets/linkedln.png";
import wpp from "../../assets/wpp.png";

export const Footer = () => {
  return (
    <CustomFooterContainer>
        <h1>Conheça nossa empresa</h1>
      <div>
        <a
          href="https://www.linkedin.com/company/severustech/"
          target={"_blank"} rel="noreferrer"
        >
          <img src={linkedln} />
        </a>
        <a href="https://www.instagram.com/severus.tech/" target={"_blank"} rel="noreferrer">
          <img src={instagram} />
        </a>
        <a href="https://wa.me/5532999645446" target={"_blank"} rel="noreferrer">
          <img src={wpp} />
        </a>
      </div>
      <p>© 2023 Copyright: Flávia Ferrari</p>
    </CustomFooterContainer>
  )
}
