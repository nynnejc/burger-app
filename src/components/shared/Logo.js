import React from "react";
import styled from "@emotion/styled";

const LogoText = styled.h1`
  font-family: "IMFell", "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 10rem;
  color: #2C1831;
  margin-left: 10%;
  text-align: left;
  &:hover {
      color: #29409A;
  }
`;

const Logo = () => {
  return <LogoText>We ♡ Burgers</LogoText>;
};

export default Logo;